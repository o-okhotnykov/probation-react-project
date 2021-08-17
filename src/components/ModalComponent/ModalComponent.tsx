import React, { ReactChild } from 'react';
import Modal from '@material-ui/core/Dialog';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

interface ModalComponentProps {
    children: ReactChild;
    open: boolean;
    close: () => void;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({ children, open, close }) => {
    return (
        <ThemeProvider theme={theme}>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {children}
            </Modal>
        </ThemeProvider>
    );
};
