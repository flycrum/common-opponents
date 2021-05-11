import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ApiGamesResponseEventResults } from '../types/apiGames';

/**
 * Original game events data that can later be joined with teams to further analyze.
 * Keep as separate persisted store since it can be crazy large.
 * As easier to work with original persisted data and reconstruct if this stays pure.
 */
export const apiGamesSlice = createSlice({
	name: 'apiGames',
	initialState: {
		results: [] as ApiGamesResponseEventResults,
	},
	reducers: {
		setApiGameResults: (state, action: PayloadAction<ApiGamesResponseEventResults>) => {
			state.results = action.payload;
		}
	},
});

export const { setApiGameResults } = apiGamesSlice.actions;
