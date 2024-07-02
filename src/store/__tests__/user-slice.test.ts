import { AxiosResponse } from 'axios';
import {
    UserRole,
    RegisterResponse,
    LoginResponse,
    UsersGetResponse,
    IUserData,
    IEditFormResponse,
} from 'types/api/auth';
import { ILoginFormValues, IRegisterResponse } from 'types';
import * as toast from 'toasts';
import { httpService } from 'services/HttpService';
import { store } from '../root-store';
import {
    addUserAsync,
    deleteUserAsync,
    getUserAsync,
    getUserByIdAsync,
    getUsersAsync,
    loginAsync,
    logout,
    patchUserAsync,
    registerAsync,
} from '../user-slice';

jest.mock('services/HttpService');
jest.mock('toasts');

const mockSuccessToast = jest.spyOn(toast, 'successfulToastNotify');
const mockErrorToast = jest.spyOn(toast, 'errorToastNotify');

describe('User Slice tests', () => {
    describe('register', () => {
        const registerResponse: RegisterResponse = {
            accessToken: '123',
            user: {
                email: 'sashaohotni26@gmail.com',
                name: 'Admin2',
                surname: 'Admin2',
                birthDate: '2021-08-29',
                img: '/static/media/default-user.fba28acd.png',
                role: UserRole.admin,
                id: 123,
            },
        };

        const registerRequest: IRegisterResponse = {
            email: 'sashaohotni26@gmail.com',
            name: 'Admin2',
            surname: 'Admin2',
            birthDate: '2021-08-29',
            img: '/static/media/default-user.fba28acd.png',
            role: UserRole.admin,
            password: '123',
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('register should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'post');
            mockPost.mockImplementation(() => Promise.reject(new Error('error')));

            await store.dispatch(registerAsync(registerRequest));
            expect(mockErrorToast).toBeCalled();
        });

        it('register should get accessToken', async () => {
            const mockPost = jest.spyOn(httpService, 'post');
            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res({ data: registerResponse } as AxiosResponse<RegisterResponse>);
                    }),
            );
            await store.dispatch(registerAsync(registerRequest));
            const { user } = store.getState();
            expect(user.accessToken).not.toBe('');
        });
    });

    describe('login', () => {
        const loginResponse: LoginResponse = {
            accessToken: '123',
            user: {
                email: 'sashaohotni26@gmail.com',
                name: 'Admin2',
                surname: 'Admin2',
                birthDate: '2021-08-29',
                img: '/static/media/default-user.fba28acd.png',
                role: UserRole.admin,
                id: 123,
            },
        };

        const loginRequest: ILoginFormValues = {
            email: 'sashaohotni26@gmail.com',
            password: '123',
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('register should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'post');

            mockPost.mockImplementation(() => Promise.reject(new Error('error')));

            await store.dispatch(loginAsync(loginRequest));
            return expect(mockErrorToast).toBeCalled();
        });

        it('login should get accessToken', async () => {
            const mockPost = jest.spyOn(httpService, 'post');
            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res({ data: loginResponse } as AxiosResponse<RegisterResponse>);
                    }),
            );
            await store.dispatch(loginAsync(loginRequest));
            const { user } = store.getState();
            expect(user.accessToken).not.toBe('');
        });
    });

    describe('get users data', () => {
        const params = { page: 1, limit: 10 };

        const getResponse = {
            headers: { 'x-total-count': 2 },
            data: [
                {
                    email: 'sashaohotni26@gmail.com',
                    name: 'Admin2',
                    surname: 'Admin2',
                    birthDate: '2021-08-29',
                    img: '/static/media/default-user.fba28acd.png',
                    role: UserRole.admin,
                    id: 123,
                },
                {
                    email: 'sashaohotni26@gmail.com',
                    name: 'Admin2',
                    surname: 'Admin2',
                    birthDate: '2021-08-29',
                    img: '/static/media/default-user.fba28acd.png',
                    role: UserRole.admin,
                    id: 123,
                },
            ],
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('get users should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'get');
            mockPost.mockImplementation(() => Promise.reject(new Error('error')));

            await store.dispatch(getUsersAsync(params));
            const { user } = store.getState();
            expect(user.usersData).toHaveLength(0);
            expect(mockErrorToast).toBeCalled();
        });

        it('get users should success', async () => {
            const mockPost = jest.spyOn(httpService, 'get');
            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res(getResponse as AxiosResponse<UsersGetResponse>);
                    }),
            );
            await store.dispatch(getUsersAsync(params));
            const { user } = store.getState();

            expect(user.usersData).toHaveLength(2);
            expect(user.total).toBe(2);
        });
    });

    describe('get user data', () => {
        const loginResponse: IUserData = {
            email: 'sashaohotni26@gmail.com',
            name: 'Admin2',
            surname: 'Admin2',
            birthDate: '2021-08-29',
            img: '/static/media/default-user.fba28acd.png',
            role: UserRole.admin,
            id: 123,
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });
        it('get user should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'get');

            mockPost.mockImplementation(() => Promise.reject(new Error('error')));

            await store.dispatch(getUserAsync());
            const { user } = store.getState();
            expect(user.userData).toBe(null);
            expect(mockErrorToast).toBeCalled();
        });

        it('get user should success', async () => {
            const mockPost = jest.spyOn(httpService, 'get');
            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res({ data: loginResponse } as AxiosResponse<IUserData>);
                    }),
            );
            await store.dispatch(getUserAsync());
            const { user } = store.getState();

            expect(user.userData).toBe(loginResponse);
        });
    });

    describe('get user data by id', () => {
        const id = 1;
        const currentUser: IUserData = {
            email: 'sashaohotni26@gmail.com',
            name: 'Admin2',
            surname: 'Admin2',
            birthDate: '2021-08-29',
            img: '/static/media/default-user.fba28acd.png',
            role: UserRole.admin,
            id: 123,
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('get user by id should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'get');

            mockPost.mockImplementation(() => Promise.reject(new Error('error')));

            await store.dispatch(getUserByIdAsync(id));
            const { user } = store.getState();
            expect(user.currentUser).toBe(null);
            expect(mockErrorToast).toBeCalled();
        });

        it('get user by id should success', async () => {
            const mockPost = jest.spyOn(httpService, 'get');
            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res({ data: currentUser } as AxiosResponse<IUserData>);
                    }),
            );
            await store.dispatch(getUserByIdAsync(id));
            const { user } = store.getState();

            expect(user.currentUser).toBe(currentUser);
        });
    });

    describe('delete user', () => {
        const id = 1;

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('delete user should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'delete');

            mockPost.mockImplementation(() => Promise.reject(new Error('error')));
            await store.dispatch(deleteUserAsync(id));
            expect(mockErrorToast).toBeCalled();
        });

        it('delete user should success', async () => {
            const mockPost = jest.spyOn(httpService, 'delete');
            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res({} as AxiosResponse);
                    }),
            );
            await store.dispatch(deleteUserAsync(id));

            expect(mockSuccessToast).toBeCalled();
        });
    });

    describe('patch user', () => {
        const id = 1;

        const requestUser: IEditFormResponse = {
            email: 'sashaohotni26@gmail.com',
            name: 'Admin2',
            surname: 'Admin2',
            birthDate: '2021-08-29',
            img: '/static/media/default-user.fba28acd.png',
            role: UserRole.admin,
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('patch user should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'patch');

            mockPost.mockImplementation(() => Promise.reject(new Error('error')));
            await store.dispatch(patchUserAsync({ id, values: requestUser }));
            expect(mockErrorToast).toBeCalled();
        });

        it('patch user should success', async () => {
            const mockPost = jest.spyOn(httpService, 'patch');
            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res({} as AxiosResponse);
                    }),
            );
            await store.dispatch(patchUserAsync({ id, values: requestUser }));

            expect(mockSuccessToast).toBeCalled();
        });
    });

    describe('add user', () => {
        const requestUser: IRegisterResponse = {
            email: 'sashaohotni26@gmail.com',
            password: '123456Aa',
            name: 'Admin2',
            surname: 'Admin2',
            birthDate: '2021-08-29',
            img: '/static/media/default-user.fba28acd.png',
            role: UserRole.admin,
        };

        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('add user should reject', async () => {
            const mockPost = jest.spyOn(httpService, 'post');

            mockPost.mockImplementation(() => Promise.reject(new Error('error')));
            await store.dispatch(addUserAsync(requestUser));
            expect(mockErrorToast).toBeCalled();
        });

        it('add user should success', async () => {
            const mockPost = jest.spyOn(httpService, 'post');

            mockPost.mockImplementation(
                () =>
                    new Promise((res) => {
                        res({} as AxiosResponse);
                    }),
            );
            await store.dispatch(addUserAsync(requestUser));
            expect(mockSuccessToast).toBeCalled();
        });
    });

    describe('logout', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('addUser user should reject', async () => {
            await store.dispatch(logout());
            const { user } = store.getState();
            expect(user.accessToken).toBe('');
        });
    });
});
