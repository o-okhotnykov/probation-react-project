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
        width: '100%',
        '& div': {
            padding: '10.5px 14px',
        },
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
        justifyContent: 'space-evenly',
    },
});
