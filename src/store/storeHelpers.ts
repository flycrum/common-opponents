import type { ReducersMapObject } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { AppState } from './store';

/**
 * The number of reducer states persisted and therefore number of `persist/REHYDRATE` dispatches called.
 */
export let COUNT_REDUCERS_PERSISTED = 0;
export let PERSIST_KEY_PREFIX = 'app-state-';

/**
 * Takes a list of reducers and individually sets each one up to persist to their own local storage entry.
 * @param reducers
 */
export function configurePersist<S>(
	reducers: ReducersMapObject<S, any>
): ReducersMapObject<S, any> {
	return Object.entries(reducers).reduce(
		(newReducers, [reducerName, reducer]: [string, any]) => {
			COUNT_REDUCERS_PERSISTED += 1;

			newReducers[reducerName] = persistReducer(
				{
					key: `${PERSIST_KEY_PREFIX}${reducerName}`,
					version: 1,
					storage,
				},
				reducer,
			);
			return newReducers;
		},
		{} as ReducersMapObject,
	);
}

export function getPersistKeyByStateName (stateName: string) {
	return `persist:${PERSIST_KEY_PREFIX}${stateName}`;
}

/**
 * Determines whether to use mock data or not, look to the store then envs else default to false.
 */
export function getOptionsUseMockApiGames (store: AppState) {
	return store.options.useMockApiGames ?? process.env.REACT_APP_USE_MOCK_FOR_APIS ?? false;
}

/**
 * Determines whether to use mock data or not, look to the store then envs else default to false.
 */
export function getOptionsUseMockApiTeams (store: AppState) {
	return store.options.useMockApiTeams ?? process.env.REACT_APP_USE_MOCK_FOR_APIS ?? false;
}
