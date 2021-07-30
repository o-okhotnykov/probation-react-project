import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import type { RootState } from './root-store';
import { HttpService } from '../api/HttpService';
import { IRegisterResponse, ILoginFormValues } from '../interface';
import { LoginResponse, RegisterResponse } from '../interface/api/auth';
import { errorToastNotify, successfulToastNotify } from '../Toasts';

interface IUserState {
    accessToken: string;
}

const initialState: IUserState = {
    accessToken: '',
};

export const registerAsync = createAsyncThunk(
    'app/registerUser',
    async (user: IRegisterResponse) => {
        const data = await HttpService.post<RegisterResponse>('register', user);

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
        logout: (state: IUserState) => {
            state.accessToken = '';
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(registerAsync.fulfilled, (state, action) => {
                const response = action.payload?.data;
                if (response === undefined) {
                    return;
                }
                state.accessToken = response?.accessToken;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                const response = action.payload?.data;

                if (response === undefined) {
                    return;
                }
                successfulToastNotify('Successful login');
                state.accessToken = response?.accessToken;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                const { message } = action.error;

                if (message === undefined) {
                    return;
                }
                errorToastNotify(message);
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
