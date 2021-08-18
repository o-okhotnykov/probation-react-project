import { makeStyles } from '@material-ui/core/styles';
import { BORDER_DEFAULT } from 'constants/colors';

export const useStyles = makeStyles(() => ({
    register: {},
    table: {
        borderCollapse: 'separate',
        borderSpacing: '0 20px',
    },
    tableHead: {
        textAlign: 'center',
        fontWeight: 900,
        borderBottom: 0,
    },
    tableRow: {
        border: `1px solid ${BORDER_DEFAULT}`,
    },

    tableData: {
        textAlign: 'center',
        fontWeight: 500,
    },
}));
