import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux';
import { persistStore } from 'redux-persist';
import middleware, { runMiddleware } from './middleware';
import { apiGamesSlice } from './slices/apiGamesSlice';
import { apiTeamsSlice } from './slices/apiTeamsSlice';
import { configurePersist } from './storeHelpers';
import { simSlice } from './slices/simSlice';
import { schedulesSlice } from './slices/schedulesSlice';

const store = configureStore({
	reducer: combineReducers({
		...configurePersist({
			apiTeams: apiTeamsSlice.reducer,
			apiGames: apiGamesSlice.reducer,
		}),
		schedules: schedulesSlice.reducer,
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
