import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './components/Layout';
import { Routes } from './routes/Routes';

export const App: React.FC = () => {
    return (
        <div className="App">
            <ToastContainer />
            <Layout>
                <Routes />
            </Layout>
        </div>
    );
};
