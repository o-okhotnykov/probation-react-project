import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from '../components/LoginPage';
import { RegisterPage } from '../components/RegisterPage';
import { Main } from '../components/Main';
import { ErrorComponent } from '../components/ErrorComponent';
import { ROUTE_PATH } from '../constants';
import { PrivateRoute } from './PrivateRoute';

export const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path={ROUTE_PATH.login} component={LoginPage} />
                <Route path={ROUTE_PATH.register} component={RegisterPage} />
                <PrivateRoute exact path={ROUTE_PATH.main} component={Main} />
                <Route component={ErrorComponent} />
            </Switch>
        </Router>
    );
};
