import { AxiosResponse } from 'axios';
import * as toast from 'toasts';
import { httpService } from 'services/HttpService';
import {
    addProjectAsync,
    clearAssets,
    deleteProjectAsync,
    getProjectAssetsAsync,
    getProjectByIdAsync,
    getProjectsAsync,
} from 'store/project-slice';
import { Project, ProjectAssets, ProjectResponse, ProjectState } from 'types/api/project';
import { store } from '../root-store';

jest.mock('services/HttpService');
jest.mock('toasts');

const mockSuccessToast = jest.spyOn(toast, 'successfulToastNotify');
const mockErrorToast = jest.spyOn(toast, 'errorToastNotify');

describe('Project Slice tests', () => {
    describe('get projects data', () => {
        const params = { page: 1, limit: 10 };

        const getResponse = {
            headers: { 'x-total-count': 1 },
            data: [
                {
                    id: 16,
                    img: 'https://cdn.zeplin.io/5ecffa8aeffff9282307b8d6/assets/2086FA6E-1C7F-4413-95C6-4AEDD95DD5DD.png',
                    title: 'Gramma Limited',
                    dateCreate: '2021-07-13',
                    reporter: 'Donald Curtis',
                    dateDue: '2021-07-12',
                    stats: 'done',
                    value: '500',
                    reporterId: 1,
                    views: 0,
                },
            ],
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('get projects should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'get');
            mockPost.mockImplementation(() => Promise.reject(new Error('error')));

            await store.dispatch(getProjectsAsync(params));
            const { projects } = store.getState();
            expect(mockErrorToast).toBeCalled();
            expect(projects.projects).toHaveLength(0);
        });

        it('get projects should success', async () => {
            const mockPost = jest.spyOn(httpService, 'get');
            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res(getResponse as AxiosResponse<ProjectResponse>);
                    }),
            );
            await store.dispatch(getProjectsAsync(params));
            const { projects } = store.getState();

            expect(projects.projects).toHaveLength(1);
            expect(projects.total).toBe(1);
        });
    });

    describe('get project data by id', () => {
        const id = 1;
        const currentProject: Project = {
            id: 16,
            img: 'https://cdn.zeplin.io/5ecffa8aeffff9282307b8d6/assets/2086FA6E-1C7F-4413-95C6-4AEDD95DD5DD.png',
            title: 'Gramma Limited',
            dateCreate: '2021-07-13',
            reporter: 'Donald Curtis',
            dateDue: '2021-07-12',
            stats: ProjectState.done,
            value: '500',
            reporterId: 1,
            views: 0,
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('get project by id should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'get');

            mockPost.mockImplementation(() => Promise.reject(new Error('error')));

            await store.dispatch(getProjectByIdAsync(id));
            const { projects } = store.getState();
            expect(projects.currentProject).toBe(null);
            expect(mockErrorToast).toBeCalled();
        });

        it('get project by id should success', async () => {
            const mockPost = jest.spyOn(httpService, 'get');
            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res({ data: currentProject } as AxiosResponse<Project>);
                    }),
            );
            await store.dispatch(getProjectByIdAsync(id));
            const { projects } = store.getState();

            expect(projects.currentProject).toBe(currentProject);
        });
    });

    describe('add project', () => {
        const requestUser: Project = {
            id: 16,
            img: 'https://cdn.zeplin.io/5ecffa8aeffff9282307b8d6/assets/2086FA6E-1C7F-4413-95C6-4AEDD95DD5DD.png',
            title: 'Gramma Limited',
            dateCreate: '2021-07-13',
            reporter: 'Donald Curtis',
            dateDue: '2021-07-12',
            stats: ProjectState.done,
            value: '500',
            reporterId: 1,
            views: 0,
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('add project should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'post');

            mockPost.mockImplementation(() => Promise.reject(new Error('error')));
            await store.dispatch(addProjectAsync(requestUser));
            expect(mockErrorToast).toBeCalled();
        });

        it('add project should success', async () => {
            const mockPost = jest.spyOn(httpService, 'post');

            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res({} as AxiosResponse);
                    }),
            );
            await store.dispatch(addProjectAsync(requestUser));
            expect(mockSuccessToast).toBeCalled();
        });
    });

    describe('delete project', () => {
        const id = 1;

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('delete project should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'delete');

            mockPost.mockImplementation(() => Promise.reject(new Error('error')));
            await store.dispatch(deleteProjectAsync(id));
            expect(mockErrorToast).toBeCalled();
        });

        it('delete project should success', async () => {
            const mockPost = jest.spyOn(httpService, 'delete');
            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res({} as AxiosResponse);
                    }),
            );
            await store.dispatch(deleteProjectAsync(id));

            expect(mockSuccessToast).toBeCalled();
        });
    });

    describe('get projects assets', () => {
        const params = { page: 1, limit: 10 };
        const id = 1;

        const getResponse = {
            headers: { 'x-total-count': 1 },
            data: [
                {
                    id: 1,
                    url: 'url',
                    projectId: 2,
                },
            ],
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('get projects assets should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'get');
            mockPost.mockImplementation(() => Promise.reject(new Error('error')));

            await store.dispatch(getProjectAssetsAsync({ id, ...params }));
            const { projects } = store.getState();
            expect(mockErrorToast).toBeCalled();
            expect(projects.currentProjectAssets).toHaveLength(0);
        });

        it('get projects should success', async () => {
            const mockPost = jest.spyOn(httpService, 'get');
            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res(getResponse as AxiosResponse<ProjectAssets[]>);
                    }),
            );
            await store.dispatch(getProjectAssetsAsync({ id, ...params }));
            const { projects } = store.getState();

            expect(projects.currentProjectAssets).toHaveLength(1);
            expect(projects.totalAssets).toBe(1);
        });
    });

    describe('clear project assets', () => {
        it('get projects assets should reject', async () => {
            await store.dispatch(clearAssets());
            const { projects } = store.getState();
            expect(projects.currentProjectAssets).toHaveLength(0);
            expect(projects.currentProjectAssets).toHaveLength(0);
        });
    });
});
