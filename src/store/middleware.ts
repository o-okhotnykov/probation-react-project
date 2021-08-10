import { Middleware } from 'redux';
import { startLoading, finishLoading, addRequest } from './loading-slice';

export const loadingHandler: Middleware = (store) => (next) => (action) => {
    if (action && action.meta && action.meta.requestStatus === 'pending') {
        store.dispatch(addRequest(action.meta.requestId));
        store.dispatch(startLoading());
    }

    if (action && action.meta && action.meta.requestStatus === 'fulfilled') {
        console.log(action);
        store.dispatch(finishLoading());
    }

    const nextMiddleware = next(action);

    return nextMiddleware;
};
