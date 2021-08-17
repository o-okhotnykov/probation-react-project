import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, CardMedia, Typography } from '@material-ui/core';
import { useStyles } from './styles';

type ProjectCardProps = {
    bgColor: string;
    color: string;
    completionValue: number;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ bgColor, color, completionValue }) => {
    const classes = useStyles();

    return (
        <Box className={classes.cardContainer} color={color} bgcolor={bgColor}>
            <CardMedia
                className={classes.logoContainer}
                image="https://via.placeholder.com/35"
                title="project-logo"
            />
            <Box className={classes.cardTeam}>
                <Typography variant="body2">Team Members</Typography>
                <Box>
                    <CardMedia
                        className={classes.logoContainer}
                        image="https://via.placeholder.com/35"
                        title="project-logo"
                    />
                </Box>
            </Box>

            <Box paddingTop="20px">
                <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                    <Typography variant="body2">Project Completion</Typography>
                    <Typography variant="body2">{`${completionValue}%`}</Typography>
                </Box>
                <LinearProgress variant="determinate" value={completionValue} />
            </Box>
        </Box>
    );
};
