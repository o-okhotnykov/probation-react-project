import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { ROUTE_PATH } from 'constants/index';

export const Navbar: React.FC = () => {
    return (
        <Typography>
            <NavLink to={ROUTE_PATH.dashboard}>Dashboard</NavLink>
            <NavLink to={ROUTE_PATH.dashboard}>All Projects</NavLink>
            <NavLink to={ROUTE_PATH.members}>Members</NavLink>
            <NavLink to={ROUTE_PATH.dashboard}>Stats</NavLink>
            <NavLink to={ROUTE_PATH.dashboard}>Help</NavLink>
        </Typography>
    );
};
