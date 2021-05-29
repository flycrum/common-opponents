import {
	call,
	take,
	takeLatest,
} from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import {
	loadInitialData,
} from './initialDataFetchSaga';
import { randomSelectTeamsSaga } from './randomSelectTeamsSaga';

export const sagaActions = {
	FETCH_ALL_GAMES_SAGA: 'FETCH_SCHEDULE_SAGA',
	FETCH_TEAMS_SAGA: 'FETCH_TEAMS_SAGA',
	PARSE_TEAM_SCHEDULES: 'PARSE_TEAM_SCHEDULES',
	RANDOM_SELECT_TEAMS: 'RANDOM_SELECT_TEAMS',
};

export default function* rootSaga(): Generator<any, any, any> {
	// wait for rehydrated action (blocking)
	yield take(REHYDRATE);
	// load initial data (blocking)
	yield call(loadInitialData);
	// listen for each action and execute fetch (non-blocking)
	yield takeLatest(sagaActions.RANDOM_SELECT_TEAMS, randomSelectTeamsSaga);
}
