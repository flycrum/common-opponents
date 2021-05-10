import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { LeagueApiResponseTeamsItem } from '../types/leagueApi';

/**
 * A team list entity which allows for easy CRUD operations in addition to ordered-map like capabilities.
 * This makes lookups much easier while still easily allowing an ordered ui list with little additional work.
 */
const teamsEntityAdapter = createEntityAdapter<LeagueApiResponseTeamsItem>({
	// Allow for lookups on `nickname` rather than `id`
	selectId: (book) => book.team.nickname,
	// Keep the "all IDs" array sorted based on team nickname
	sortComparer: (a, b) => a.team.nickname.localeCompare(b.team.nickname),
})

/**
 * League / team data.
 */
export const leagueSlice = createSlice({
	name: 'league',
	initialState: {
		teams: teamsEntityAdapter.getInitialState(),
	},
	reducers: {
		setTeams: (state, action: PayloadAction<LeagueApiResponseTeamsItem[] | null>) => {
			teamsEntityAdapter.setAll(state.teams, action.payload ?? []);
		}
	},
});

export const { setTeams } = leagueSlice.actions;
