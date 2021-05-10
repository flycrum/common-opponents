import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { TeamApiResponseSchoolResultItem } from '../types/teamApi';

/**
 * Teams/schools data.
 */
export const teamsSlice = createSlice({
	name: 'teams',
	initialState: {
		schools: [] as TeamApiResponseSchoolResultItem[],
	},
	reducers: {
		setTeams: (state, action: PayloadAction<TeamApiResponseSchoolResultItem[] | null>) => {
			state.schools = action.payload || [];
		}
	},
});

export const { setTeams } = teamsSlice.actions;
