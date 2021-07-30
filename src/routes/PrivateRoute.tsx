/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthorizedSelector } from '../store/user-slice';
import { ROUTE_PATH } from '../constants';

interface IProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
}

export const PrivateRoute: React.FC<IProps> = ({ component: Component, ...rest }: IProps) => {
    const isAuthorized = useSelector(isAuthorizedSelector);
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthorized ? <Component {...props} /> : <Redirect to={ROUTE_PATH.login} />
            }
        />
    );
};
