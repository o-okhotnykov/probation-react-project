import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { isAuthorizedSelector } from 'store/user-slice';
import { RoutePath } from 'constants/index';
import { UserMenu, Navbar } from '../index';
import './Navigation.scss';

export const Navigation: React.FC = () => {
    const isAuthorized = useSelector(isAuthorizedSelector);

    return (
        <Grid item xs={12} className="header">
            <Navbar />
            {isAuthorized ? (
                <UserMenu />
            ) : (
                <div>
                    <Link to={RoutePath.login}>
                        <Button>Login</Button>
                    </Link>
                </div>
            )}
        </Grid>
    );
};
