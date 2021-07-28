import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from '../components/LoginPage';
import { RegisterPage } from '../components/RegisterPage';
import { Main } from '../components/Main';
import { ErrorComponent } from '../components/ErrorComponent';
import { RoutePath } from '../constants';

export const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path={RoutePath.login} component={LoginPage} />
                <Route path={RoutePath.register} component={RegisterPage} />
                <Route path={RoutePath.main} component={Main} />
                <Route component={ErrorComponent} />
            </Switch>
        </Router>
    );
};
