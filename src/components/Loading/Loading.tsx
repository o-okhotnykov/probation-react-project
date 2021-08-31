import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { isRequestPendingSelector } from 'store/loading-slice';
import { useSelector } from 'react-redux';
import { AsyncThunkProp } from 'types/api/auth';

interface LoadingProps {
    apiCall: AsyncThunkProp;
    hideLoader?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ apiCall, hideLoader, children }) => {
    const loading = useSelector(isRequestPendingSelector(apiCall.typePrefix));

    if (hideLoader) {
        return <>{children}</>;
    }

    return (
        <>
            {loading ? (
                <Box>
                    <CircularProgress />
                </Box>
            ) : (
                children
            )}
        </>
    );
};
