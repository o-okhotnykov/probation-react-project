import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { RootState } from './root-store';

interface ILoadingState {
    isLoading: boolean;
    requests: Set<string>;
}

const initialState: ILoadingState = {
    isLoading: false,
    requests: new Set(),
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
        addRequest: (state, action) => {
            state.requests.add(action.payload);
        },
    },
});

export const uiStateSelector = (state: RootState): ILoadingState => state.loading;

export const loadingSelector = createSelector(uiStateSelector, ({ isLoading }) => isLoading);

export const requestsSelector = createSelector(uiStateSelector, ({ requests }) => requests);

export const { startLoading, finishLoading, addRequest } = loadingSlice.actions;

export const loadingReducer = loadingSlice.reducer;
