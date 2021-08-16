import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { IUserData, LoginResponse, RegisterResponse, UsersGetResponse } from 'interface/api/auth';
import { IRegisterResponse, ILoginFormValues } from 'interface';
import { httpService } from 'api/HttpService';
import { errorToastNotify, successfulToastNotify } from 'toasts';
import { GetProjectsParams } from 'interface/api/project';
import { LIMIT, PAGE } from 'constants/index';

import type { RootState } from './root-store';

interface IUserState {
    accessToken: string;
    isAuthorized: boolean;
    userData: IUserData | null;
    usersData: IUserData[];
    total: number;
}

const initialState: IUserState = {
    accessToken: '',
    isAuthorized: false,
    userData: null,
    usersData: [],
    total: 0,
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

export const getUserAsync = createAsyncThunk('app/getUser', () => {
    return httpService.get<IUserData>(`my`, {});
});

export const deleteUserAsync = createAsyncThunk('app/deleteUserAsync', (id: number) => {
    return httpService.delete<IUserData>(`/users/${id}`, {});
});

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
                successfulToastNotify('Successful Register');
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                const { data } = action.payload;

                state.accessToken = data.accessToken;
                state.isAuthorized = true;
                successfulToastNotify('Successful Login');
            })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.userData = data;
            })
            .addCase(getUsersAsync.fulfilled, (state, action) => {
                const { data, headers } = action.payload;
                const totalCount = parseInt(headers['x-total-count'], 10);
                if (data && !Number.isNaN(totalCount)) {
                    state.total = totalCount;
                    state.usersData = data;
                }
            })
            .addCase(deleteUserAsync.fulfilled, () => {
                successfulToastNotify('Successful Delete');
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

export const totalUsersSelector = createSelector(userSelector, ({ total }) => total);

export const usersDataSelector = createSelector(userSelector, ({ usersData }) => usersData);

export const userDataSelector = createSelector(userSelector, ({ userData }) => userData);

export const isAuthorizedSelector = createSelector(
    userSelector,
    ({ isAuthorized }) => isAuthorized,
);

export const userReducer = userSlice.reducer;
