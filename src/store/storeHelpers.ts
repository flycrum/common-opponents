import type { ReducersMapObject } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/**
 * The number of reducer states persisted and therefore number of `persist/REHYDRATE` dispatches called.
 */
export let COUNT_REDUCERS_PERSISTED = 0;

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
					key: `app-state-${reducerName}`,
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
