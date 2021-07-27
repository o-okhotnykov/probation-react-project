/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

export const Navbar: React.FC = () => {
    const classes = useStyles();
    return (
        <Typography>
            <Link
                href="#"
                classes={{
                    root: classes.root,
                }}
            >
                Dashboard
            </Link>
            <Link
                href="#"
                classes={{
                    root: classes.root,
                }}
            >
                All Projects
            </Link>
            <Link
                href="#"
                classes={{
                    root: classes.root,
                }}
            >
                Members
            </Link>
            <Link
                href="#"
                classes={{
                    root: classes.root,
                }}
            >
                Stats
            </Link>
            <Link
                href="#"
                classes={{
                    root: classes.root,
                }}
            >
                Help
            </Link>
        </Typography>
    );
};
