import { Middleware } from 'redux';
import { startLoading, finishLoading } from './loading-slice';

export const loadingHandler: Middleware = (store) => (next) => (action) => {
    if (action && action.meta && action.meta.requestStatus === 'pending') {
        store.dispatch(startLoading());
    }

    if (action && action.meta && action.meta.requestStatus === 'fulfilled') {
        store.dispatch(finishLoading());
    }

    const nextMiddleware = next(action);

    return nextMiddleware;
};
