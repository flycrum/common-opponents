import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ApiTeamsResponseTeamItem } from '../../types/apiTeams';

export type SimHistoryRunDetails = {
	/** how long it took to generate the common opponent results **/
	duration: number;
	/** the unique id of the run **/
	id: number;
	/** the number of results **/
	length: number;
	/** first opponent searched **/
	team1: ApiTeamsResponseTeamItem,
	/** second opponent searched **/
	team2: ApiTeamsResponseTeamItem,
};

/**
 * History of common opponent simulation runs (not for any real reason other than it's interesting to chart).
 */
export const simHistorySlice = createSlice({
	name: 'simHistory',
	initialState: {
		/** incremental count of run that's also used as id for individual item **/
		count: 0,
		/** ordered list of simulation runs **/
		runs: [] as SimHistoryRunDetails[],
	},
	reducers: {
		addSimHistoryItem: (state, action: PayloadAction<SimHistoryRunDetails>) => {
			state.count += 1;
			action.payload.id = state.count;
			state.runs.push(action.payload);
		},
		clearSimHistory: (state) => {
			state.runs = [];
		},
	},
});

export const {
	addSimHistoryItem,
	clearSimHistory,
} = simHistorySlice.actions;
