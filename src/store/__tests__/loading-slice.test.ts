import { addRequest, finishLoading, removeRequest, startLoading } from 'store/loading-slice';
import { store } from '../root-store';

describe('Loading Slice tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('test initial data', async () => {
        const { loading } = store.getState();
        expect(loading.isLoading).toBe(false);
        expect(loading.requests.size).toBe(0);
    });

    it('startLoading should change state', async () => {
        await store.dispatch(startLoading());
        const { loading } = store.getState();
        expect(loading.isLoading).toBe(true);
    });

    it('finishLoading should change state', async () => {
        await store.dispatch(finishLoading());
        const { loading } = store.getState();
        expect(loading.isLoading).toBe(false);
    });

    it('addRequest should increase length', async () => {
        const testAction = 'app/getUser';
        await store.dispatch(addRequest(testAction));
        const { loading } = store.getState();
        expect(loading.requests.size).toBe(1);
    });

    it('removeRequest should decrease length', async () => {
        const testAction = 'app/getUser';
        await store.dispatch(removeRequest(testAction));
        const { loading } = store.getState();
        expect(loading.requests.size).toBe(0);
    });
});
