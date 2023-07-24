import {CheckIcon} from "@heroicons/react/24/outline";

interface LoginWindowProps {
    handleLoginWindowClose: () => void;
}

function LoginWindow({ handleLoginWindowClose }: LoginWindowProps) {
    return (
        <button
            className="px-4 py-2 rounded-md text-3xl text-color-10 hover:bg-color-3 transition duration-300 ease-in-out transform hover:scale-95 flex justify-between items-center"
            onClick={handleLoginWindowClose}
        >
            <span>Register</span>
            <CheckIcon className="h-8 w-8 text-color-10" />
        </button>
    );
}

export default LoginWindow;
