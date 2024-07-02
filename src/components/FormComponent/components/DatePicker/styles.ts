import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    text: {
        fontWeight: 900,

        '&:placeholder': {
            fontWeight: 900,
        },
    },
});
