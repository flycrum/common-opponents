import {
	call,
	put,
	StrictEffect,
} from 'redux-saga/effects';
import mql from '../../vendor/mql';
import type { MqlNode } from '../../types/mqlNode';
import type { ApiGamesResponse, ApiGamesResponseKeyOfResultItem } from '../../types/apiGames';
import type { ApiTeamsResponse } from '../../types/apiTeams';
import { setApiGameResults } from '../slices/apiGamesSlice';
import { setApiTeamResults } from '../slices/apiTeamsSlice';
import axios from 'axios';
import store from '../store';
import { sagaActions } from './saga';
import { convertToTeamEntityNickname } from '../../utils/convertToTeamEntityNickname';
import { LoadedSource, setLoadedSource, setLoadingStage } from '../slices/initialLoadSlice';
import { parseGamesToOpponentsSaga } from './parseGamesToOpponentsSaga';
import { delay } from '../../utils/timeoutPromise';

const isMock = true;
const getMockApiGamesFn = () => import('../../mock/mockApiGames').then((result) => result.mockApiGames());
const getMockApiTeamsFn = () => import('../../mock/mockApiTeams').then((result) => result.mockApiTeams());

export function* fetchAllGamesSaga(): Generator<
	StrictEffect, // yield
	{ hasError: boolean, length: number, source: LoadedSource['source'] }, // return
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

			return {
				hasError: false,
				length: transformedResult?.length,
				source: isMock ? 'mock' : 'api',
			};
		}
	} catch(e) {
		// todo - handle
		yield put({ type: `${sagaActions.FETCH_ALL_GAMES_SAGA}_FAILED`, payload: e });

		return {
			hasError: true,
			length: 0,
			source: isMock ? 'mock' : 'api',
		};
	}
}

export function* fetchTeamsSaga(): Generator<
	StrictEffect, // yield
	{ hasError: boolean, length: number, source: LoadedSource['source'] }, // return
	ApiTeamsResponse // accept
	> {
	try {
		let result = yield call(
			isMock ? getMockApiTeamsFn : axios.request,
			{ url: 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams?groups=80&limit=200' }
		);
		// remove unused heavy props (for the sake of persistence operation ms) and set to store
		const transformedResult = result.data?.sports?.[0].leagues?.[0].teams.map((team) => {
			// @REMOVE ON LOAD
			team.team.links = undefined;
			// @REMOVE ON LOAD
			team.team.record = undefined;
			return team;
		});

		yield put(setApiTeamResults(transformedResult));

		return {
			hasError: false,
			length: transformedResult?.length,
			source: isMock ? 'mock' : 'api',
		};
	} catch(e) {
		// todo - handle
		yield put({ type: `${sagaActions.FETCH_TEAMS_SAGA}_FAILED`, payload: e });

		return {
			hasError: true,
			length: 0,
			source: isMock ? 'mock' : 'api',
		};
	}
}

export function* loadInitialData(): Generator<any, any, any> {
	let hasError = false;

	yield put(setLoadingStage('apiTeams'));
	// yield delay(2000);

	const teamResultsLength = store.getState().apiTeams.results?.ids.length;

	// if no schedule data resulted from rehydrating
	if (!teamResultsLength) {
		// wait for fetch
		const result: {
			hasError: boolean,
			source: LoadedSource['source'],
			length: number,
		} = yield call(fetchTeamsSaga);
		// todo: there must be a much better way to do this with redux-saga and generators
		hasError = result.hasError;

		// set source of data
		yield put(setLoadedSource({
			source: result.source,
			length: result.length,
		}));
	}
	else {
		// set source of data as persisted cache
		yield put(setLoadedSource({
			source: 'cache',
			length: teamResultsLength,
		}));
	}

	yield put(setLoadingStage('apiGames'));
	// yield delay(2000);

	const gameResultsLength = (store.getState().apiGames.results ?? []).length;

	// if no games data resulted from rehydrating and no errors encountered so far
	if (!gameResultsLength && !hasError) {
		// wait for fetch
		const result: {
			hasError: boolean,
			source: LoadedSource['source'],
			length: number,
		} = yield call(fetchAllGamesSaga);

		// set source of data
		// set source of data
		yield put(setLoadedSource({
			source: result.source,
			length: result.length,
		}));
	}
	else {
		// set source of data as persisted cache
		yield put(setLoadedSource({
			source: 'cache',
			length: gameResultsLength,
		}));
	}

	yield put(setLoadingStage(null));

	// now that we have all raw api data, let's pre-process some of the non-changing overhead for generating results
	yield call(parseGamesToOpponentsSaga);
}
