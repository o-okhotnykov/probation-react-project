/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable consistent-return */

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';

const service = axios.create({
    baseURL: BASE_URL,
});

service.interceptors.request.use(
    async (config) => {
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
        const originalRequest = error.config;
        console.log(error);
        console.log(originalRequest);
        return Promise.reject(error);
    },
);

export class HttpService {
    static handleSuccess(response: AxiosResponse) {
        return response;
    }

    static handleError(error: AxiosError) {
        if (error === undefined) {
            return;
        }

        const response = error?.response;
        if (response?.status === 401) {
            this.redirectTo();
        }

        return Promise.reject(error);
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
