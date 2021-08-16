import React, { ReactChild } from 'react';
import Modal from '@material-ui/core/Dialog';
import { Portal } from '@material-ui/core';

interface ModalComponentProps {
    children: ReactChild;
    open: boolean;
    close: any;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({ children, open, close }) => {
    const container = React.useRef(null);
    return (
        <Portal container={container.current}>
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
