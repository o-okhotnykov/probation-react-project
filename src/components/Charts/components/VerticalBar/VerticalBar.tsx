import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { projectsDataSelector } from 'store/project-slice';
import { backgroundColor, borderColor } from './constant';

export const VerticalBar: React.FC = () => {
    const projectData = useSelector(projectsDataSelector);
    const ratings = useMemo(
        () =>
            projectData.map(({ views }) => {
                return Number(views);
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

    return <Bar data={data} />;
};
