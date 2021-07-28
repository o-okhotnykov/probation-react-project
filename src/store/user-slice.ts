import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { RootState } from './root-store';

interface IUserState {
    accessToken: string;
}

const initialState: IUserState = {
    accessToken: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state: IUserState) => {
            state.accessToken = '';
        },
    },
});

export const { logout } = userSlice.actions;

export const userSelector = (state: RootState): IUserState => state.user;

export const isAuthorizedSelector = createSelector(userSelector, ({ accessToken }) => {
    if (accessToken.length > 0) {
        return true;
    }
    return false;
});

export const userReducer = userSlice.reducer;
