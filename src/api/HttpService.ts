/* eslint-disable consistent-return */

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/index';

const service = axios.create({
    baseURL: BASE_URL,
});

export class HttpService {
    static parseResponse(response: Promise<AxiosResponse>) {
        return response
            .then((data) => this.handleSuccess(data))
            .catch((error) => this.handleError(error));
    }

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
