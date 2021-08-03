/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { moviesDataSelector, getMoviesAsync } from 'store/movie-store';
import { useStyles, StyledTableCell, StyledTableRow } from './style';
import './ProjectList.scss';

export const MovieList: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const moviesData = useSelector(moviesDataSelector);

    useEffect(() => {
        dispatch(getMoviesAsync());
    }, [dispatch]);

    return <div className="project-list">{}</div>;
};
