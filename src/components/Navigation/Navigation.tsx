import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { accessTokenSelector } from '../../store/user-slice';
import { UserMenu } from './UserMenu/UserMenu';
import { Navbar } from './Navbar/Navbar';
import './Navigation.scss';

export const Navigation: React.FC = () => {
    const accessToken = useSelector(accessTokenSelector);
    return (
        <Grid item xs={12} className="header">
            <Navbar />
            {accessToken ? (
                <UserMenu />
            ) : (
                <div>
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>
                </div>
            )}
        </Grid>
    );
};
