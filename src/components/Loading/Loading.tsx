import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { isRequestPendingSelector } from 'store/loading-slice';
import { useSelector } from 'react-redux';
import { AsyncThunk } from '@reduxjs/toolkit';

export const Loading: React.FC<{ apiCall: AsyncThunk<any, any, any> }> = ({
    apiCall,
    children,
}) => {
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
