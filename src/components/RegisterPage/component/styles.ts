import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    formContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
        '& form': {
            width: '60%',
        },
    },
    formContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '25px 5px',
    },
    card: {
        boxShadow: 'none',
    },
    media: {
        margin: '10px auto',
        height: '15vh',
        width: '15vh',
    },
    text: {
        padding: '15px 0px',
    },
    link: {
        textDecoration: 'none',
        textTransform: 'uppercase',
    },
}));
