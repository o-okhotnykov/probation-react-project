import { createAsyncThunk, createSlice, createSelector } from '@reduxjs/toolkit';
import { MovieResponse } from 'interface/api/movie';
import type { RootState } from './root-store';
import { HttpService } from '../api/HttpService';

interface IMovieState {
    movies: Array<MovieResponse>;
}

const initialState: IMovieState = {
    movies: [],
};

export const getMoviesAsync = createAsyncThunk('app/getMovies', async () => {
    const data = await HttpService.get<MovieResponse[]>('movies?_page=1&_limit=15');

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
