import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from '../components/LoginPage/index';
import { RegisterPage } from '../components/RegisterPage/index';
import { Main } from '../components/Main/component/Main';
import { ErrorComponent } from '../components/ErrorComponent/index';
import { RoutePath } from './RoutePath';

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
