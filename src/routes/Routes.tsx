import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from '../components/LoginPage';
import { Main } from '../components/Main/component/Main';
import { ErrorComponent } from '../components/ErrorComponent';
import { RoutePath } from '../constants';
import { PrivateRoute } from './PrivateRoute';

export const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path={RoutePath.login} component={LoginPage} />
                <PrivateRoute exact path={RoutePath.main} component={Main} />
                <Route component={ErrorComponent} />
            </Switch>
        </Router>
    );
};
