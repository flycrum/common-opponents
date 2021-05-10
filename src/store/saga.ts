import {
	call,
	put,
	takeEvery,
	StrictEffect,
} from 'redux-saga/effects';
import { setSchedules } from "./schedulesSlice";
import mql from '../vendor/mql';
import {
	KeyOfScheduleApiResponseScheduleResultItem,
	ScheduleApiResponse,
} from '../types/scheduleApi';
import { MqlNode } from '../types/mqlNode';

export const sagaActions = {
	FETCH_SCHEDULE_SAGA: 'FETCH_DATA_SAGA',
};

export function* fetchScheduleSaga(): Generator<
	StrictEffect,
	any,
	ScheduleApiResponse
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

export default function* rootSaga() {
	yield takeEvery(sagaActions.FETCH_SCHEDULE_SAGA, fetchScheduleSaga);
}
