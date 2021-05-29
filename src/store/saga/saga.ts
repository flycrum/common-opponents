import {
	call,
	take,
	takeLatest,
} from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import {
	fetchAllGamesSaga,
	fetchTeamsSaga,
	loadInitialData,
} from './initialDataFetchSaga';

export const sagaActions = {
	FETCH_ALL_GAMES_SAGA: 'FETCH_SCHEDULE_SAGA',
	FETCH_TEAMS_SAGA: 'FETCH_TEAMS_SAGA',
	PARSE_TEAM_SCHEDULES: 'PARSE_TEAM_SCHEDULES',
};

export default function* rootSaga(): Generator<any, any, any> {
	// wait for rehydrated action (blocking)
	yield take(REHYDRATE);
	// load initial data
	yield call(loadInitialData);
	// listen for each action and execute fetch (non-blocking)
	yield takeLatest(sagaActions.FETCH_ALL_GAMES_SAGA, fetchAllGamesSaga);
	yield takeLatest(sagaActions.FETCH_TEAMS_SAGA, fetchTeamsSaga);
}
