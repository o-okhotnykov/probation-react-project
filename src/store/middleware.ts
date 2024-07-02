import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import { addRequest, removeRequest } from './loading-slice';
import { errorToastNotify } from 'toasts';

export const loadingHandler: Middleware = (store) => (next) => (action) => {
    if (action && action.meta && action.meta.requestStatus === 'pending') {
        const { type } = action;
        store.dispatch(addRequest(type.substr(0, type.length - 8)));
    }

    if (action && action.meta && action.meta.requestStatus === 'fulfilled') {
        const { type } = action;
        store.dispatch(removeRequest(type.substr(0, type.length - 10)));
    }

    if (action && action.meta && action.meta.requestStatus === 'rejected') {
        const { type } = action;

        store.dispatch(removeRequest(type.substr(0, type.length - 9)));
    }

    return next(action);
};

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
        console.warn('We got a rejected action!');
        errorToastNotify(action.error.data.message);
    }

    return next(action);
};
