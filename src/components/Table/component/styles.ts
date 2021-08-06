import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    table: {
        borderCollapse: 'separate',
        borderSpacing: '0 20px',
    },
    tableHead: {
        textAlign: 'center',
        fontWeight: 900,
    },
    tableRow: {
        border: '1px solid red',
    },
    tableData: {},
}));
