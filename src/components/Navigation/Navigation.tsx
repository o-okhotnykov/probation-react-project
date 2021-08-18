import React from 'react';
import { Box } from '@material-ui/core';
import { UserMenu } from './component/UserMenu';
import { Navbar } from './component/Navbar';
import { useStyles } from './style';

export const Navigation: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.header}>
            <Navbar />
            <UserMenu />
        </Box>
    );
};
