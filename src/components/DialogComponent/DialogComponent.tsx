import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

interface DialogProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: any;
}

export const DialogComponent: React.FC<DialogProps> = ({
    children,
    isOpen,
    onClose,
}: DialogProps) => {
    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </Dialog>
        </div>
    );
};
