import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {
    INFO_MAIN,
    INFO_LIGHT,
    WARNING_LIGHT,
    WARNING_MAIN,
    SUCCESS_MAIN,
    SUCCESS_LIGHT,
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
                                bgColor={SUCCESS_LIGHT}
                                defaultColor={SUCCESS_MAIN}
                                completionValue={67}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ProjectCard
                                bgColor={WARNING_LIGHT}
                                defaultColor={WARNING_MAIN}
                                completionValue={32}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <ProjectCard
                                bgColor={INFO_LIGHT}
                                defaultColor={INFO_MAIN}
                                completionValue={39}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
