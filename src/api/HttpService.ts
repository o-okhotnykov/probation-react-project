import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
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
                const errorData = error.response?.data;
                const errorStatus = error.response?.status;

                if (errorStatus === 401) {
                    dispatch(logout());
                }

                if (errorData) {
                    error.message = errorData;
                }

                return Promise.reject(error);
            },
        );
    }

    request<T>(params: AxiosRequestConfig) {
        return this.service.request(params) as Promise<AxiosResponse<T>>;
    }

    get<T>(path: string, payload: unknown) {
        return this.request<T>({
            method: 'GET',
            url: path,
            responseType: 'json',
            params: payload,
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
