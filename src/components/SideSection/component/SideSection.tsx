import React from 'react';
import logo from 'assets/logo.png';

export const SideSection: React.FC = () => {
    return (
        <div className="side-section ">
            <img src={logo} className="side-logo" alt="logo" />
        </div>
    );
};
