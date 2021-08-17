import { makeStyles } from '@material-ui/core/styles';
import { DEFAULT_LIGHT, PRIMARY_MAIN, PRIMARY_LIGHT } from 'constants/colors';

export const useStyles = makeStyles({
    btn: {
        color: DEFAULT_LIGHT,
        backgroundColor: PRIMARY_MAIN,
        padding: '5px 25px',
        fontWeight: 900,
        '&:hover': {
            backgroundColor: PRIMARY_LIGHT,
        },
        '&:disabled': {
            backgroundColor: PRIMARY_LIGHT,
        },
    },
    btnUpload: {
        margin: '11% 0',
    },
    btnConfirm: {
        backgroundColor: '#ec4e6e',
        color: DEFAULT_LIGHT,
    },
    action: {
        paddingTop: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    formPart: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    userImg: {
        width: 100,
        height: 100,
        marginBottom: 25,
        borderRadius: '50%',
    },
});
