/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SideSection } from './components/SideSection/component/SideSection';
import { Main } from './components/Main/index';
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
