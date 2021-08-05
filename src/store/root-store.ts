import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import createFilter from 'redux-persist-transform-filter';
import { persistReducer } from 'redux-persist';
import { userReducer } from './user-slice';
import { projectsReducer } from './project-store';

const reducers = combineReducers({
    user: userReducer,
    projects: projectsReducer,
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
        }),
});

export const getStore = store.getState();
export type RootState = ReturnType<typeof store.getState>;
