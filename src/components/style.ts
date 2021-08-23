import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    sideSection: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        paddingTop: 15,
        borderRight: `1px solid ${theme.palette.warning.dark}`,
    },
}));
