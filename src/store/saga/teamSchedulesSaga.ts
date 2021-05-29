import { put, StrictEffect } from 'redux-saga/effects';
import type { ApiGamesResponse, ApiGamesResponseEventResults } from '../../types/apiGames';
import { sagaActions } from './saga';
import store from '../store';
import { setTeamSchedules, TeamSchedulesState } from '../slices/schedulesSlice';

/**
 * Converts team nickname discrepancies from `Sports Reference` to `ESPN`.
 */
const nicknameAlternativeLookup: {[nickname: string]: string} = {
	'Alabama-Birmingham': 'UAB',
	'Appalachian State': 'Appalachian St',
	'Bowling Green State': 'Bowling Green',
	'Brigham Young': 'BYU',
	'California': 'Cal',
	'Central Florida': 'UCF',
	'Central Michigan': 'Cent Michigan',
	'Coastal Carolina': 'C. Carolina',
	'Eastern Michigan': 'E Michigan',
	'Florida Atlantic': 'FAU',
	'Florida International': 'Florida Intl',
	'Georgia Southern': 'Ga Southern',
	'Hawaii': `Hawai'i`,
	'Louisiana-Monroe': 'UL Monroe',
	'Louisiana State': 'LSU',
	'Massachusetts': 'UMass',
	'Miami (FL)': 'Miami',
	'Michigan State': 'Mich. St.',
	'Middle Tennessee State': 'Mid Tennessee',
	'Mississippi': 'Ole Miss',
	'Mississippi State': 'Mississippi St',
	'Nevada-Las Vegas': 'UNLV',
	'New Mexico State': 'New Mexico St',
	'North Carolina State': 'NC State',
	'Northern Illinois': 'N Illinois',
	'Oklahoma State': 'Oklahoma St',
	'Oregon State': 'Oregon St',
	'San Jose State': 'San José State',
	'South Carolina': 'S Carolina',
	'Southern California': 'USC',
	'Southern Methodist': 'SMU',
	'Southern Mississippi': 'Southern Miss',
	'South Florida': 'USF',
	'Texas Christian': 'TCU',
	'Texas-El Paso': 'UTEP',
	'Texas-San Antonio': 'UTSA',
	'Washington State': 'Washington St',
	'Western Kentucky': 'W Kentucky',
	'Western Michigan': 'W Michigan',
};

function convertToTeamEntityNickname(nickname: string) {
	return nicknameAlternativeLookup[nickname] ?? nickname;
}

/**
 * Parsed and restructure all games raw data as 'by Team' schedule lookup tables.
 */
export function* parseGamesAndGenerateTeamSchedules(allGamesResult: ApiGamesResponseEventResults): Generator<
	StrictEffect, // yield
	void, // return
	ApiGamesResponse // accept
> {
	try {
		const { results: teamsAdapter } = store.getState().apiTeams;
		const transformedResult = allGamesResult.reduce(
			(finalResult, scheduleItem) => {
				const schoolGamesByOppId = finalResult;
				// remove optional `(2)` ranking prefix
				const teamWinnerName = scheduleItem.teamWinnerName?.replace(/ *\([0-9)]*\) */g, "")?.trim() ?? 'unknown-team';
				const teamLoserName = scheduleItem.teamLoserName?.replace(/ *\([0-9)]*\) */g, "")?.trim() ?? 'unknown-team';
				const teamWinnerEntity = teamsAdapter.entities[convertToTeamEntityNickname(teamWinnerName)];
				const teamLoserEntity = teamsAdapter.entities[convertToTeamEntityNickname(teamLoserName)];
				const finalTeamWinnerName = teamWinnerEntity?.team.nickname ?? teamWinnerName;
				const finalTeamLoserName = teamLoserEntity?.team.nickname ?? teamLoserName;

				// if (teamWinnerName !== item.teamWinnerName) {
				// 	console.log('!teamWinnerName: ', teamWinnerName, ' &orig: ', item.teamWinnerName);
				// }

				// !teamWinnerEntity && console.log('original nickname not currently supported: ', teamWinnerName);
				// !teamLoserEntity && console.log('original nickname not currently supported: ', teamLoserName);

				// if supported FBS team
				// todo - can we reduce dupe logic between winner and loser lookup table generation?
				if(teamWinnerEntity) {
					// if team doesn't have a lookup table yet
					if (!schoolGamesByOppId[finalTeamWinnerName]) {
						schoolGamesByOppId[finalTeamWinnerName] = {};
					}

					// if opponent lookup table doesn't exist yet (this allows for multiple games against same opp)
					if (!schoolGamesByOppId[finalTeamWinnerName][finalTeamLoserName]) {
						// since opponent doesn't necessarily have to be an FBS team, use non-entity name (b/c there might not be one)
						schoolGamesByOppId[finalTeamWinnerName][finalTeamLoserName] = [];
					}

					schoolGamesByOppId[finalTeamWinnerName][finalTeamLoserName].push(scheduleItem);
				}

				// if supported FBS team
				if(teamLoserEntity) {
					// if team doesn't have a lookup table yet
					if (!schoolGamesByOppId[finalTeamLoserName]) {
						schoolGamesByOppId[finalTeamLoserName] = {};
					}

					// if opponent lookup table doesn't exist yet (this allows for multiple games against same opp)
					if (!schoolGamesByOppId[finalTeamLoserName][finalTeamWinnerName]) {
						// since opponent doesn't necessarily have to be an FBS team, use non-entity name (b/c there might not be one)
						schoolGamesByOppId[finalTeamLoserName][finalTeamWinnerName] = [];
					}

					schoolGamesByOppId[finalTeamLoserName][finalTeamWinnerName].push(scheduleItem);
				}

				// update event team names to match the entity name so we can look them up later when needed
				// todo - still need to do but getting error: `index.js:1 A non-serializable value was detected in an action, in the path: `payload`. Value: TypeError: Cannot assign to read only property 'teamWinnerName' of object '#<Object>'`
				// scheduleItem.teamWinnerName = finalTeamWinnerName;
				// scheduleItem.teamLoserName = finalTeamLoserName;

				return finalResult;
			},
			{
				schoolGamesByOppId: {},
			} as TeamSchedulesState,
		)

		// console.log('teamsAdapter.length: ', teamsAdapter.ids.length);
		// console.log('transformedResult: ', transformedResult);
		// console.log('schoolGamesByOppId.length: ', Object.keys(transformedResult).length);

		teamsAdapter.ids.forEach((nickname) => {
			if (!transformedResult[nickname]) {
				// console.log('not found: ', nickname);
			}
		});

		yield put(setTeamSchedules(transformedResult));
	} catch(e) {
		// todo - handle
		yield put({ type: `${sagaActions.PARSE_TEAM_SCHEDULES}_FAILED`, payload: e });
	}
}
