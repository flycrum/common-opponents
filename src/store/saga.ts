import {
	call,
	put,
	take,
	takeLatest,
	StrictEffect,
} from 'redux-saga/effects';
import { ScheduleState, setSchedules } from './schedulesSlice';
import mql from '../vendor/mql';
import { REHYDRATE } from 'redux-persist';
import type {
	KeyOfScheduleApiResponseScheduleResultItem,
	ScheduleApiResponse,
} from '../types/scheduleApi';
import { MqlNode } from '../types/mqlNode';
import store from './store';
import axios from 'axios';
import { setTeams } from './leagueSlice';
import { LeagueApiResponse } from '../types/leagueApi';

export const sagaActions = {
	FETCH_SCHEDULE_SAGA: 'FETCH_SCHEDULE_SAGA',
	FETCH_TEAMS_SAGA: 'FETCH_TEAMS_SAGA',
};

const isMock = true;
const getMockScheduleFn = () => import('../mock/mockSchedule').then((result) => result.default());
const getMockTeamsFn = () => import('../mock/mockTeams').then((result) => result.default());

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

// todo - move
function convertToTeamEntityNickname(nickname: string) {
	return nicknameAlternativeLookup[nickname] ?? nickname;
}

export function* fetchScheduleSaga(): Generator<
	StrictEffect, // yield
	void, // return
	ScheduleApiResponse // accept
> {
	try {
		let result: ScheduleApiResponse = yield call(
			isMock ? getMockScheduleFn : mql,
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

		if (!result.data.schedule?.length) {
			throw new Error('No results');
		} else {
			const { teams } = store.getState().league;
			const transformedResult = result.data.schedule.reduce(
				(finalResult, scheduleItem) => {
					const { schoolGamesByOppId } = finalResult;
					// remove optional `(2)` ranking prefix
					const teamWinnerName = scheduleItem.teamWinnerName?.replace(/ *\([0-9)]*\) */g, "")?.trim() ?? 'unknown-team';
					const teamLoserName = scheduleItem.teamLoserName?.replace(/ *\([0-9)]*\) */g, "")?.trim() ?? 'unknown-team';
					const teamWinnerEntity = teams.entities[convertToTeamEntityNickname(teamWinnerName)];
					const teamLoserEntity = teams.entities[convertToTeamEntityNickname(teamLoserName)];
					const finalTeamWinnerName = teamWinnerEntity?.team.nickname ?? teamWinnerName;
					const finalTeamLoserName = teamLoserEntity?.team.nickname ?? teamLoserName;

					// if (teamWinnerName !== item.teamWinnerName) {
					// 	console.log('!teamWinnerName: ', teamWinnerName, ' &orig: ', item.teamWinnerName);
					// }

					// !teamWinnerEntity && console.log('original nickname not currently supported: ', teamWinnerName);
					// !teamLoserEntity && console.log('original nickname not currently supported: ', teamLoserName);

					// if supported FBS team
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
					scheduleItem.teamWinnerName = finalTeamWinnerName;
					scheduleItem.teamLoserName = finalTeamLoserName;

					return finalResult;
				},
				{
					schoolGamesByOppId: {},
				} as ScheduleState,
			)

			// console.log('teams.length: ', teams.ids.length);
			// console.log('schoolGamesByOppId.length: ', Object.keys(transformedResult.schoolGamesByOppId).length);
			//
			// teams.ids.forEach((nickname) => {
			// 	if (!transformedResult.schoolGamesByOppId[nickname]) {
			// 		console.log('not found: ', nickname);
			// 	}
			// });

			yield put(setSchedules(transformedResult))
		}
	} catch(e) {
		// todo - handle
		yield put({ type: `${sagaActions.FETCH_SCHEDULE_SAGA}_FAILED`, payload: e });
	}
}

export function* fetchTeamsSaga(): Generator<
	StrictEffect, // yield
	{ hasError: boolean }, // return
	LeagueApiResponse // accept
> {
	try {
		let result = yield call(
			isMock ? getMockTeamsFn : axios.request,
			{ url: 'http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams?groups=80&limit=200' }
		);
		yield put(setTeams(result.data?.sports?.[0].leagues?.[0].teams));
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
	if (!store.getState().league.teams?.ids.length) {
		// wait for fetch
		const result: { hasError: boolean } = yield call(fetchTeamsSaga);
		hasError = result.hasError;
	}

	// if no schedule data resulted from rehydrating and no errors encountered so far
	// todo - check for better measurement of this (perhaps via `isLoaded` state)
	if (!store.getState().schedule.schoolGamesByOppId?.length && !hasError) {
		// wait for fetch
		yield call(fetchScheduleSaga);
	}
}

export default function* rootSaga(): Generator<any, any, any> {
	// wait for rehydrated action (blocking)
	yield take(REHYDRATE);
	// load initial data
	yield call(loadInitialData);
	// listen for action and execute fetch (non-blocking)
	yield takeLatest(sagaActions.FETCH_SCHEDULE_SAGA, fetchScheduleSaga);
	yield takeLatest(sagaActions.FETCH_TEAMS_SAGA, fetchTeamsSaga);
}
