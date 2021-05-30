import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ApiGamesResponseEventResultItem } from '../../types/apiGames';

/**
 * Team's schedule stored by opponent id for easy lookup.
 * @example
 * {
 *		Air Force: {…},
 *		Akron: {…},
 *		Alabama: {
 *	    	Arkansas: [{…}],
 *			Auburn: [{
 *				atLoser: null
 *				boxscoreUrl: "https://www.sports-reference.com/cfb/boxscores/2020-11-28-alabama.html"
 *				date: "Nov 28, 2020"
 *				notes: null
 *				teamLoserName: "(22) Auburn"
 *				teamLoserPoints: 13
 *				teamWinnerName: "(1) Alabama"
 *				teamWinnerPoints: 42
 *			}],
 *			Florida:  [{…}],
 *			...,
 *		},
 *		Appalachian St: {…},
 *		...,
 * }
 */
export type SchedulesState = {
	[teamId: string]: {[oppTeamId: string]: ApiGamesResponseEventResultItem[]};
};

/**
 * All games parsed and restructured as 'by Team' schedule lookup tables.
 */
export const schedulesSlice = createSlice({
	name: 'schedules',
	initialState: {} as SchedulesState,
	reducers: {
		// setApiGameResults: (state, action: PayloadAction<ScheduleApiResponse['data']['schedule']>) => {
		setTeamSchedules: (state, action: PayloadAction<SchedulesState>) => {
			return action.payload;
		}
	},
});

export const { setTeamSchedules } = schedulesSlice.actions;
