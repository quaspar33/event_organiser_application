import LoginWindow from "./LoginWindow.tsx";

interface ModalProps {
    modalOpen: boolean;
    handleClose: () => void;
}

function Modal({ modalOpen, handleClose }: ModalProps) {
    if (!modalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-gray-200 p-6 rounded-md">
                <LoginWindow handleLoginWindowClose={handleClose}/>
            </div>
        </div>
    );
}

export default Modal;
