import { store } from 'store/root-store';
import { loadingHandler } from '../middleware';

interface ActionType {
    type: string;
    meta?: { requestStatus: string };
}

const create = () => {
    const state = store;
    const next = jest.fn();

    const invoke = (action: ActionType) => loadingHandler(state)(next)(action);

    return { state, next, invoke };
};

describe('loading middleware', () => {
    it('passes through non-function action', () => {
        const { next, invoke } = create();
        const action = { type: 'TEST' };
        invoke(action);
        expect(next).toHaveBeenCalledWith(action);
    });

    it('pending requests length should increase', () => {
        const { state, invoke } = create();
        const action = {
            type: 'test/test/pending',
            meta: { requestStatus: 'pending' },
        };

        invoke(action);
        invoke(action);
        const { loading } = state.getState();

        expect(loading.requests.size).toBe(1);
    });

    it('fulfilled requests length should decrease', () => {
        const { state, invoke } = create();

        const action = {
            type: 'test/test/fulfilled',
            meta: { requestStatus: 'fulfilled' },
        };

        invoke(action);
        const { loading } = state.getState();
        expect(loading.requests.size).toBe(0);
    });
    it('rejected requests length should decrease', () => {
        const { state, invoke } = create();

        const action = {
            type: 'test/test/rejected',
            meta: { requestStatus: 'rejected' },
        };

        invoke(action);
        const { loading } = state.getState();
        expect(loading.requests.size).toBe(0);
    });
});
