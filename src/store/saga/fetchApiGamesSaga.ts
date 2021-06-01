import { call, put, StrictEffect } from 'redux-saga/effects';
import { LoadedSource } from '../slices/initialLoadSlice';
import { ApiGamesResponse, ApiGamesResponseKeyOfResultItem } from '../../types/apiGames';
import { getOptionsUseMockApiGames } from '../storeHelpers';
import store from '../store';
import mql from '../../vendor/mql';
import { MqlNode } from '../../types/mqlNode';
import { convertToTeamEntityNickname } from '../../utils/convertToTeamEntityNickname';
import { setApiGameResults } from '../slices/apiGamesSlice';
import { sagaActions } from './saga';

const getMockApiGamesFn = () => import('../../mock/mockApiGames').then((result) => result.mockApiGames());

export function* fetchApiGamesSaga(): Generator<
	StrictEffect, // yield
	{ hasError: boolean, length: number, source: LoadedSource['source'] }, // return
	ApiGamesResponse // accept
	> {
	const useMock = getOptionsUseMockApiGames(store.getState());

	try {
		const result: ApiGamesResponse = yield call(
			useMock ? getMockApiGamesFn : mql,
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
				source: useMock ? 'mock' : 'api',
			};
		}
	} catch(e) {
		// todo - handle
		yield put({ type: `${sagaActions.FETCH_ALL_GAMES_SAGA}_FAILED`, payload: e });

		return {
			hasError: true,
			length: 0,
			source: useMock ? 'mock' : 'api',
		};
	}
}
