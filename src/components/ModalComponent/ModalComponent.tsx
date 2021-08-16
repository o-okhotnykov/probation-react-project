import React, { ReactChild } from 'react';
import Modal from '@material-ui/core/Dialog';

interface ModalComponentProps {
    children: ReactChild;
    open: boolean;
    close: () => void;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({ children, open, close }) => {
    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {children}
        </Modal>
    );
};
