import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    register: {},
    table: {
        borderCollapse: 'separate',
        borderSpacing: '0 20px',
    },
    tableHead: {
        fontSize: '1em',
        textAlign: 'center',
        borderBottom: 0,
    },
    tableRow: {},
    tableRowClicked: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
    tableCell: {
        textAlign: 'center',
        fontSize: '1em',
        borderTop: `1px solid ${theme.palette.warning.dark}`,
        '&:nth-child(1)': {
            borderRadius: '10px 0 0 10px',
            borderLeft: `1px solid  ${theme.palette.warning.dark}`,
        },
        '&:nth-last-child(1)': {
            borderRadius: '0 10px 10px 0',
            borderRight: `1px solid  ${theme.palette.warning.dark}`,
        },
    },
}));
