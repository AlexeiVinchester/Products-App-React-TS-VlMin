import React, { createContext, useState } from "react";

interface IModalContext {
    modal: boolean;
    openModal: () => void;
    closeModal: () => void
}

const ModalContext = createContext<IModalContext>({
    modal: false,
    openModal: () => {},
    closeModal: () => {}
});

interface IModalStateProps {
    children: React.ReactNode
}

const ModalState = ({children}: IModalStateProps) => {

    const [modal, setModal] = useState(false);
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <ModalContext.Provider value={{modal, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    );
}

export { ModalState, ModalContext};

