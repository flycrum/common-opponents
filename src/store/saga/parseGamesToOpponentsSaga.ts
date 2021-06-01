import { put, StrictEffect } from 'redux-saga/effects';
import type { ApiGamesResponse } from '../../types/apiGames';
import { sagaActions } from './saga';
import store from '../store';
import { setTeamOpponents } from '../slices/opponentsSlice';
import type { OpponentsLookupByTeam } from '../../types/OpponentsLookupByTeam';

/**
 * Parsed and restructure all games raw data as 'by Team' schedule lookup tables.
 */
export function* parseGamesToOpponentsSaga(): Generator<
	StrictEffect, // yield
	void, // return
	ApiGamesResponse // accept
> {
	try {
		const { results: teamsAdapter } = store.getState().apiTeams;
		const { results: apiGames } = store.getState().apiGames;

		const transformedResult = apiGames.reduce(
			(finalResult, scheduleItem) => {
				const schoolGamesByOppId = finalResult;
				const teamWinnerName = scheduleItem.teamWinnerName ?? '';
				const teamLoserName = scheduleItem.teamLoserName ?? '';
				const teamWinnerEntity = teamsAdapter.entities[teamWinnerName];
				const teamLoserEntity = teamsAdapter.entities[teamLoserName];

				// if supported FBS team
				// todo - can we reduce dupe logic between winner and loser lookup table generation?
				if(teamWinnerEntity) {
					// if team doesn't have a lookup table yet
					if (!schoolGamesByOppId[teamWinnerName]) {
						schoolGamesByOppId[teamWinnerName] = {};
					}

					// if opponent lookup table doesn't exist yet (this allows for multiple games against same opp)
					if (!schoolGamesByOppId[teamWinnerName][teamLoserName]) {
						// since opponent doesn't necessarily have to be an FBS team, use non-entity name (b/c there might not be one)
						schoolGamesByOppId[teamWinnerName][teamLoserName] = [];
					}

					schoolGamesByOppId[teamWinnerName][teamLoserName].push(scheduleItem);
				}

				// if supported FBS team
				if(teamLoserEntity) {
					// if team doesn't have a lookup table yet
					if (!schoolGamesByOppId[teamLoserName]) {
						schoolGamesByOppId[teamLoserName] = {};
					}

					// if opponent lookup table doesn't exist yet (this allows for multiple games against same opp)
					if (!schoolGamesByOppId[teamLoserName][teamWinnerName]) {
						// since opponent doesn't necessarily have to be an FBS team, use non-entity name (b/c there might not be one)
						schoolGamesByOppId[teamLoserName][teamWinnerName] = [];
					}

					schoolGamesByOppId[teamLoserName][teamWinnerName].push(scheduleItem);
				}

				return finalResult;
			},
			{
				schoolGamesByOppId: {},
			} as OpponentsLookupByTeam,
		)

		// teamsAdapter.ids.forEach((nickname) => {
		// 	if (!transformedResult[nickname]) {
		// 		console.log('not found: ', nickname, 'perhaps because they did not play in the given year');
		// 	}
		// });

		yield put(setTeamOpponents(transformedResult));
	} catch(e) {
		// todo - handle
		yield put({ type: `${sagaActions.PARSE_GAMES_TO_TEAM_SCHEDULES}_FAILED`, payload: e });
	}
}
