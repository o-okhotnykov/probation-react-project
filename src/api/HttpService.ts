/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable consistent-return */

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';

const service = axios.create({
    baseURL: BASE_URL,
});

service.interceptors.request.use(
    async (config) => {
        // console.log(accessToken);
        // config.headers = {
        //     Authorization: `Bearer ${accessToken}`,
        //     Accept: 'application/json',
        //     'Content-Type': 'application/x-www-form-urlencoded',
        // };
        // console.log(config);
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
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.clear();
        }
        return Promise.reject(error);
    },
);

export class HttpService {
    static parseResponse(response: Promise<AxiosResponse>) {
        return response
            .then((data) => this.handleSuccess(data))
            .catch((error) => this.handleError(error));
    }

    static handleSuccess(response: AxiosResponse) {
        return response;
    }

    static test() {
        axios.interceptors.response.use(
            (response) => {
                console.log(response);
                return response;
            },
            (error) => {
                // if (error.response && error.response.status === 401) {
                // }
                return Promise.reject(error);
            },
        );
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

    static request(params: AxiosRequestConfig) {
        const response = service.request(params);
        return this.parseResponse(response);
    }

    static get(path: string, payload: undefined) {
        return this.request({
            method: 'GET',
            url: path,
            responseType: 'json',
            data: payload,
        });
    }

    static post(path: string, payload: unknown) {
        return this.request({
            method: 'POST',
            url: path,
            data: payload,
        });
    }
}
