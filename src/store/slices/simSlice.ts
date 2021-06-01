import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ApiTeamsResponseTeamItem } from '../../types/apiTeams';
import type { ApiGamesResponseEventResultItem } from '../../types/apiGames';

export type SimResults = {
	/**
	 * Array of opponents array of games (yes, I said that right 😬) for pathway opponents.
	 * This should match the order of pathwayList.
	 * Why an array of array? The 1st represents the pathway of opponents and the 2nd allows for multiple games between opponents.
	 **/
	opponentsGames: ApiGamesResponseEventResultItem[][];
	/** Traversal path of opponent ids used to track paths, lookup individual points along the way. **/
	pathway: string;
	/** Traversal path but as an array **/
	pathwayList: string[];
}[];

/**
 * Simulation details like teams selected, results, and other related details.
 */
export const simSlice = createSlice({
	name: 'sim',
	initialState: {
		isLoading: false as boolean,
		/** The max depth common opponents will recursively search **/
		levelMax: 5,
		results: null as SimResults | null,
		team1: null as ApiTeamsResponseTeamItem | null,
		team2: null as ApiTeamsResponseTeamItem | null,
	},
	reducers: {
		setSimFailedResults: (state) => {
			state.isLoading = false;
		},
		setSimPendingResults: (state) => {
			state.results = null;
			state.isLoading = true;
		},
		setSimResults: (state, action: PayloadAction<SimResults | null>) => {
			state.results = action.payload;
			state.isLoading = false;
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

export const {
	setSimFailedResults,
	setSimPendingResults,
	setSimResults,
	setSimTeam1,
	setSimTeam2,
} = simSlice.actions;

