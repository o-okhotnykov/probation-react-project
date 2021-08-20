import { makeStyles } from '@material-ui/core/styles';
import { BORDER_DEFAULT } from 'constants/colors';

export const useStyles = makeStyles(() => ({
    sideSection: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 15,
        borderRight: `1px solid ${BORDER_DEFAULT}`,
    },
}));
