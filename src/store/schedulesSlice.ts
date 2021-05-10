import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScheduleApiResponse } from '../types/scheduleApi';

/**
 * Schedule and game events data that can later be joined with teams to further analyze.
 */
export const schedulesSlice = createSlice({
	name: 'schedules',
	initialState: {
		events: [] as ScheduleApiResponse['data']['schedule'],
	},
	reducers: {
		setSchedules: (state, action: PayloadAction<ScheduleApiResponse['data']['schedule']>) => {
			state.events = action.payload;
		}
	},
});

export const { setSchedules } = schedulesSlice.actions;
