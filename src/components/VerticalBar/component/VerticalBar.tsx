import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { moviesDataSelector } from 'store/movie-store';
import { backgroundColor, borderColor, options } from './constant';
import './VerticalBar.scss';

export const VerticalBar: React.FC = () => {
    const moviesData = useSelector(moviesDataSelector);

    const ratings = useMemo(
        () =>
            moviesData.map(({ imdbRating }) => {
                return imdbRating;
            }),
        [moviesData],
    );
    const titles = useMemo(
        () =>
            moviesData.map(({ originalTitle }) => {
                return originalTitle;
            }),
        [moviesData],
    );

    const data = {
        labels: titles,
        datasets: [
            {
                label: 'imdb rating',
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
