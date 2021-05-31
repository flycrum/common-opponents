import { put, StrictEffect } from 'redux-saga/effects';
import { sagaActions } from './saga';
import { apiTeamsSelectors } from '../slices/apiTeamsSlice';
import store from '../store';
import type { ApiTeamsResponseTeamItem } from '../../types/apiTeams';
import { simActions } from '../slices/simSlice';

/**
 * Randomly select and return a team.
 * @param excludeTeam Optional team to exclude from available teams.
 */
export function selectRandomTeam (excludeTeam?: ApiTeamsResponseTeamItem) {
	let allTeams = [...apiTeamsSelectors.selectAll(store.getState())];

	// todo - remove
	return excludeTeam ? allTeams[42] : allTeams[76]; // two teams that played each other twice
	// return excludeTeam ? allTeams[22] : allTeams[2];
	// return excludeTeam ? allTeams[73] : allTeams[2];

	// if (excludeTeam) {
	// 	// find index of team we want to exclude
	// 	const removeIndex = allTeams.indexOf(excludeTeam);
	// 	// clone allTeams as to not modify the original
	// 	allTeams = [...allTeams];
	// 	// remove excluded team from copy of allTeams
	// 	allTeams.splice(removeIndex, 1);
	// }
	//
	// const randomIndex = Math.floor(Math.random() * allTeams.length);
	// return allTeams[randomIndex] ?? null;
}

export function* randomSelectTeamsSaga(): Generator<
	StrictEffect, // yield
	void, // return
	any // accept
> {
	try {
		const { setSimTeam1, setSimTeam2 } = simActions;
		const team1 = selectRandomTeam();
		const team2 = selectRandomTeam(team1);
		yield put(setSimTeam1(team1));
		yield put(setSimTeam2(team2));
	} catch(e) {
		// todo - handle
		yield put({ type: `${sagaActions.RANDOM_SELECT_TEAMS}_FAILED`, payload: e });
	}
}
