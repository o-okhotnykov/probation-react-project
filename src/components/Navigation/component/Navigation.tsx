import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { loadingSelector } from 'store/loading-slice';
import { Loading } from 'components/Loading';
import { UserMenu } from './UserMenu';
import { Navbar } from './Navbar';
import './Navigation.scss';

export const Navigation: React.FC = () => {
    const loading = useSelector(loadingSelector);
    return (
        <Grid item xs={12} className="header">
            <Navbar />
            {loading ? <Loading /> : null}
            <UserMenu />
        </Grid>
    );
};
