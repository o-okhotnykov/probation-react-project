import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Dispatch } from 'react';
import { logout } from 'store/user-slice';
import { BASE_URL } from 'constants/index';

class HttpService {
    baseUrl: string;

    service: AxiosInstance;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.service = axios.create({ baseURL: baseUrl });
    }

    interceptorsInit(token: string, dispatch: Dispatch<unknown>): void {
        this.service.interceptors.request.use(
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

        this.service.interceptors.response.use(
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

    request<T>(params: AxiosRequestConfig) {
        return this.service.request(params) as Promise<
            AxiosResponse<T> | AxiosError<{ message: string }>
        >;
    }

    get<T>(path: string) {
        return this.request<T>({
            method: 'GET',
            url: path,
            responseType: 'json',
        });
    }

    post<T>(path: string, payload: unknown) {
        return this.request<T>({
            method: 'POST',
            url: path,
            data: payload,
        });
    }
}

export const httpService = new HttpService(BASE_URL);
