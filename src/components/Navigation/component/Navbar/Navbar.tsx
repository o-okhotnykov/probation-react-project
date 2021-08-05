import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { ROUTE_PATH } from 'constants/index';
import { useStyles } from './styles';

export const Navbar: React.FC = () => {
    return (
        <Typography>
            <Link to={ROUTE_PATH.dashboard}>Dashboard</Link>
            <Link to={ROUTE_PATH.dashboard}>All Projects</Link>
            <Link to={ROUTE_PATH.members}>Members</Link>
            <Link to={ROUTE_PATH.dashboard}>Stats</Link>
            <Link to={ROUTE_PATH.dashboard}>Help</Link>
        </Typography>
    );
};
