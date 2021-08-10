import { Middleware } from 'redux';
import { addRequest, removeRequest } from './loading-slice';

export const loadingHandler: Middleware = (store) => (next) => (action) => {
    if (action && action.meta && action.meta.requestStatus === 'pending') {
        const { type } = action;
        store.dispatch(addRequest(type.substr(0, type.length - 8)));
    }

    if (action && action.meta && action.meta.requestStatus === 'fulfilled') {
        const { type } = action;
        store.dispatch(removeRequest(type.substr(0, type.length - 10)));
    }

    const nextMiddleware = next(action);

    return nextMiddleware;
};
