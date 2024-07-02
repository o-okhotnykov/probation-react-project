import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import createFilter from 'redux-persist-transform-filter';
import { persistReducer } from 'redux-persist';
import { enableMapSet } from 'immer';
import { projectsReducer } from './project-slice';
import { userApi } from './userApi';
import { userReducer } from './user-slice';
import { loadingReducer } from './loading-slice';
import { loadingHandler, rtkQueryErrorLogger } from './middleware';

enableMapSet();

export const reducers = combineReducers({
    user: userReducer,
    projects: projectsReducer,
    loading: loadingReducer,
    api: userApi.reducer,
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
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(userApi.middleware, loadingHandler, rtkQueryErrorLogger),
});

export const getStore = store.getState();
export type RootState = ReturnType<typeof store.getState>;
