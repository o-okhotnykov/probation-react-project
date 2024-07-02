import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import {
    IChangePasswordResponse,
    IUserData,
    LoginResponse,
    RegisterResponse,
    UserRole,
    UsersGetResponse,
} from 'types/api/auth';
import { IRegisterResponse, ILoginFormValues } from 'types';
import { httpService } from 'services/HttpService';
import { errorToastNotify, successfulToastNotify } from 'toasts';
import { GetProjectsParams } from 'types/api/project';
import { LIMIT, PAGE } from 'constants/index';

import type { RootState } from './root-store';

interface IUserState {
    accessToken: string;
    isAuthorized: boolean;
    role: UserRole;
    userData: IUserData | null;
    currentUser: IUserData | null;
    usersData: IUserData[];
    total: number;
}

const initialState: IUserState = {
    accessToken: '',
    isAuthorized: false,
    role: UserRole.default,
    userData: null,
    currentUser: null,
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

export const addUserAsync = createAsyncThunk('app/addUser', (user: IRegisterResponse) => {
    return httpService.post<RegisterResponse>('users', user);
});

export const changePasswordAsync = createAsyncThunk(
    'app/changePassword',
    (values: IChangePasswordResponse) => {
        return httpService.post<RegisterResponse>('changePassword', values);
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
                state.role = data.user.role;
                successfulToastNotify('Successful Register');
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                const { data } = action.payload;

                state.accessToken = data.accessToken;
                state.isAuthorized = true;
                state.role = data.user.role;
                successfulToastNotify('Successful Login');
            })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                const { data } = action.payload;
                state.role = data.role;
                state.userData = data;
            })
            .addCase(addUserAsync.fulfilled, () => {
                successfulToastNotify('Successful Adding');
            })
            .addCase(changePasswordAsync.fulfilled, () => {
                successfulToastNotify('Successful Change Password');
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
            })
            .addCase(getUserAsync.rejected, (state, action) => {
                const { message } = action.error;
                if (message) {
                    errorToastNotify(message);
                }
            })
            .addCase(getUsersAsync.rejected, (state, action) => {
                const { message } = action.error;
                if (message) {
                    errorToastNotify(message);
                }
            })
            .addCase(addUserAsync.rejected, (state, action) => {
                const { message } = action.error;
                if (message) {
                    errorToastNotify(message);
                }
            })
            .addCase(changePasswordAsync.rejected, (state, action) => {
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

export const currentUserSelector = createSelector(userSelector, ({ currentUser }) => currentUser);

export const isAuthorizedSelector = createSelector(
    userSelector,
    ({ isAuthorized }) => isAuthorized,
);

export const isAdminSelector = createSelector(userSelector, ({ role }) => role === UserRole.admin);

export const isContributorSelector = createSelector(
    userSelector,
    ({ role }) => role === UserRole.contributor,
);

export const userReducer = userSlice.reducer;
