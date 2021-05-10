import {
	call,
	put,
	take,
	takeLatest,
	StrictEffect,
} from 'redux-saga/effects';
import { setSchedules } from './schedulesSlice';
import mql from '../vendor/mql';
import { REHYDRATE } from 'redux-persist';
import type {
	KeyOfScheduleApiResponseScheduleResultItem,
	ScheduleApiResponse,
} from '../types/scheduleApi';
import { MqlNode } from '../types/mqlNode';
import store from './store';
import axios from 'axios';
import { setTeams } from './teamsSlice';
import { TeamApiResponse } from '../types/teamApi';

export const sagaActions = {
	FETCH_SCHEDULE_SAGA: 'FETCH_SCHEDULE_SAGA',
	FETCH_TEAMS_SAGA: 'FETCH_TEAMS_SAGA',
};

export function* fetchScheduleSaga(): Generator<
	StrictEffect, // yield
	void, // return
	ScheduleApiResponse // accept
> {
	try {
		let result = yield call(
			mql,
			`https://www.sports-reference.com/cfb/years/2020-schedule.html`,
			{
				apiKey: process.env.REACT_APP_MICROLINK_API_KEY,
				data: {
					schedule: {
						selectorAll: '#schedule tbody tr:not(.thead)',
						attr: {
							date: {
								selector: '[data-stat="date_game"] a',
								attr: 'text',
								type: 'string',
							},
							boxscoreUrl: {
								selector: '[data-stat="date_game"] a',
								attr: 'href',
								type: 'url',
							},
							teamWinnerName: {
								selector: '[data-stat="winner_school_name"]',
								attr: 'text',
								type: 'string',
							},
							teamWinnerPoints: {
								selector: '[data-stat="winner_points"]',
								attr: 'text',
								type: 'string',
							},
							atLoser: {
								selector: '[data-stat="game_location"]',
								attr: 'text',
								type: 'string',
							},
							teamLoserName: {
								selector: '[data-stat="loser_school_name"]',
								attr: 'text',
								type: 'string',
							},
							teamLoserPoints: {
								selector: '[data-stat="loser_points"]',
								attr: 'text',
								type: 'string',
							},
							notes: {
								selector: '[data-stat="notes"]',
								attr: 'text',
								type: 'string',
							},
						} as KeyOfScheduleApiResponseScheduleResultItem<MqlNode>, // ensure keys match related typings
					},
				},
			},
		);

		if (!result.data.schedule) {
			yield put({ type: `${sagaActions.FETCH_SCHEDULE_SAGA}_FAILED`, payload: 'No Results' });
		} else {
			yield put(setSchedules(result.data.schedule));
		}
	} catch(e) {
		yield put({ type: `${sagaActions.FETCH_SCHEDULE_SAGA}_FAILED`, payload: e });
	}
}

export function* fetchTeamsSaga(): Generator<
	StrictEffect, // yield
	void, // return
	TeamApiResponse // accept
> {
	try {
		let result = yield call(() => axios.request<any[]>({
			url: 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams?groups=80&limit=2',
		}));
		yield put(setTeams(result.data?.sports?.[0].leagues?.[0].teams));
	} catch(e) {
		yield put({ type: `${sagaActions.FETCH_TEAMS_SAGA}_FAILED`, payload: e });
	}
}

export default function* rootSaga() {
	// wait for rehydrated action (blocking)
	yield take(REHYDRATE);

	// if no schedule data resulted from rehydrating
	if (!store.getState().teams.schools?.length) {
		// wait for fetch
		yield call(fetchTeamsSaga);
	}

	// if no schedule data resulted from rehydrating
	if (!store.getState().schedule.events?.length) {
		// wait for fetch
		yield call(fetchScheduleSaga);
	}

	// listen for action and execute fetch (non-blocking)
	yield takeLatest(sagaActions.FETCH_SCHEDULE_SAGA, fetchScheduleSaga);
	yield takeLatest(sagaActions.FETCH_TEAMS_SAGA, fetchTeamsSaga);
}
