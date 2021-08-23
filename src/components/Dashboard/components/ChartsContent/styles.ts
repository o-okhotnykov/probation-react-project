import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    chartContent: {
        border: `1px solid ${theme.palette.warning.dark}`,
        alignItems: 'center',
        display: 'flex',
    },
    headerText: {
        textAlign: 'left',
        padding: '20px 0',
    },
}));
