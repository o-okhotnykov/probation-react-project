import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { LoginPage } from 'components/LoginPage';
import { RegisterPage } from 'components/RegisterPage';
import { DashboardMain } from 'components/Dashboard';
import { MembersMain } from 'components/Members';
import { ROUTE_PATH } from 'constants/index';
import { ErrorComponent } from 'components/ErrorComponent';
import { PrivateRoute } from './PrivateRoute';

export const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path={ROUTE_PATH.login} component={LoginPage} />
                <Route path={ROUTE_PATH.register} component={RegisterPage} />
                <PrivateRoute exact path={ROUTE_PATH.dashboard} component={DashboardMain} />
                <PrivateRoute exact path={ROUTE_PATH.members} component={MembersMain} />
                <Route exact path={ROUTE_PATH.main}>
                    <Redirect to={ROUTE_PATH.dashboard} />
                </Route>
                <Route component={ErrorComponent} />
            </Switch>
        </Router>
    );
};
