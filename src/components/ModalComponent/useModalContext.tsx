import { createContext, useContext } from 'react';

interface IUseModalContext {
    isOpen: boolean;
    handleToggle: () => void;
}

export const ModalContext = createContext<IUseModalContext | undefined>(undefined);

export const ModalProvider: React.FC<IUseModalContext> = ({ children, isOpen, handleToggle }) => {
    return (
        <ModalContext.Provider value={{ isOpen, handleToggle }}>{children}</ModalContext.Provider>
    );
};

export const useModalContext = (): IUseModalContext => {
    const context = useContext(ModalContext);

    if (typeof context === 'undefined') {
        throw new Error('useModalContext outside of ModalProvider');
    }

    return context;
};
