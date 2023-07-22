import { CheckIcon } from "@heroicons/react/24/outline";

interface ModalProps {
    modalOpen: boolean;
    handleClose: () => void;
}

function Modal({ modalOpen, handleClose }: ModalProps) {
    if (!modalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-gray-200 p-6 rounded-md">
                <button
                    className="px-4 py-2 rounded-md text-3xl text-color-10 hover:bg-color-3 transition duration-300 ease-in-out transform hover:scale-95 flex justify-between items-center"
                    onClick={handleClose}
                >
                    <span>Register</span>
                    <CheckIcon className="h-8 w-8 text-color-10" />
                </button>
            </div>
        </div>
    );
}

export default Modal;
