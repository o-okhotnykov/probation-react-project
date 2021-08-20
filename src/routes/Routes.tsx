/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { LoginPage } from 'components/LoginPage';
import { RegisterPage } from 'components/RegisterPage';
import { DashboardMain } from 'components/Dashboard';
import { MembersMain } from 'components/Members';
import { ROUTE_PATH } from 'constants/index';
import { ErrorComponent } from 'components/ErrorComponent';
import { Layout } from 'components/Layout';
import { PrivateRoute } from './PrivateRoute';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path={ROUTE_PATH.login} component={LoginPage} />
            <Route path={ROUTE_PATH.register} component={RegisterPage} />
            <Route path={ROUTE_PATH.main} component={Layout} />
            <Route component={ErrorComponent} />
        </Switch>
    );
};
