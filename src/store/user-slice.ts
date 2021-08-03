import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { LoginResponse, RegisterResponse, IUserData } from 'interface/api/auth';
import { IRegisterResponse, ILoginFormValues } from 'interface';
import { httpService } from 'api/HttpService';
import { errorToastNotify, successfulToastNotify } from 'toasts';
import type { RootState } from './root-store';

interface IUserState {
    accessToken: string;
    isAuthorized: boolean;
    userData: IUserData;
}

const initialState: IUserState = {
    accessToken: '',
    isAuthorized: false,
    userData: { email: '', name: '', surname: '', birthDate: '', id: null },
};

export const registerAsync = createAsyncThunk('app/registerUser', (user: IRegisterResponse) => {
    return httpService.post<RegisterResponse>('register', user);
});

export const loginAsync = createAsyncThunk('app/loginUser', (user: ILoginFormValues) => {
    return httpService.post<LoginResponse>('login', user);
});

export const getUserAsync = createAsyncThunk('app/getUser', (userId: number) => {
    return httpService.get<IUserData>(`users/${userId}`, {});
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
                successfulToastNotify('Successful register');
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                const { data } = action.payload;

                state.accessToken = data.accessToken;
                state.isAuthorized = true;
                successfulToastNotify('Successful login');
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

export const userIdSelector = createSelector(userSelector, ({ userData }) => userData.id);

export const userDataSelector = createSelector(userSelector, ({ userData }) => userData);

export const isAuthorizedSelector = createSelector(
    userSelector,
    ({ isAuthorized }) => isAuthorized,
);

export const userReducer = userSlice.reducer;
