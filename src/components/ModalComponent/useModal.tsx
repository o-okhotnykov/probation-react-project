import { Box, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { ModalProvider } from './useModalContext';
import { ModalComponent } from './ModalComponent';
import { useStyles } from './styles';

interface IUseModal {
    title: string;
    body: JSX.Element | null;
}

interface IUseModalReturn {
    Modal: () => JSX.Element;
    toggleModal: () => void;
}

export const useModal = ({ title, body }: IUseModal): IUseModalReturn => {
    const [open, setOpen] = useState(false);
    const toggleModal = () => setOpen(!open);

    const classes = useStyles();

    const Modal = () => (
        <ModalProvider isOpen={open} handleToggle={toggleModal}>
            <ModalComponent open={open} close={toggleModal}>
                <Box>
                    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                    <DialogContent>{body}</DialogContent>
                    <DialogActions className={classes.action} />
                </Box>
            </ModalComponent>
        </ModalProvider>
    );

    return { Modal, toggleModal };
};
