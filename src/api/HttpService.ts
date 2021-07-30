/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { logout } from 'store/user-slice';
import { BASE_URL } from 'constants/index';

const service = axios.create({
    baseURL: BASE_URL,
});

export class HttpService {
    interceptorsInit(token: string, dispatch: Dispatch<unknown>): void {
        service.interceptors.request.use(
            async (config) => {
                config.headers = {
                    Authorization: `Bearer ${token}`,
                };
                return config;
            },
            (error) => {
                Promise.reject(error);
            },
        );

        service.interceptors.response.use(
            (response) => {
                return response;
            },
            async (error) => {
                if (error.response.status === 401) {
                    dispatch(logout());
                    return error;
                }

                return Promise.reject(error.message);
            },
        );
    }

    static redirectTo() {
        window.location.assign('/login');
    }

    static request<T>(params: AxiosRequestConfig) {
        return service.request(params) as Promise<
            AxiosResponse<T> | AxiosError<{ message: string }>
        >;
    }

    static get(path: string) {
        return this.request({
            method: 'GET',
            url: path,
            responseType: 'json',
        });
    }

    static post<T>(path: string, payload: unknown) {
        return this.request<T>({
            method: 'POST',
            url: path,
            data: payload,
        });
    }
}
