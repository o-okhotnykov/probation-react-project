import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Form } from '../components/LoginPage/LoginPage';
import { Main } from '../components/Main/Main';
import { ErrorComponent } from '../components/ErrorComponent/ErrorComponent';
import { RoutePath } from './RoutePath';

export const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path={RoutePath.login} component={Form} />
                <Route path={RoutePath.main} component={Main} />
                <Route component={ErrorComponent} />
            </Switch>
        </Router>
    );
};
