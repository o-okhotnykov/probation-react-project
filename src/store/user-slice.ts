import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import type { RootState } from './root-store';
import { HttpService } from '../api/HttpService';

interface IUserState {
    accessToken: string;
}

const initialState: IUserState = {
    accessToken: '',
};

export const registerAsync = createAsyncThunk('app/registerUser', async (user) => {
    const data = await HttpService.post('register', user);
    return data;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state: IUserState) => {
            state.accessToken = '';
        },
    },
    extraReducers: (builder) =>
        builder.addCase(registerAsync.fulfilled, (state, action) => {
            const payload = action?.payload;
            const { accessToken } = payload?.data;
            state.accessToken = accessToken;
        }),
});

export const { logout } = userSlice.actions;

export const userSelector = (state: RootState): IUserState => state.user;

export const accessTokenSelector = createSelector(userSelector, (user) => user.accessToken);

export const userReducer = userSlice.reducer;
