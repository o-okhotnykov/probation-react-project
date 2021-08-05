import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { projectsDataSelector } from 'store/project-store';
import { backgroundColor, borderColor, options } from './constant';
import './VerticalBar.scss';

export const VerticalBar: React.FC = () => {
    const projectData = useSelector(projectsDataSelector);
    const ratings = useMemo(
        () =>
            projectData.map(({ value }) => {
                return Number(value);
            }),
        [projectData],
    );
    const titles = useMemo(
        () =>
            projectData.map(({ title }) => {
                return title;
            }),
        [projectData],
    );

    const data = {
        labels: titles,
        datasets: [
            {
                label: 'Project price',
                data: ratings,
                backgroundColor,
                borderColor,
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="bar-container">
            <Bar data={data} options={options} />
        </div>
    );
};
