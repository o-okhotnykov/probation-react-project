import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from 'components/Layout';
import { Routes } from 'routes/Routes';
import { Box } from '@material-ui/core';

export const App: React.FC = () => {
    return (
        <Box>
            <ToastContainer />
            <Layout>
                <Routes />
            </Layout>
        </Box>
    );
};
