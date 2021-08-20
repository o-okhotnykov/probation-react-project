import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage } from 'components/LoginPage';
import { RegisterPage } from 'components/RegisterPage';
import { ROUTE_PATH } from 'constants/index';
import { ErrorComponent } from 'components/ErrorComponent';
import { Layout } from 'components/Layout';

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
