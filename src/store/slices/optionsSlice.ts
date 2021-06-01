import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ApiGamesResponseEventResults } from '../../types/apiGames';

/**
 * User options.
 * @persisted
 */
export const optionsSlice = createSlice({
	name: 'options',
	initialState: {
		/** API call results **/
		results: [] as ApiGamesResponseEventResults,
		/**
		 * Whether to use mock data for loading apiGames.
		 * Note: this is specifically set to 'null' initially to be able to determine whether explicitly set or not.
		 */
		useMockApiGames: null as boolean | null,
		/**
		 * Whether to use mock data for loading apiTeams.
		 * Note: this is specifically set to 'null' initially to be able to determine whether explicitly set or not.
		 */
		useMockApiTeams: null as boolean | null,
	},
	reducers: {
		setOptionsUseMockApiGames: (state, action: PayloadAction<boolean | null>) => {
			state.useMockApiGames = action.payload;
		},
		setOptionsUseMockApiTeams: (state, action: PayloadAction<boolean | null>) => {
			state.useMockApiTeams = action.payload;
		},
	},
});

export const {
	setOptionsUseMockApiGames,
	setOptionsUseMockApiTeams,
} = optionsSlice.actions;
