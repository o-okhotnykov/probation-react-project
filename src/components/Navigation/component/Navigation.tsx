import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { UserMenu, Navbar } from '../index';
import { ROUTE_PATH } from '../../../constants';
import './Navigation.scss';

export const Navigation: React.FC = () => {
    return (
        <Grid item xs={12} className="header">
            <Navbar />

            <UserMenu />

            <div>
                <Link to={ROUTE_PATH.login}>
                    <Button>Login</Button>
                </Link>
                <Link to={ROUTE_PATH.register}>
                    <Button>Register</Button>
                </Link>
            </div>
        </Grid>
    );
};
