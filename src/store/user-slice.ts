import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { IUser, LoginResponse, RegisterResponse, UsersGetResponse } from 'interface/api/auth';
import { IRegisterResponse, ILoginFormValues } from 'interface';
import { httpService } from 'api/HttpService';
import { errorToastNotify, successfulToastNotify } from 'toasts';
import { GetProjectsParams } from 'interface/api/project';
import { LIMIT, PAGE } from 'constants/index';

import type { RootState } from './root-store';

interface IUserState {
    accessToken: string;
    isAuthorized: boolean;
    usersData: IUser[] | null;
}

const initialState: IUserState = {
    accessToken: '',
    isAuthorized: false,
    usersData: null,
};

export const registerAsync = createAsyncThunk('app/registerUser', (user: IRegisterResponse) => {
    return httpService.post<RegisterResponse>('register', user);
});

export const loginAsync = createAsyncThunk('app/loginUser', (user: ILoginFormValues) => {
    return httpService.post<LoginResponse>('login', user);
});

export const getUsersAsync = createAsyncThunk(
    'app/getUsers',
    ({ page = PAGE, limit = LIMIT }: GetProjectsParams = { page: PAGE, limit: LIMIT }) => {
        const params = { _page: page, _limit: limit };
        return httpService.get<UsersGetResponse>('users', { params });
    },
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state: IUserState) {
            state.accessToken = '';
            state.isAuthorized = false;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(registerAsync.fulfilled, (state, action) => {
                const { data } = action.payload;

                state.accessToken = data.accessToken;
                state.isAuthorized = true;
                successfulToastNotify('Successful register');
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                const { data } = action.payload;

                state.accessToken = data.accessToken;
                state.isAuthorized = true;
                successfulToastNotify('Successful login');
            })
            .addCase(getUsersAsync.fulfilled, (state, action) => {
                const { data } = action.payload;
                if (data) {
                    state.usersData = data;
                }
            })
            .addCase(registerAsync.rejected, (state, action) => {
                const { message } = action.error;
                if (message) {
                    errorToastNotify(message);
                }
            })
            .addCase(loginAsync.rejected, (state, action) => {
                const { message } = action.error;
                if (message) {
                    errorToastNotify(message);
                }
            }),
});

export const { logout } = userSlice.actions;

export const userSelector = (state: RootState): IUserState => state.user;

export const accessTokenSelector = createSelector(userSelector, (user) => user.accessToken);

export const usersDataSelector = createSelector(userSelector, ({ usersData }) => usersData);

export const isAuthorizedSelector = createSelector(
    userSelector,
    ({ isAuthorized }) => isAuthorized,
);

export const userReducer = userSlice.reducer;
