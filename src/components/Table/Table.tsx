import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { useSortBy, useTable } from 'react-table';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import shortid from 'shortid';
import { useStyles } from './styles';

interface IDataTableProps {
    columns: any;
    data: any;
}

export const TableComponent: React.FC<IDataTableProps> = ({ columns, data }) => {
    const classes = useStyles();
    const { getTableProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
    );

    return (
        <div className="table-container">
            <Table {...getTableProps()} className={classes.table}>
                <TableHead>
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()} key={shortid.generate()}>
                            {headerGroup.headers.map((column) => (
                                <TableCell
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    key={shortid.generate()}
                                    className={classes.tableHead}
                                >
                                    {column.render('Header')}

                                    {column.isSorted &&
                                        (column.isSortedDesc ? (
                                            <ArrowDropDownIcon />
                                        ) : (
                                            <ArrowDropUpIcon />
                                        ))}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <TableRow
                                {...row.getRowProps()}
                                className={classes.tableRow}
                                key={shortid.generate()}
                            >
                                {row.cells.map((cell) => {
                                    return (
                                        <TableCell
                                            {...cell.getCellProps()}
                                            key={shortid.generate()}
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
        </div>
    );
};
