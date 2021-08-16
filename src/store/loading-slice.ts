import { createSlice, createSelector, OutputSelector } from '@reduxjs/toolkit';
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
        removeRequest: (state, action) => {
            state.requests.delete(action.payload);
        },
    },
});

export const uiStateSelector = (state: RootState): ILoadingState => state.loading;

export const loadingSelector = createSelector(uiStateSelector, ({ isLoading }) => isLoading);

export const isRequestPendingSelector = (
    type: string,
): OutputSelector<number, boolean, (res: ILoadingState) => boolean> => {
    return createSelector(uiStateSelector, ({ requests }) => requests.has(type));
};

export const { startLoading, finishLoading, addRequest, removeRequest } = loadingSlice.actions;

export const loadingReducer = loadingSlice.reducer;
