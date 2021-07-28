import React from 'react';
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
