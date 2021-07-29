/* eslint-disable class-methods-use-this */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { BASE_URL } from '../constants';
import { logout } from '../store/user-slice';

const service = axios.create({
    baseURL: BASE_URL,
});

export class HttpService {
    interceptorsInit(token: string, dispatch: Dispatch<any>): void {
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

    static get(path: string, payload: undefined) {
        return this.request({
            method: 'GET',
            url: path,
            responseType: 'json',
            data: payload,
        });
    }

    static post<T>(path: string, payload: any) {
        return this.request<T>({
            method: 'POST',
            url: path,
            data: payload,
        });
    }
}
