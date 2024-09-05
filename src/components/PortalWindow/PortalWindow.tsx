import React from "react";
import { createPortal } from "react-dom"

interface IPortalWindowProps {
    children: React.ReactNode;
    modalState: boolean;
    onClose: () => void
}

const PortalWindow = ({ children, modalState, onClose }: IPortalWindowProps) => {
    if (!modalState) return null;
    return createPortal(
        <>
            <div >
                <div
                    className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"

                />
                <div
                    className="w-[500px] p-5 rounded bg-white fixed top-10 left-1/2 -translate-x-1/2"
                >
                    <h1 className="text-2xl text-center mb-2">Portal Window</h1>
                    {children}
                    <button
                        className="py-2 px-4 border bg-yellow-400 hover:text-white"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>

            </div>
        </>, document.body
    );
};

export { PortalWindow };


