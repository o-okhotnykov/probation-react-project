import React, { useEffect } from 'react';
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { moviesDataSelector, getMoviesAsync } from 'store/movie-store';
import { useStyles, StyledTableCell, StyledTableRow } from './style';
import './TableComponent.scss';

export const TableComponent: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const moviesData = useSelector(moviesDataSelector);

    useEffect(() => {
        dispatch(getMoviesAsync());
    }, [dispatch]);

    return (
        <div className="table-container">
            <TableContainer>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Year</StyledTableCell>
                            <StyledTableCell align="right">Rating</StyledTableCell>
                            <StyledTableCell align="right">Actors</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {moviesData.map((row) => {
                            return (
                                <StyledTableRow key={row.title}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.originalTitle}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.year}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        {row.imdbRating}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {row.actors.join(', ')}
                                    </StyledTableCell>
                                </StyledTableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
