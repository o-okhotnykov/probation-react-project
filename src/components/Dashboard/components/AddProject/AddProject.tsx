import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {
    OPEN_COLOR_BG,
    OPEN_COLOR_DEFAULT,
    PROGRESS_COLOR_BG,
    PROGRESS_COLOR_DEFAULT,
    SUCCESS_COLOR_BG,
    SUCCESS_COLOR_DEFAULT,
} from 'constants/colors';
import { ProjectCard } from '../ProjectCard';
import { useStyles } from './styles';

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
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <ProjectCard
                                bgColor={SUCCESS_COLOR_BG}
                                defaultColor={SUCCESS_COLOR_DEFAULT}
                                completionValue={67}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ProjectCard
                                bgColor={PROGRESS_COLOR_BG}
                                defaultColor={PROGRESS_COLOR_DEFAULT}
                                completionValue={32}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ProjectCard
                                bgColor={OPEN_COLOR_BG}
                                defaultColor={OPEN_COLOR_DEFAULT}
                                completionValue={39}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
