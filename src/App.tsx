/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './components/Layout';
import { Routes } from './routes/Routes';
import { HttpService } from './api/HttpService';
import { accessTokenSelector, logout } from './store/user-slice';

export const App: React.FC = () => {
    const token = useSelector(accessTokenSelector);
    const httpService = new HttpService();
    const dispatch = useDispatch();
    httpService.interceptorsInit(token, dispatch);

    return (
        <div className="App">
            <Layout>
                <Routes />
            </Layout>
        </div>
    );
};
