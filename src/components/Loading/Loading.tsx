import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { isRequestPendingSelector } from 'store/loading-slice';
import { useSelector } from 'react-redux';
import { AsyncThunkProp } from 'types/api/auth';

export const Loading: React.FC<{ apiCall: AsyncThunkProp }> = ({ apiCall, children }) => {
    const loading = useSelector(isRequestPendingSelector(apiCall.typePrefix));
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
