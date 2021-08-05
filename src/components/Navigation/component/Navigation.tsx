import React from 'react';
import { UserMenu } from './UserMenu';
import { Navbar } from './Navbar';

export const Navigation: React.FC = () => {
    return (
        <header className="header">
            <Navbar />
            <UserMenu />
        </header>
    );
};
