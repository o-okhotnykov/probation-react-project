/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { startLoading, finishLoading } from './loading-slice';

export const loadingHandler = (store: any) => (next: any) => (action: any) => {
    if (action && action.meta && action.meta.requestStatus === 'pending') {
        store.dispatch(startLoading());
    }

    if (action && action.meta && action.meta.requestStatus === 'fulfilled') {
        store.dispatch(finishLoading());
    }

    const nextMiddleware = next(action);

    return nextMiddleware;
};
