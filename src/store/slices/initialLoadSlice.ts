import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LoadedSource = {
	length: number | null;
	source: 'unknown' | 'cache' | 'mock' | 'api';
}

export type LoadingStage = 'apiGames' | 'apiTeams';

/**
 * Initial load progress state.
 */
export const initialLoadSlice = createSlice({
	name: 'initialLoad',
	initialState: {
		hasError: false as boolean,
		isDone: false as boolean,
		isLoading: false as boolean,
		loadedSources: {
			apiGames: {
				length: null,
				source: 'unknown',
			},
			apiTeams: {
				length: null,
				source: 'unknown',
			},
		} as {[key in LoadingStage]: LoadedSource},
		loadingStage: null as LoadingStage | null,

	},
	reducers: {
		setLoadedSource: (state, action: PayloadAction<LoadedSource>) => {
			if (!!state.loadingStage)  {
				state.loadedSources[state.loadingStage] = action.payload;
			}
		},
		setLoadingStage: (state, action: PayloadAction<LoadingStage | null>) => {
			state.loadingStage = action.payload;

			if (!action.payload) {
				state.isDone = true;
				state.isLoading = false;
				return state;
			}

			state.isLoading = true;
		},
	},
});

export const { setLoadedSource } = initialLoadSlice.actions;
export const { setLoadingStage } = initialLoadSlice.actions;
