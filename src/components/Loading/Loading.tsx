import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { isRequestPendingSelector } from 'store/loading-slice';
import { useSelector } from 'react-redux';
import { AsyncThunkProp } from 'types/api/auth';

export const Loading: React.FC<{ apiCall: AsyncThunkProp }> = ({ apiCall, children }) => {
    const loading = useSelector(isRequestPendingSelector(apiCall.typePrefix));
    return (
        <>
            {loading ? (
                <div className="loading">
                    <CircularProgress />
                </div>
            ) : (
                children
            )}
        </>
    );
};
