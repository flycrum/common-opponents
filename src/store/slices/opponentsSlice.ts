import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { OpponentsLookupByTeam } from '../../types/OpponentsLookupByTeam';

/**
 * All games parsed and restructured as 'by Team' opponents lookup tables.
 */
export const opponentsSlice = createSlice({
	name: 'opponents',
	initialState: {} as OpponentsLookupByTeam,
	reducers: {
		// setApiGameResults: (state, action: PayloadAction<ScheduleApiResponse['data']['schedule']>) => {
		setTeamSchedules: (state, action: PayloadAction<OpponentsLookupByTeam>) => {
			return action.payload;
		},
	},
});

export const { setTeamSchedules } = opponentsSlice.actions;
