import React from 'react';

export const ProjectItem: React.FC = ({ ...props }) => {
    return (
        <div className="project-item">
            <div className="project-title" />
            <div className="project-created" />
            <div className="project-reported" />
            <div className="project-due" />
            <div className="project-stats" />
            <div className="project-action" />
        </div>
    );
};
