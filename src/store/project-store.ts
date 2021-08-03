import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { GetProjectsParams, ProjectResponse } from 'interface/api/project';
import { httpService } from 'api/HttpService';
import { LIMIT, PAGE } from 'constants/index';
import { errorToastNotify } from 'toasts/component/errorToast';
import type { RootState } from './root-store';

interface IProjectState {
    projects: ProjectResponse;
}

const initialState: IProjectState = {
    projects: [],
};

export const getMoviesAsync = createAsyncThunk(
    'app/getMovies',
    ({ page = PAGE, limit = LIMIT }: GetProjectsParams = { page: PAGE, limit: LIMIT }) => {
        const params = { _page: page, _limit: limit };
        return httpService.get<ProjectResponse>('movies', { params });
    },
);

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getMoviesAsync.fulfilled, (state, action) => {
                const { data } = action.payload;
                if (data) {
                    state.movies = data;
                }
            })
            .addCase(getMoviesAsync.rejected, (state, action) => {
                const { message } = action.error;
                if (message) {
                    errorToastNotify(message);
                }
            }),
});

export const movieSelector = (state: RootState): IProjectState => state.movie;

export const moviesDataSelector = createSelector(movieSelector, ({ movies }) => movies);

export const movieReducer = movieSlice.reducer;
