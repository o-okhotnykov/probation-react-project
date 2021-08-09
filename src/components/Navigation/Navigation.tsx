import React from 'react';
import { UserMenu } from './component/UserMenu';
import { Navbar } from './component/Navbar';

export const Navigation: React.FC = () => {
    return (
        <header className="header">
            <Navbar />
            <UserMenu />
        </header>
    );
};
