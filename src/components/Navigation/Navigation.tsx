import React from 'react';
import { UserMenu } from './UserMenu/UserMenu';
import { Navbar } from './Navbar/Navbar';
import './Navigation.css';

export const Navigation: React.FC = () => {
    return (
        <header className="header">
            <Navbar />
            <UserMenu />
        </header>
    );
};
