import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Layout } from './components/Layout';
import { Routes } from './routes/Routes';

export const App: React.FC = () => {
    return (
        <div className="App">
            <Layout>
                <ToastContainer />
                <Routes />
            </Layout>
        </div>
    );
};
