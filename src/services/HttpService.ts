import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { logout } from 'store/user-slice';
import { BASE_URL } from 'constants/index';

class HttpService {
    baseUrl: string;

    service: AxiosInstance;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
        this.service = axios.create({ baseURL: baseUrl });
    }

    interceptorsInit(): void {
        this.service.interceptors.request.use(
            async (config) => {
                const { store } = await import('store/root-store');
                const token = store.getState().user.accessToken;
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
                const { store } = await import('store/root-store');

                if (errorStatus === 401) {
                    store.dispatch(logout());
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

    get<T>(path: string, payload: Partial<AxiosRequestConfig>) {
        return this.request<T>({
            method: 'GET',
            url: path,
            responseType: 'json',
            ...payload,
        });
    }

    post<T>(path: string, payload: unknown) {
        return this.request<T>({
            method: 'POST',
            url: path,
            data: payload,
        });
    }

    patch<T>(path: string, payload: unknown) {
        return this.request<T>({
            method: 'PATCH',
            url: path,
            data: payload,
        });
    }

    delete<T>(path: string, payload: Partial<AxiosRequestConfig> = {}) {
        return this.request<T>({
            method: 'delete',
            url: path,
            ...payload,
        });
    }
}

export const httpService = new HttpService(BASE_URL);

httpService.interceptorsInit();
