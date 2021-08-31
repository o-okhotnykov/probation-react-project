import React from 'react';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import project1Logo from 'assets/project1-logo.png';
import project2Logo from 'assets/project2-logo.png';
import project3Logo from 'assets/project3-logo.png';
import { isAdminSelector, isContributorSelector } from 'store/user-slice';
import { useSelector } from 'react-redux';
import { ProjectCard } from '../ProjectCard';
import { useStyles } from './styles';

export const AddProject: React.FC = () => {
    const classes = useStyles();
    const isAdmin = useSelector(isAdminSelector);
    const isContributor = useSelector(isContributorSelector);

    return (
        <Grid container spacing={1} className={classes.container}>
            <Grid item />
            <Grid item>
                {(isAdmin || isContributor) && (
                    <Box className={classes.addProject}>
                        <Typography variant="h1">Add Project</Typography>
                        <Typography variant="subtitle1">
                            Create a new project on ProManage. Collaborate your work. Directory to
                            your local projects
                        </Typography>

                        <Button color="primary" className={classes.btn}>
                            <AddCircleIcon className={classes.icon} />
                            CREATE New Project
                        </Button>
                    </Box>
                )}
            </Grid>
            <Grid item />
            <Grid item>
                <Box display="flex" justifyContent="space-between">
                    <Box padding="0 25px">
                        <ProjectCard
                            img={project1Logo}
                            bgColor="success.light"
                            color="success.main"
                            completionValue={67}
                        />
                    </Box>
                    <Box padding="0 25px">
                        <ProjectCard
                            img={project2Logo}
                            bgColor="warning.light"
                            color="warning.main"
                            completionValue={32}
                        />
                    </Box>
                    <Box padding="0 25px">
                        <ProjectCard
                            img={project3Logo}
                            bgColor="info.light"
                            color="info.main"
                            completionValue={67}
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};
