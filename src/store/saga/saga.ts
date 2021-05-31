import {
	all,
	call,
	take,
	takeLatest,
} from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import {
	loadInitialData,
} from './initialDataFetchSaga';
import { findCommonOpponents } from './findCommonOpponentsSaga';
import { randomSelectTeamsSaga } from './randomSelectTeamsSaga';
import { COUNT_REDUCERS_PERSISTED } from '../storeHelpers';

export const sagaActions = {
	FETCH_ALL_GAMES_SAGA: 'FETCH_SCHEDULE_SAGA',
	FETCH_TEAMS_SAGA: 'FETCH_TEAMS_SAGA',
	FIND_COMMON_OPPONENTS: 'FIND_COMMON_OPPONENTS',
	PARSE_GAMES_TO_TEAM_SCHEDULES: 'PARSE_GAMES_TO_TEAM_SCHEDULES',
	RANDOM_SELECT_TEAMS: 'RANDOM_SELECT_TEAMS',
};

export default function* rootSaga(): Generator<any, any, any> {
	// wait for ALL rehydrated actions to complete (blocking)
	// the number of 'take' waiting yields must be exact otherwise one of two things will occur:
	// 1. too few yields will kickoff rest of logic before all store has been rehydrated w/ possible undesired effects
	// 2. too many yields will means the rest of the logic will never execute
	yield all([...Array(COUNT_REDUCERS_PERSISTED + 10)].map(() =>
		take(REHYDRATE)
	));

	// load initial data (blocking)
	yield call(loadInitialData);
	// listen for each action and execute fetch (non-blocking)
	yield takeLatest(sagaActions.FIND_COMMON_OPPONENTS, findCommonOpponents);
	yield takeLatest(sagaActions.RANDOM_SELECT_TEAMS, randomSelectTeamsSaga);
}
