import React from "react";

export interface IModalWindowProps {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
}

