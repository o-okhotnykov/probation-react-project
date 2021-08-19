import { makeStyles } from '@material-ui/core/styles';
import { BORDER_DEFAULT } from 'constants/colors';

export const useStyles = makeStyles(() => ({
    chartContent: {
        border: `1px solid ${BORDER_DEFAULT}`,
        alignItems: 'center',
        display: 'flex',
    },
    headerText: {
        textAlign: 'left',
        padding: '20px 0',
    },
}));
