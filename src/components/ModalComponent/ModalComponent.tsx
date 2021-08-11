import React, { ReactChild } from 'react';
import Modal from '@material-ui/core/Dialog';
import { Portal } from 'components/Portal/Portal';

interface ModalComponentProps {
    children: ReactChild;
    open: boolean;
    close: any;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({ children, open, close }) => {
    return (
        <Portal>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {children}
            </Modal>
        </Portal>
    );
};
