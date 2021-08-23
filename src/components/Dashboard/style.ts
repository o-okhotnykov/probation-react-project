import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    sideSection: {
        borderRight: `1px solid ${theme.palette.warning.dark}`,
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 0',
    },
}));
