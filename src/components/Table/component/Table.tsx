/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useSortBy, useTable } from 'react-table';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStyles } from './styles';

export const TableComponent = ({ columns, data }: any) => {
    const classes = useStyles();

    const { getTableProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
    );

    return (
        <Table {...getTableProps()} className={classes.table}>
            <TableHead>
                {headerGroups.map((headerGroup) => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <TableCell
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                className={classes.tableHead}
                            >
                                {column.render('Header')}

                                {column.isSorted ? (
                                    column.isSortedDesc ? (
                                        <ArrowDropDownIcon />
                                    ) : (
                                        <ArrowDropUpIcon />
                                    )
                                ) : (
                                    ''
                                )}
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
