import { call, put } from 'redux-saga/effects';
import store from '../store';
import { setLoadedSource, setLoadingStage } from '../slices/initialLoadSlice';
import type { LoadedSource } from '../slices/initialLoadSlice';
import { parseGamesToOpponentsSaga } from './parseGamesToOpponentsSaga';
import { fetchApiTeamsSaga } from './fetchApiTeamsSaga';
import { fetchApiGamesSaga } from './fetchApiGamesSaga';

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
		} = yield call(fetchApiTeamsSaga);
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
		} = yield call(fetchApiGamesSaga);

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
