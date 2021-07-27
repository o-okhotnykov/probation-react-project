import React from 'react';
import PropTypes from 'prop-types';

export const Layout: React.FC = ({ children }) => {
    return <div className="wrapper">{children}</div>;
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
