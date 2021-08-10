import React from 'react';
import { CircularProgress } from '@material-ui/core';

export const Loading: React.FC = () => {
    return (
        <div className="loading">
            <CircularProgress />
        </div>
    );
};
