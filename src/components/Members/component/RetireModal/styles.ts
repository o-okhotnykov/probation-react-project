import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    btn: {
        fontWeight: 900,
        border: '1px solid #d5e3d6',
    },
    btnCancel: {
        backgroundColor: '#fff',
        color: '#ec4e6e',
    },
    btnConfirm: {
        backgroundColor: '#ec4e6e',
        color: '#fff',
    },
    action: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
