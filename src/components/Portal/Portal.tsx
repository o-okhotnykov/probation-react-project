/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

export const Portal: React.FC = ({ children }) => {
    let modalRoot: HTMLElement | null = document.getElementById('modal');
    if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.setAttribute('id', 'modal');
        document.body.appendChild(modalRoot);
    }

    const modalElement: HTMLElement = document.createElement('div');

    // @ts-ignore
    useEffect(() => {
        modalRoot!.appendChild(modalElement);
        return () => modalRoot!.removeChild(modalElement);
    });

    return createPortal(children, modalElement);
};
