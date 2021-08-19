import { makeStyles } from '@material-ui/core/styles';
import { BORDER_DEFAULT } from 'constants/colors';

export const useStyles = makeStyles(() => ({
    sideSection: {
        borderRight: `1px solid ${BORDER_DEFAULT}`,
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 0',
    },
}));
