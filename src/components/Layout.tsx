import { ThemeProvider, createTheme, Grid } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { isAuthorizedSelector } from 'store/user-slice';
import { PrivateRoute } from 'routes/PrivateRoute';
import { ROUTE_PATH } from 'constants/index';
import { Navigation } from './Navigation';
import { SideSection } from './SideSection';
import { DashboardMain } from './Dashboard';
import { MembersMain } from './Members';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});

export const Layout: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                <Grid item xs={1} className="side-section-container">
                    <SideSection />
                </Grid>
                <Grid item xs={11} className="main-section">
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
        </ThemeProvider>
    );
};
