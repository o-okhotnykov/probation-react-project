import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import type { RootState } from './root-store';
import { HttpService } from '../api/HttpService';
import { IRegisterFormValues, ILoginFormValues } from '../interface/index';

interface IUserState {
    accessToken: string;
}

const initialState: IUserState = {
    accessToken: '',
};

export const registerAsync = createAsyncThunk(
    'app/registerUser',
    async (user: IRegisterFormValues) => {
        const data = await HttpService.post('register', user);
        return data;
    },
);

export const loginAsync = createAsyncThunk('app/loginUser', async (user: ILoginFormValues) => {
    const data = await HttpService.post('login', user);
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
        builder
            .addCase(registerAsync.fulfilled, (state, action) => {
                const payload = action?.payload;
                const { accessToken } = payload?.data;
                state.accessToken = accessToken;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                const payload = action?.payload;
                const { accessToken } = payload?.data;
                state.accessToken = accessToken;
            }),
});

export const { logout } = userSlice.actions;

export const userSelector = (state: RootState): IUserState => state.user;

export const accessTokenSelector = createSelector(userSelector, (user) => user.accessToken);

export const isAuthorizedSelector = createSelector(userSelector, ({ accessToken }) => {
    if (accessToken.length > 0) {
        return true;
    }
    return false;
});

export const userReducer = userSlice.reducer;
