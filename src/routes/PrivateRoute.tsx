import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthorizedSelector } from '../store/user-slice';
import { ROUTE_PATH } from '../constants';

export const PrivateRoute: React.FC<RouteProps> = (props) => {
    const isAuthorized = useSelector(isAuthorizedSelector);

    if (isAuthorized) {
        return <Route {...props} />;
    }

    return <Redirect to={ROUTE_PATH.login} />;
};
