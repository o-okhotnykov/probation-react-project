import { makeStyles } from '@material-ui/core/styles';
import { BORDER_DEFAULT } from 'constants/colors';

export const useStyles = makeStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${BORDER_DEFAULT}`,
    },
});
