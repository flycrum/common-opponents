import { configureStore } from '@reduxjs/toolkit';
import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux';

import { schedulesSlice } from "./schedulesSlice";
import middleware, { runMiddleware } from './middleware';

const store = configureStore({
	reducer: {
		schedule: schedulesSlice.reducer,
	},
	middleware,
});

runMiddleware();

export default store;

// Inferred store state
export type AppState = ReturnType<typeof store.getState>;
// Inferred dispatch typings
export type AppDispatch = typeof store.dispatch;
// Export a hook that can be reused to resolve types
export const useAppDispatch = () => useDispatch<AppDispatch>();
// export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
