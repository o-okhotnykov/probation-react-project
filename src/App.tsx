/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SideSection } from './components/SideSection/SideSection';
import { Main } from './components/Main/Main';
import { Layout } from './components/Layout';
import { Routes } from './routes/Routes';

export const App: React.FC = () => {
    return (
        <div className="App">
            <Layout>
                <Routes />
            </Layout>
        </div>
    );
};
