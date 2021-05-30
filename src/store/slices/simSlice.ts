import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ApiTeamsResponseTeamItem } from '../../types/apiTeams';

/**
 * Simulation details like teams selected, results, and other related details.
 */
export const simSlice = createSlice({
	name: 'sim',
	initialState: {
		results: null as string[] | null,
		team1: null as ApiTeamsResponseTeamItem | null,
		team2: null as ApiTeamsResponseTeamItem | null,
	},
	reducers: {
		setResults: (state, action: PayloadAction<string[] | null>) => {
			state.results = action.payload;
		},
		setSimTeam1: (state, action: PayloadAction<ApiTeamsResponseTeamItem>) => {
			if (action.payload !== state.team1) {
				state.team1 = action.payload;

				if (state.results) {
					state.results = null;
				}
			}
		},
		setSimTeam2: (state, action: PayloadAction<ApiTeamsResponseTeamItem>) => {
			if (action.payload !== state.team2) {
				state.team2 = action.payload;

				if (state.results) {
					state.results = null;
				}
			}
		},
	},
});

export const simActions = { ...simSlice.actions };
