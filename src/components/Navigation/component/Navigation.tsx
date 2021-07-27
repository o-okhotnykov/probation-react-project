import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { accessTokenSelector } from '../../../store/user-slice';
import { UserMenu, Navbar } from '../index';
import './Navigation.scss';
import { RoutePath } from '../../../routes/RoutePath';

export const Navigation: React.FC = () => {
    const accessToken = useSelector(accessTokenSelector);
    return (
        <Grid item xs={12} className="header">
            <Navbar />
            {accessToken ? (
                <UserMenu />
            ) : (
                <div>
                    <Link to={RoutePath.login}>
                        <Button>Login</Button>
                    </Link>
                    <Link to={RoutePath.register}>
                        <Button>Register</Button>
                    </Link>
                </div>
            )}
        </Grid>
    );
};
