import React from 'react';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import project1Logo from 'assets/project1-logo.png';
import project2Logo from 'assets/project2-logo.png';
import project3Logo from 'assets/project3-logo.png';
import { ProjectCard } from '../ProjectCard';
import { useStyles } from './styles';

export const AddProject: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={1} className={classes.container}>
            <Grid item xs={1} />
            <Grid item xs={3}>
                <Box className={classes.addProject}>
                    <Typography variant="h2">Add Project</Typography>
                    <Typography variant="subtitle1">
                        Create a new project on ProManage. Collaborate your work. Directory to your
                        local projects
                    </Typography>
                    <Typography>
                        <Button color="primary" className={classes.btn}>
                            <AddCircleIcon className={classes.icon} />
                            CREATE New Project
                        </Button>
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={2} />
            <Grid item xs={6}>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <ProjectCard
                            img={project1Logo}
                            bgColor="success.light"
                            color="success.main"
                            completionValue={67}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <ProjectCard
                            img={project2Logo}
                            bgColor="warning.light"
                            color="warning.main"
                            completionValue={32}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <ProjectCard
                            img={project3Logo}
                            bgColor="info.light"
                            color="info.main"
                            completionValue={67}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
