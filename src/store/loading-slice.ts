import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { RootState } from './root-store';

interface ILoadingState {
    isLoading: boolean;
}

const initialState: ILoadingState = {
    isLoading: false,
};

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        finishLoading: (state) => {
            state.isLoading = false;
        },
    },
});

export const uiStateSelector = (state: RootState): ILoadingState => state.loading;

export const loadingSelector = createSelector(uiStateSelector, ({ isLoading }) => isLoading);

export const { startLoading, finishLoading } = loadingSlice.actions;

export const loadingReducer = loadingSlice.reducer;
