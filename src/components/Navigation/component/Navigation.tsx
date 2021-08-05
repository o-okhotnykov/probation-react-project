import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { isAuthorizedSelector } from 'store/user-slice';
import { ROUTE_PATH } from 'constants/index';
import { UserMenu } from './UserMenu';
import { Navbar } from './Navbar';

export const Navigation: React.FC = () => {
    const isAuthorized = useSelector(isAuthorizedSelector);
    return (
        <Grid item xs={12} className="header">
            <Navbar />
            {isAuthorized ? (
                <UserMenu />
            ) : (
                <div>
                    <Link to={ROUTE_PATH.login}>
                        <Button>Login</Button>
                    </Link>
                    <Link to={ROUTE_PATH.register}>
                        <Button>Register</Button>
                    </Link>
                </div>
            )}
        </Grid>
    );
};
