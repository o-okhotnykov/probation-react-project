import { Grid } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PrivateRoute } from 'routes/PrivateRoute';
import { ROUTE_PATH } from 'constants/index';
import { Navigation } from './Navigation';
import { SideSection } from './SideSection';
import { DashboardMain } from './Dashboard';
import { MembersMain } from './Members';
import { useStyles } from './style';

export const Layout: React.FC = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={1} justifyContent="center" className={classes.sideSection}>
                <SideSection />
            </Grid>
            <Grid item xs={11}>
                <Navigation />
                <Switch>
                    <PrivateRoute exact path={ROUTE_PATH.dashboard} component={DashboardMain} />
                    <PrivateRoute exact path={ROUTE_PATH.members} component={MembersMain} />
                    <Route exact path={ROUTE_PATH.main}>
                        <Redirect to={ROUTE_PATH.dashboard} />
                    </Route>
                </Switch>
            </Grid>
        </Grid>
    );
};
