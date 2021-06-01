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
import { opponentsSlice } from './slices/opponentsSlice';
import { initialLoadSlice } from './slices/initialLoadSlice';
import { simHistorySlice } from './slices/simHistorySlice';
import { optionsSlice } from './slices/optionsSlice';

const store = configureStore({
	reducer: combineReducers({
		...configurePersist({
			apiTeams: apiTeamsSlice.reducer,
			apiGames: apiGamesSlice.reducer,
			options: optionsSlice.reducer,
			simHistory: simHistorySlice.reducer,
		}),
		initialData: initialLoadSlice.reducer,
		opponents: opponentsSlice.reducer,
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
