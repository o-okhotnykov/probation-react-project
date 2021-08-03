import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { GetMoviesParams, MovieResponse } from 'interface/api/movie';
import { httpService } from 'api/HttpService';
import { LIMIT, PAGE } from 'constants/index';
import { errorToastNotify } from 'toasts/component/errorToast';
import type { RootState } from './root-store';

interface IMovieState {
    movies: MovieResponse;
}

const initialState: IMovieState = {
    movies: [],
};

export const getMoviesAsync = createAsyncThunk(
    'app/getMovies',
    ({ page = PAGE, limit = LIMIT }: GetMoviesParams = { page: PAGE, limit: LIMIT }) => {
        const params = { _page: page, _limit: limit };
        return httpService.get<MovieResponse>('movies', { params });
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

export const movieSelector = (state: RootState): IMovieState => state.movie;

export const moviesDataSelector = createSelector(movieSelector, ({ movies }) => movies);

export const movieReducer = movieSlice.reducer;
