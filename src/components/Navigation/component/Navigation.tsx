import React from 'react';
import Grid from '@material-ui/core/Grid';
import { UserMenu } from './UserMenu';
import { Navbar } from './Navbar';
import './Navigation.scss';

export const Navigation: React.FC = () => {
    return (
        <Grid item xs={12} className="header">
            <Navbar />

            <UserMenu />
        </Grid>
    );
};
