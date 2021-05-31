import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { OpponentsLookupByTeam } from '../../types/OpponentsLookupByTeam';

/**
 * All games parsed and restructured as 'by Team' opponents lookup tables.
 */
export const opponentsSlice = createSlice({
	name: 'opponents',
	initialState: {} as OpponentsLookupByTeam,
	reducers: {
		setTeamOpponents: (state, action: PayloadAction<OpponentsLookupByTeam>) => {
			return action.payload;
		},
	},
});

export const { setTeamOpponents } = opponentsSlice.actions;
