import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useStyles } from './styles';

export const MembersMain: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={1} className={classes.container}>
                <Grid item xs={5} className={classes.addProject}>
                    <Typography variant="h5" className={classes.header}>
                        Add Project
                    </Typography>
                    <Typography variant="body2" className={classes.subTitle}>
                        Create a new project on ProManage. Collaborate your work. Directory to your
                        local projects
                    </Typography>
                    <Typography>
                        <Button className={classes.btn}>
                            <AddCircleIcon style={{ fontSize: 40 }} className="plus-icon" />
                            CREATE New Project
                        </Button>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
