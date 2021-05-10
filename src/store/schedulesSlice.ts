import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScheduleApiResponseScheduleResultItem } from '../types/scheduleApi';


export type ScheduleState = {
	/** team's schedule stored by opponent id for easy lookup **/
	schoolGamesByOppId: {
		[teamId: string]: {[oppTeamId: string]: ScheduleApiResponseScheduleResultItem[]}
	}, // todo - type
};

/**
 * Schedule and game events data that can later be joined with teams to further analyze.
 */
export const schedulesSlice = createSlice({
	name: 'schedules',
	initialState: {
		schoolGamesByOppId: {} as ScheduleState['schoolGamesByOppId'],
	},
	reducers: {
		// setSchedules: (state, action: PayloadAction<ScheduleApiResponse['data']['schedule']>) => {
		setSchedules: (state, action: PayloadAction<ScheduleState>) => {
			state.schoolGamesByOppId = action.payload.schoolGamesByOppId;
		}
	},
});

export const { setSchedules } = schedulesSlice.actions;
