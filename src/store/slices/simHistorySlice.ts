import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SimHistoryRunDetails } from '../../types/SimHistoryRunDetails';
import { AppState } from '../store';

export const simHistoryRunsEntityAdapter = createEntityAdapter<SimHistoryRunDetails>({
	selectId: (runDetails) => runDetails.id,
	/** sort by id in ascending order (a-b) **/
	sortComparer: (a, b) => a.id - b.id,
});

/**
 * History of common opponent simulation runs (not for any real reason other than it's interesting to chart).
 * @persisted
 */
export const simHistorySlice = createSlice({
	name: 'simHistory',
	initialState: {
		/** incremental count of run that's also used as id for individual item **/
		count: 0,
		/** ordered list of simulation runs **/
		runs: simHistoryRunsEntityAdapter.getInitialState(),
	},
	reducers: {
		addSimHistoryItem: (state, action: PayloadAction<SimHistoryRunDetails>) => {
			state.count += 1;
			action.payload.id = state.count;
			simHistoryRunsEntityAdapter.addOne(state.runs, action.payload);
		},
		clearSimHistory: (state) => {
			simHistoryRunsEntityAdapter.removeAll(state.runs);
		},
		removeSimHistoryItem: (state, action: PayloadAction<number>) => {
			simHistoryRunsEntityAdapter.removeOne(state.runs, action.payload);
		},
	},
});

/**
 * Entity convenience selectors like 'selectAll'.
 */
export const simHistorySelectors = simHistoryRunsEntityAdapter.getSelectors<AppState>(
	(state) => state.simHistory.runs,
);


export const {
	addSimHistoryItem,
	clearSimHistory,
	removeSimHistoryItem,
} = simHistorySlice.actions;
