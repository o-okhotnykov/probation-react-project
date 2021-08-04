/* eslint-disable react/destructuring-assignment */
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import './ProjectCard.scss';

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
    return (
        <div className="project-card" style={{ backgroundColor: bgColor, color: defaultColor }}>
            <div className="project-logo-container">
                <img src="https://via.placeholder.com/35" alt="project-logo" />
            </div>
            <div className="project-members-container">
                <p className="card-caption">Team Members</p>
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
                    <p className="card-caption">Project Completion</p>
                    <p className="card-caption">{`${completionValue}%`}</p>
                </div>
                <LinearProgress variant="determinate" value={completionValue} />
            </div>
        </div>
    );
};
