import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import type { RootState } from './root-store';
import { HttpService } from '../api/HttpService';
import { IRegisterFormValues, ILoginFormValues } from '../interface/index';
import { LoginResponse } from '../interface/api/auth';

interface IUserState {
    accessToken: string;
}

const initialState: IUserState = {
    accessToken: '',
};

export const registerAsync = createAsyncThunk(
    'app/registerUser',
    async (user: IRegisterFormValues) => {
        const data = await HttpService.post<LoginResponse>('login', user);

        if ('isAxiosError' in data) {
            console.log('err', data.response);
            return;
        }

        return data;
    },
);

export const loginAsync = createAsyncThunk('app/loginUser', async (user: ILoginFormValues) => {
    const data = await HttpService.post<LoginResponse>('login', user);

    if ('isAxiosError' in data) {
        console.log('err', data.response);
        return;
    }

    return data;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state: IUserState) {
            state.accessToken = '';
        },
        getToken(state: IUserState) {
            return state;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(registerAsync.fulfilled, (state, action) => {
                const token: string | undefined = action.payload?.data.accessToken;
                if (token === undefined) {
                    return;
                }
                state.accessToken = token;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                const token: string | undefined = action.payload?.data.accessToken;
                if (token === undefined) {
                    return;
                }
                state.accessToken = token;
            }),
});

export const { logout, getToken } = userSlice.actions;

export const userSelector = (state: RootState): IUserState => state.user;

export const accessTokenSelector = createSelector(userSelector, (user) => user.accessToken);

export const isAuthorizedSelector = createSelector(userSelector, ({ accessToken }) => {
    if (accessToken.length > 0) {
        return true;
    }
    return false;
});

export const userReducer = userSlice.reducer;
