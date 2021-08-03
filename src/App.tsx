import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { accessTokenSelector } from 'store/user-slice';
import { Layout } from 'components/Layout';
import { Routes } from 'routes/Routes';
import { httpService } from 'api/HttpService';

export const App: React.FC = () => {
    const token = useSelector(accessTokenSelector);
    const dispatch = useDispatch();
    httpService.interceptorsInit(token, dispatch);

    return (
        <div className="App">
            <ToastContainer />
            <Layout>
                <Routes />
            </Layout>
        </div>
    );
};
