import React from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { ROUTE_PATH } from 'constants/index';
import { Tab, Tabs } from '@material-ui/core';
import { Dashboard } from '@material-ui/icons';
import { MembersMain } from 'components/Members';
import { ErrorComponent } from 'components/ErrorComponent';
import { useStyles } from './styles';

const NavbarComponent: React.FC = () => {
    const history = useHistory();
    const classes = useStyles();

    return (
        <Tabs value={history.location.pathname} onChange={(event, value) => history.push(value)}>
            <Tab className={classes.tab} label="Dashboard" value={ROUTE_PATH.dashboard}>
                <Dashboard />
            </Tab>
            <Tab className={classes.tab} label="All projects" value={ROUTE_PATH.projects}>
                <ErrorComponent />
            </Tab>
            <Tab className={classes.tab} label="Members" value={ROUTE_PATH.members}>
                <MembersMain />
            </Tab>
            <Tab className={classes.tab} label="Stats" value={ROUTE_PATH.stats}>
                <ErrorComponent />
            </Tab>
            <Tab className={classes.tab} label="Help" value={ROUTE_PATH.help}>
                <ErrorComponent />
            </Tab>
        </Tabs>
    );
};

export const Navbar = withRouter(NavbarComponent);
