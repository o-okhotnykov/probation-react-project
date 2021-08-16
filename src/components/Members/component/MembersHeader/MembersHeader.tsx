import React from 'react';
import { Button, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useStyles } from './styles';

export const MembersHeader: React.FC = () => {
    const classes = useStyles();
    return (
        <div className="members-header">
            <Typography variant="h5" className={classes.header}>
                Members
            </Typography>
            <Typography variant="body2" className={classes.subTitle}>
                List of members where you can get list of members
            </Typography>
            <Typography>
                <Button className={classes.btn}>
                    <AddCircleIcon style={{ fontSize: 40 }} className="plus-icon" />
                    ADD NEW USER
                </Button>
            </Typography>
        </div>
    );
};
