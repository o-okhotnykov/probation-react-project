import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';

interface LoadingProps {
    isLoading: boolean;
    hideLoader?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ isLoading, hideLoader = false, children }) => {
    if (isLoading && !hideLoader) {
        return (
            <Box>
                <CircularProgress />
            </Box>
        );
    }

    return <>{children}</>;
};
