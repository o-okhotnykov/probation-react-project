import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    btnUpload: {
        margin: '11% 0',
    },
    action: {
        padding: '25px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    date: {
        marginTop: 10,
        '& input': {
            padding: '10.5px 14px',
        },
    },
});
