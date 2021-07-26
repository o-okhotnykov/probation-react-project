import React from 'react';
import Grid from '@material-ui/core/Grid';
import { UserMenu } from './UserMenu/UserMenu';
import { Navbar } from './Navbar/Navbar';
import './Navigation.css';

export const Navigation: React.FC = () => {
    return (
        <Grid item xs={12} className="header">
            <Navbar />
            <UserMenu />
        </Grid>
    );
};
