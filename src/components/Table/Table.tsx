import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Column, Row, useSortBy, useTable } from 'react-table';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import shortid from 'shortid';
import { IUserData } from 'types/api/auth';
import { Project } from 'types/api/project';
import { useHistory } from 'react-router-dom';
import { ROUTE_PATH } from 'constants/index';
import { useStyles } from './styles';

interface IDataTableProps<T> {
    columns: Column[];
    data: T[];
    isDetailedPage: boolean;
}

export const TableComponent: React.FC<IDataTableProps<IUserData | Project>> = ({
    columns,
    data,
    isDetailedPage,
}) => {
    const classes = useStyles();
    const history = useHistory();

    const { getTableProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data,
        },

        useSortBy,
    );

    const handleRedirect = (row: Row<{ id?: number }>) => {
        if (isDetailedPage) {
            const { id } = row.original;
            history.push(`${ROUTE_PATH.projects}/${id}`);
        }
    };

    return (
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
                                <Box
                                    display="flex"
                                    minHeight="25px"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {column.render('Header')}

                                    {column.isSorted &&
                                        (column.isSortedDesc ? (
                                            <ArrowDropDownIcon />
                                        ) : (
                                            <ArrowDropUpIcon />
                                        ))}
                                </Box>
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
                            className={isDetailedPage ? classes.tableRowClicked : classes.tableRow}
                            key={shortid.generate()}
                            onClick={() => handleRedirect(row)}
                        >
                            {row.cells.map((cell) => {
                                return (
                                    <TableCell
                                        className={classes.tableCell}
                                        {...cell.getCellProps()}
                                        key={shortid.generate()}
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
