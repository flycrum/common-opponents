import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ApiTeamsResponseTeamItem } from '../types/apiTeams';

/**
 * Original team list data that can later be joined with games to further analyze.
 * Stored as entity which allows for easy CRUD operations in addition to ordered-map like capabilities.
 * This makes lookups much easier while still easily allowing an ordered ui list with little additional work.
 * Keep as separate persisted store since it can be crazy large.
 * As easier to work with original persisted data and reconstruct if this stays pure.
 */
const teamsEntityAdapter = createEntityAdapter<ApiTeamsResponseTeamItem>({
	// Allow for lookups on `nickname` rather than `id`
	selectId: (book) => book.team.nickname,
	// Keep the "all IDs" array sorted based on team nickname
	sortComparer: (a, b) => a.team.nickname.localeCompare(b.team.nickname),
})

/**
 * League / team data.
 */
export const apiTeamsSlice = createSlice({
	name: 'apiTeams',
	initialState: {
		results: teamsEntityAdapter.getInitialState(),
	},
	reducers: {
		setApiTeamResults: (state, action: PayloadAction<ApiTeamsResponseTeamItem[] | null>) => {
			teamsEntityAdapter.setAll(state.results, action.payload ?? []);
		}
	},
});

export const { setApiTeamResults } = apiTeamsSlice.actions;
