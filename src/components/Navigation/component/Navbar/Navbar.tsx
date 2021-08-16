import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTE_PATH } from 'constants/index';
import { Tab, Tabs } from '@material-ui/core';
import { useStyles } from './styles';

export const Navbar: React.FC = () => {
    const history = useHistory();
    const classes = useStyles();
    const { pathname } = history.location;

    const handleChange = (event: React.ChangeEvent<any>, value: string) => {
        history.push(value);
    };

    return (
        <Tabs value={pathname} onChange={handleChange}>
            <Tab className={classes.tab} label="Dashboard" value={ROUTE_PATH.dashboard} />
            <Tab className={classes.tab} label="All projects" value={ROUTE_PATH.projects} />
            <Tab className={classes.tab} label="Members" value={ROUTE_PATH.members} />
            <Tab className={classes.tab} label="Stats" value={ROUTE_PATH.stats} />
            <Tab className={classes.tab} label="Help" value={ROUTE_PATH.help} />
        </Tabs>
    );
};
