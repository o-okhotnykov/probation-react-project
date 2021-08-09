import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_PATH } from 'constants/index';

export const Navbar: React.FC = () => {
    return (
        <nav className="nav-list">
            <NavLink to={ROUTE_PATH.dashboard} className="nav-item" activeClassName="nav-selected">
                Dashboard
            </NavLink>
            <NavLink to={ROUTE_PATH.projects} className="nav-item" activeClassName="nav-selected">
                All project
            </NavLink>
            <NavLink to={ROUTE_PATH.members} className="nav-item" activeClassName="nav-selected">
                Members
            </NavLink>
            <NavLink to={ROUTE_PATH.stats} className="nav-item" activeClassName="nav-selected">
                Stats
            </NavLink>
            <NavLink to={ROUTE_PATH.help} className="nav-item" activeClassName="nav-selected">
                Help
            </NavLink>
        </nav>
    );
};
