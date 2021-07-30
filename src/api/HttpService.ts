/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';

const service = axios.create({
    baseURL: BASE_URL,
});

service.interceptors.response.use(
    (response) => response,
    (error) => {
        return error;
    },
);

export class HttpService {
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
