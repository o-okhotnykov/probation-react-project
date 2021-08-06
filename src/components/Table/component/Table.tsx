/* eslint-disable react/jsx-key */
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useTable } from 'react-table';
import { useStyles } from './styles';

export const TableComponent = ({ columns, data }: any) => {
    const classes = useStyles();

    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <Table {...getTableProps()} className={classes.table}>
            <TableHead>
                {headerGroups.map((headerGroup) => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <TableCell {...column.getHeaderProps()} className={classes.tableHead}>
                                {column.render('Header')}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <TableRow {...row.getRowProps()} className={classes.tableRow}>
                            {row.cells.map((cell) => {
                                return (
                                    <TableCell
                                        {...cell.getCellProps()}
                                        className={classes.tableData}
                                    >
                                        {cell.render('Cell')}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};
