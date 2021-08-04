import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import './ProjectCard.scss';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

type ProjectCardProps = {
    bgColor: string;
    defaultColor: string;
    completionValue: number;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
    bgColor,
    defaultColor,
    completionValue,
}) => {
    const classes = useStyles();
    return (
        <div className="project-card" style={{ backgroundColor: bgColor, color: defaultColor }}>
            <div className="project-logo-container">
                <img src="https://via.placeholder.com/35" alt="project-logo" />
            </div>
            <div className="project-members-container">
                <Typography className={classes.caption}>Team Members</Typography>
                <div className="member-photos">
                    <img
                        src="https://via.placeholder.com/35"
                        alt="member-logo"
                        className="member-logo"
                    />
                </div>
            </div>
            <div className="project-completion-container">
                <div className="completion-headers">
                    <Typography className={classes.caption}>Project Completion</Typography>
                    <Typography className={classes.caption}>{`${completionValue}%`}</Typography>
                </div>
                <LinearProgress variant="determinate" value={completionValue} />
            </div>
        </div>
    );
};
