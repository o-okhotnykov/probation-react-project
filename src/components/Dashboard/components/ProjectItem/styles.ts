import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {},
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    progress: {
        textAlign: 'center',
        color: '#ff9c46',
        backgroundColor: 'rgb(255 243 233)',
    },
    open: {
        textAlign: 'center',
        color: 'rgb(98 128 255)',
        backgroundColor: 'rgb(242 245 255)',
    },
    done: {
        textAlign: 'center',
        color: '#5cb85c',
        backgroundColor: '#bee3be',
    },
    action: {
        textAlign: 'center',
    },
}));
