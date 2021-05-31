import { call, put, StrictEffect } from 'redux-saga/effects';
import type { ApiGamesResponse, ApiGamesResponseKeyOfResultItem } from '../../types/apiGames';
import mql from '../../vendor/mql';
import { MqlNode } from '../../types/mqlNode';
import { setApiGameResults } from '../slices/apiGamesSlice';
import { parseGamesToOpponentsSaga } from './parseGamesToOpponentsSaga';
import { ApiTeamsResponse } from '../../types/apiTeams';
import axios from 'axios';
import { setApiTeamResults } from '../slices/apiTeamsSlice';
import store from '../store';
import { sagaActions } from './saga';
import { convertToTeamEntityNickname } from '../../utils/convertToTeamEntityNickname';

const isMock = true;
const getMockApiGamesFn = () => import('../../mock/mockApiGames').then((result) => result.mockApiGames());
const getMockApiTeamsFn = () => import('../../mock/mockApiTeams').then((result) => result.mockApiTeams());

export function* fetchAllGamesSaga(): Generator<
	StrictEffect, // yield
	void, // return
	ApiGamesResponse // accept
> {
	try {
		const result: ApiGamesResponse = yield call(
			isMock ? getMockApiGamesFn : mql,
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
			const { results: teamsAdapter } = store.getState().apiTeams;

			// post-process results to match names from teams api
			const transformedResult = allGamesResult.map((gameMatchups) => {
				// remove optional `(2)` ranking prefix
				const teamWinnerName = gameMatchups.teamWinnerName?.replace(/ *\([0-9)]*\) */g, "")?.trim() ?? 'unknown-team';
				const teamLoserName = gameMatchups.teamLoserName?.replace(/ *\([0-9)]*\) */g, "")?.trim() ?? 'unknown-team';
				const teamWinnerEntity = teamsAdapter.entities[convertToTeamEntityNickname(teamWinnerName)];
				const teamLoserEntity = teamsAdapter.entities[convertToTeamEntityNickname(teamLoserName)];
				const finalTeamWinnerName = teamWinnerEntity?.team.nickname ?? teamWinnerName;
				const finalTeamLoserName = teamLoserEntity?.team.nickname ?? teamLoserName;

				// if (teamWinnerName !== gameMatchups.teamWinnerName) {
				// 	console.log('!teamWinnerName: ', teamWinnerName, ' &orig: ', gameMatchups.teamWinnerName);
				// }

				// !teamWinnerEntity && console.warn('original nickname not currently supported: ', teamWinnerName);
				// !teamLoserEntity && console.warn('original nickname not currently supported: ', teamLoserName);

				// update event team names to match the entity name so we can look them up later when needed
				// todo - still need to do but getting error: `index.js:1 A non-serializable value was detected in an action, in the path: `payload`. Value: TypeError: Cannot assign to read only property 'teamWinnerName' of object '#<Object>'`
				gameMatchups.teamWinnerName = finalTeamWinnerName;
				gameMatchups.teamLoserName = finalTeamLoserName;

				return gameMatchups;
			});

			yield put(setApiGameResults(transformedResult));

			// now that we have all raw api data, let's pre-process some of the non-changing overhead for generating results
			// todo - would like to move this to saga flow rather than this nested call (need to test prev fails so this wouldn't run)
			yield call(parseGamesToOpponentsSaga, transformedResult);
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
			isMock ? getMockApiTeamsFn : axios.request,
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
