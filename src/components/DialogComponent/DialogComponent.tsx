import React from 'react';
import Dialog from '@material-ui/core/Dialog';

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
                {children}
            </Dialog>
        </div>
    );
};
