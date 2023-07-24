import { useEffect, useRef } from "react";
import LoginWindow from "./LoginWindow.tsx";

interface ModalProps {
    modalOpen: boolean;
    handleClose: () => void;
}

function Modal({ modalOpen, handleClose }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleClose();
            }
        };

        if (modalOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [modalOpen, handleClose]);

    if (!modalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
            <div ref={modalRef} className="bg-gray-200 p-6 rounded-md">
                <LoginWindow handleLoginWindowClose={handleClose} />
            </div>
        </div>
    );
}

export default Modal;
