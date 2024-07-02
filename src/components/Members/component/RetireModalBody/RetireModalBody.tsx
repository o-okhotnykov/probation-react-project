import { Button, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import { useRemoveUserMutation } from 'store/userApi';
import { useStyles } from './styles';
import { useModalContext } from 'components/ModalComponent/useModalContext';

interface RetireModalBodyProps {
    id: number;
}

export const RetireModalBody: React.FC<RetireModalBodyProps> = ({ id }) => {
    const classes = useStyles();
    const { handleToggle } = useModalContext();
    const [removeUser] = useRemoveUserMutation();

    const handleClick = () => {
        removeUser({ id });
    };

    return (
        <>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" color="primary">
                    Are you sure you want to retire this user?
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.action}>
                <Button variant="contained" onClick={handleToggle} color="secondary" autoFocus>
                    Close
                </Button>
                <Button variant="contained" onClick={handleClick} color="primary" autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </>
    );
};
