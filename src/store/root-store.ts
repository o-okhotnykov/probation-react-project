import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import createFilter from 'redux-persist-transform-filter';
import { persistReducer } from 'redux-persist';
import { projectsReducer } from './project-store';
import { userReducer } from './user-slice';
import { loadingReducer } from './loading-slice';
import { loadingHandler } from './middleware';

const reducers = combineReducers({
    user: userReducer,
    projects: projectsReducer,
    loading: loadingReducer,
});

<<<<<<< HEAD
const saveSubsetFilter = createFilter('user', ['accessToken', 'isAuthorized', 'userData[id]']);
=======
const saveSubsetFilter = createFilter('user', ['accessToken', 'isAuthorized']);
>>>>>>> c610b3344678368e8b409b425b847d34ce1ba84c

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
