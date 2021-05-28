import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiGamesResponseEventResultItem } from '../../types/apiGames';


export type ScheduleState = {
	/** team's schedule stored by opponent id for easy lookup **/
	schoolGamesByOppId: {
		[teamId: string]: {[oppTeamId: string]: ApiGamesResponseEventResultItem[]}
	}, // todo - type
};

/**
 *
 */
export const gamesSlice = createSlice({
	name: 'games',
	initialState: {
		schoolGamesByOppId: {} as ScheduleState['schoolGamesByOppId'],
	},
	reducers: {
		// setApiGameResults: (state, action: PayloadAction<ScheduleApiResponse['data']['schedule']>) => {
		setApiGameResults: (state, action: PayloadAction<ScheduleState>) => {
			state.schoolGamesByOppId = action.payload.schoolGamesByOppId;
		}
	},
});

export const { setApiGameResults } = gamesSlice.actions;
