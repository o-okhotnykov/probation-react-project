/* eslint-disable @typescript-eslint/no-unused-vars */
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import createFilter from 'redux-persist-transform-filter';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { userReducer } from './user-slice';
<<<<<<< HEAD
import { loadingReducer } from './loading-slice';
import { loadingHandler } from './middleware';

const reducers = combineReducers({
    user: userReducer,
    loading: loadingReducer,
=======
import { projectsReducer } from './project-store';

const reducers = combineReducers({
    user: userReducer,
    projects: projectsReducer,
>>>>>>> 3fb1c62a402e2b717dcc485bdeda6131a4d004e3
});

const saveSubsetFilter = createFilter('user', ['accessToken', 'isAuthorized', 'userData[id]']);

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
    transforms: [saveSubsetFilter],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(loadingHandler),
});

export const getStore = store.getState();
export type RootState = ReturnType<typeof store.getState>;
