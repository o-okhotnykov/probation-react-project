import React from 'react';

export interface ILayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <div className="wrapper">{children}</div>
        </>
    );
};
