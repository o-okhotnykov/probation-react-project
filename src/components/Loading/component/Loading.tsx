import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Loading.scss';

export const Loading: React.FC = () => {
    return (
        <div className="overlay">
            <div className="loading">
                <CircularProgress />
            </div>
        </div>
    );
};
