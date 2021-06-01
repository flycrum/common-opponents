import { call, put, StrictEffect } from 'redux-saga/effects';
import { LoadedSource } from '../slices/initialLoadSlice';
import { ApiTeamsResponse } from '../../types/apiTeams';
import { getOptionsUseMockApiTeams } from '../storeHelpers';
import store from '../store';
import axios from 'axios';
import { setApiTeamResults } from '../slices/apiTeamsSlice';
import { sagaActions } from './saga';

const getMockApiTeamsFn = () => import('../../mock/mockApiTeams').then((result) => result.mockApiTeams());

export function* fetchApiTeamsSaga(): Generator<
	StrictEffect, // yield
	{ hasError: boolean, length: number, source: LoadedSource['source'] }, // return
	ApiTeamsResponse // accept
	> {
	const useMock = getOptionsUseMockApiTeams(store.getState());

	try {
		const result = yield call(
			useMock ? getMockApiTeamsFn : axios.request,
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
			source: useMock ? 'mock' : 'api',
		};
	} catch(e) {
		// todo - handle
		yield put({ type: `${sagaActions.FETCH_TEAMS_SAGA}_FAILED`, payload: e });

		return {
			hasError: true,
			length: 0,
			source: useMock ? 'mock' : 'api',
		};
	}
}
