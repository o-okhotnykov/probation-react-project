import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { useStyles } from './styles';

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const Navbar: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab className={classes.root} label="Dashboard" {...a11yProps(0)} />
            <Tab className={classes.root} label="All Projects" {...a11yProps(1)} />
            <Tab className={classes.root} label="Members" {...a11yProps(2)} />
            <Tab className={classes.root} label="Stats" {...a11yProps(3)} />
            <Tab className={classes.root} label="Help" {...a11yProps(4)} />
        </Tabs>
    );
};
