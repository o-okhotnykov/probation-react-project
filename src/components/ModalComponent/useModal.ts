import { useState } from 'react';

export const useModal = () => {
    const [isOpen, onOpenModal] = useState(false);
    const [isClose, onCloseModal] = useState(false);

    const openModal = () => {
        onOpenModal(true);
    };

    const closeModal = () => {
        onCloseModal(true);
        onOpenModal(false);
    };

    return { isOpen, isClose, openModal, closeModal };
};
