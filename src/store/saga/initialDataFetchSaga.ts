import { call, put, StrictEffect } from 'redux-saga/effects';
import { ApiGamesResponse, ApiGamesResponseKeyOfResultItem } from '../../types/apiGames';
import mql from '../../vendor/mql';
import { MqlNode } from '../../types/mqlNode';
import { setApiGameResults } from '../slices/apiGamesSlice';
import { parseGamesAndGenerateTeamSchedules } from './teamSchedulesSaga';
import { ApiTeamsResponse } from '../../types/apiTeams';
import axios from 'axios';
import { setApiTeamResults } from '../slices/apiTeamsSlice';
import store from '../store';
import { sagaActions } from './saga';

const isMock = true;
const getMockScheduleFn = () => import('../../mock/mockSchedule').then((result) => result.default());
const getMockTeamsFn = () => import('../../mock/mockTeams').then((result) => result.default());

export function* fetchAllGamesSaga(): Generator<
	StrictEffect, // yield
	void, // return
	ApiGamesResponse // accept
	> {
	try {
		let result: ApiGamesResponse = yield call(
			isMock ? getMockScheduleFn : mql,
			`https://www.sports-reference.com/cfb/years/2020-schedule.html`,
			{
				apiKey: process.env.REACT_APP_MICROLINK_API_KEY,
				data: {
					apiGames: {
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
						} as ApiGamesResponseKeyOfResultItem<MqlNode>, // ensure keys match related typings
					},
				},
			},
		);

		const allGamesResult = result.data.schedule;

		if (!allGamesResult?.length) {
			throw new Error('No results');
		} else {
			yield put(setApiGameResults(allGamesResult));

			// load initial data
			// todo - would like to move this to saga flow rather than this nested call (need to test prev fails so this wouldn't run)
			yield call(parseGamesAndGenerateTeamSchedules, allGamesResult);
		}
	} catch(e) {
		// todo - handle
		yield put({ type: `${sagaActions.FETCH_ALL_GAMES_SAGA}_FAILED`, payload: e });
	}
}

export function* fetchTeamsSaga(): Generator<
	StrictEffect, // yield
	{ hasError: boolean }, // return
	ApiTeamsResponse // accept
	> {
	try {
		let result = yield call(
			isMock ? getMockTeamsFn : axios.request,
			{ url: 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams?groups=80&limit=200' }
		);
		// remove unused heavy props (for the sake of persistence operation ms) and set to store
		yield put(setApiTeamResults(result.data?.sports?.[0].leagues?.[0].teams.map((team) => {
			// @REMOVE ON LOAD
			team.team.links = undefined;
			// @REMOVE ON LOAD
			team.team.record = undefined;
			return team;
		})));
		return { hasError: false };
	} catch(e) {
		// todo - handle
		yield put({ type: `${sagaActions.FETCH_TEAMS_SAGA}_FAILED`, payload: e });
		return { hasError: true };
	}
}

export function* loadInitialData(): Generator<any, any, any> {
	let hasError = false;

	// if no schedule data resulted from rehydrating
	if (!store.getState().apiTeams.results?.ids.length) {
		// wait for fetch
		const result: { hasError: boolean } = yield call(fetchTeamsSaga);
		hasError = result.hasError;
	}

	// if no schedule data resulted from rehydrating and no errors encountered so far
	// todo - check for better measurement of this (perhaps via `isLoaded` state)
	if (!store.getState().apiGames.results?.length && !hasError) {
		// wait for fetch
		yield call(fetchAllGamesSaga);
	}
}
