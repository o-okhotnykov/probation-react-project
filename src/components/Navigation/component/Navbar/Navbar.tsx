import { useHistory } from 'react-router-dom';
import { ROUTE_PATH } from 'constants/index';
import { Tab, Tabs } from '@material-ui/core';
import { useState } from 'react';
import { useStyles } from './styles';

export const Navbar: React.FC = () => {
    const history = useHistory();

    const classes = useStyles();
    const [pageLocation, setPageLocation] = useState<string>(ROUTE_PATH.dashboard);
    const handleChange = (event: React.ChangeEvent<unknown>, value: string) => {
        setPageLocation(value);
        history.push(value);
    };

    return (
        <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={pageLocation}
            onChange={handleChange}
        >
            <Tab className={classes.tab} label="Dashboard" value={ROUTE_PATH.dashboard} />
            <Tab className={classes.tab} label="All projects" value={ROUTE_PATH.projects} />
            <Tab className={classes.tab} label="Members" value={ROUTE_PATH.members} />
            <Tab className={classes.tab} label="Settings" value={ROUTE_PATH.settings} />
        </Tabs>
    );
};
