import { useHistory } from 'react-router-dom';
import { ROUTE_PATH } from 'constants/index';
import { Tab, Tabs } from '@material-ui/core';
import { useStyles } from './styles';

const TAB_ROUTES = [
    ROUTE_PATH.dashboard,
    ROUTE_PATH.projects,
    ROUTE_PATH.members,
    ROUTE_PATH.settings,
];

export const Navbar: React.FC = () => {
    const history = useHistory();

    const classes = useStyles();
    const tabValue = TAB_ROUTES.includes(history.location.pathname)
        ? history.location.pathname
        : false;

    const handleChange = (event: React.ChangeEvent<unknown>, value: string) => {
        history.push(value);
    };

    return (
        <Tabs indicatorColor="primary" textColor="primary" value={tabValue} onChange={handleChange}>
            <Tab className={classes.tab} label="Dashboard" value={ROUTE_PATH.dashboard} />
            <Tab className={classes.tab} label="All projects" value={ROUTE_PATH.projects} />
            <Tab className={classes.tab} label="Members" value={ROUTE_PATH.members} />
            <Tab className={classes.tab} label="Settings" value={ROUTE_PATH.settings} />
        </Tabs>
    );
};
