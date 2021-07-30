import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accessTokenSelector } from 'store/user-slice';
import { Layout } from 'components/Layout';
import { Routes } from 'routes/Routes';
import { HttpService } from 'api/HttpService';

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
