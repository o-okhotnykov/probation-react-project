import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { LoginResponse, RegisterResponse, IUserData } from 'interface/api/auth';
import { httpService } from 'api/HttpService';
import { IRegisterResponse, ILoginFormValues } from 'interface';
import type { RootState } from './root-store';

interface IUserState {
    accessToken: string;
    userData: IUserData;
}

const initialState: IUserState = {
    accessToken: '',
    userData: { email: '', name: '', surname: '', birthDate: '', id: null },
};

export const registerAsync = createAsyncThunk(
    'app/registerUser',
    async (user: IRegisterResponse) => {
        const data = await httpService.post<RegisterResponse>('register', user);

        if ('isAxiosError' in data) {
            console.log('err', data.response);
            return;
        }

        return data;
    },
);

export const loginAsync = createAsyncThunk('app/loginUser', async (user: ILoginFormValues) => {
    const data = await httpService.post<LoginResponse>('login', user);

    if ('isAxiosError' in data) {
        console.log('err', data.response);
        return;
    }

    return data;
});

export const getUserAsync = createAsyncThunk('app/getUser', async (userId: number) => {
    const data = await httpService.get<IUserData>(`users/${userId}`);

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
    },
    extraReducers: (builder) =>
        builder
            .addCase(registerAsync.fulfilled, (state, action) => {
                const data = action.payload?.data;
                if (data === undefined) {
                    return;
                }
                state.userData = {
                    email: '',
                    name: '',
                    surname: '',
                    birthDate: '',
                    id: data.user.id,
                };
                state.accessToken = data.accessToken;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                const data = action.payload?.data;
                if (data === undefined) {
                    return;
                }
                state.userData = {
                    email: '',
                    name: '',
                    surname: '',
                    birthDate: '',
                    id: data.user.id,
                };
                state.accessToken = data.accessToken;
            })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                const data = action.payload?.data;

                if (data) {
                    state.userData = data;
                }
            }),
});

export const { logout } = userSlice.actions;

export const userSelector = (state: RootState): IUserState => state.user;

export const accessTokenSelector = createSelector(userSelector, (user) => user.accessToken);

export const userIdSelector = createSelector(userSelector, ({ userData }) => userData.id);

export const userDataSelector = createSelector(userSelector, ({ userData }) => userData);

export const isAuthorizedSelector = createSelector(userSelector, ({ accessToken }) => {
    if (accessToken.length > 0) {
        return true;
    }
    return false;
});

export const userReducer = userSlice.reducer;
