import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';
import { Modal } from './Modal.tsx';

type ModalContextType = {
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [content, setContent] = useState<ReactNode | null>(null);

    const openModal = (modalContent: ReactNode) => {
        setContent(modalContent);
    };

    const closeModal = () => {
        setContent(null);
    };

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}

            {content && (
                <Modal onClose={closeModal}>
                    {content}
                </Modal>
            )}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error('useModal must be used within ModalProvider');
    return context;
};
