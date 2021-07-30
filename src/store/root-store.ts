import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { userReducer } from './user-slice';
import { movieReducer } from './movie-store';

const reducers = combineReducers({
    user: userReducer,
    movie: movieReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
});

export const getStore = store.getState();
export type RootState = ReturnType<typeof store.getState>;
