import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import createFilter from 'redux-persist-transform-filter';
import { persistReducer } from 'redux-persist';
import { userReducer } from './user-slice';

const reducers = combineReducers({
    user: userReducer,
});

const saveSubsetFilter = createFilter('user', ['accessToken', 'isAuthorized']);

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
    transforms: [saveSubsetFilter],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
});

export const getStore = store.getState();
export type RootState = ReturnType<typeof store.getState>;
