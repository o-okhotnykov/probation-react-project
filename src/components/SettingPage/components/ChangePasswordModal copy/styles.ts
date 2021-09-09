import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    btnUpload: {
        margin: '11% 0',
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
    select: {
        marginTop: '40px',
        padding: '0px',
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
    date: {
        marginTop: 10,
        '& input': {
            padding: '10.5px 14px',
        },
    },
});
