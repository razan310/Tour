// Modal.tsx

import { FC, ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <button onClick={onClose} className="text-end w-full mt-4 text-sm text-gray-500">X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
