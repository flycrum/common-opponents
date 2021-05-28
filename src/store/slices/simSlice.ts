import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ApiTeamsResponseTeamItem } from '../../types/apiTeams';

/**
 * Simulation details like teams selected and other related options.
 */
export const simSlice = createSlice({
	name: 'sim',
	initialState: {
		team1: null as ApiTeamsResponseTeamItem | null,
		team2: null as ApiTeamsResponseTeamItem | null,
	},
	reducers: {
		setSimTeam1: (state, action: PayloadAction<ApiTeamsResponseTeamItem>) => {
			state.team1 = action.payload;
		},
		setSimTeam2: (state, action: PayloadAction<ApiTeamsResponseTeamItem>) => {
			state.team2 = action.payload;
		},
	},
});

export const simActions = { ...simSlice.actions };
