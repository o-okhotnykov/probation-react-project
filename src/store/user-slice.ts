import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from './root-store';

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
        logout: (state) => {
            state.accessToken = '';
        },
    },
});

export const { logout } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export const accessTokenSelector = createSelector(userSelector, (user) => user.accessToken);

export const userReducer = userSlice.reducer;
