import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { moviesDataSelector } from 'store/movie-store';
import './VerticalBar.scss';

export const VerticalBar: React.FC = () => {
    const moviesData = useSelector(moviesDataSelector);
    const ratings = moviesData.map(({ imdbRating }) => {
        return imdbRating;
    });
    const titles = moviesData.map(({ originalTitle }) => {
        return originalTitle;
    });
    const data = {
        labels: titles,
        datasets: [
            {
                label: 'imdb rating',
                data: ratings,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <div className="bar-container">
            <Bar data={data} options={options} />
        </div>
    );
};
