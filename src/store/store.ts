import { configureStore } from '@reduxjs/toolkit';
import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux';
import { persistStore } from 'redux-persist';
import middleware, { runMiddleware } from './middleware';
import { schedulesSlice } from './schedulesSlice';
import { leagueSlice } from './leagueSlice';
import { configurePersist } from './storeHelpers';

const store = configureStore({
	reducer: configurePersist({
		league: leagueSlice.reducer,
		schedule: schedulesSlice.reducer,
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
