import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux';
import { persistStore } from 'redux-persist';
import middleware, { runMiddleware } from './middleware';
import { apiGamesSlice } from './apiGamesSlice';
import { apiTeamsSlice } from './apiTeamsSlice';
import { configurePersist } from './storeHelpers';
import { simSlice } from './simSlice';

const store = configureStore({
	reducer: combineReducers({
		...configurePersist({
			apiTeams: apiTeamsSlice.reducer,
			apiGames: apiGamesSlice.reducer,
		}),
		sim: simSlice.reducer,
	}),
	middleware,
});

runMiddleware();

export default store;

export const storePersistor = persistStore(store);

// Inferred store state
export type AppState = ReturnType<typeof store.getState>;
// Inferred dispatch typings
export type AppDispatch = typeof store.dispatch;
// Export a hook that can be reused to resolve types
export const useAppDispatch = () => useDispatch<AppDispatch>();
// export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
