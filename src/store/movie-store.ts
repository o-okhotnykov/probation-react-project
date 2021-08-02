import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { MovieResponse } from 'interface/api/movie';
import { httpService } from 'api/HttpService';
import { LIMIT, PAGE } from 'constants/index';
import type { RootState } from './root-store';

interface IMovieState {
    movies: MovieResponse;
}

const initialState: IMovieState = {
    movies: [],
};

export const getMoviesAsync = createAsyncThunk('app/getMovies', async () => {
    const data = await httpService.get<MovieResponse>('movies', { _page: PAGE, _limit: LIMIT });

    if ('isAxiosError' in data) {
        console.log('err', data.response);
        return;
    }

    return data;
});

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder.addCase(getMoviesAsync.fulfilled, (state, action) => {
            const movies = action.payload?.data;

            if (movies === undefined) {
                return;
            }
            state.movies = movies;
        }),
});

export const movieSelector = (state: RootState): IMovieState => state.movie;

export const moviesDataSelector = createSelector(movieSelector, ({ movies }) => movies);

export const movieReducer = movieSlice.reducer;
