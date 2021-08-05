import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ProjectCard } from '../../ProjectCard';
import { useStyles } from './styles';
import './AddProject.scss';

export const AddProject: React.FC = () => {
    const classes = useStyles();
    return (
        <div className="add-container">
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
                <Grid item xs={5}>
                    <ProjectCard />
                </Grid>
            </Grid>
        </div>
    );
};
