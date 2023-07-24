import { CheckIcon } from "@heroicons/react/24/outline";
import TextInputs from "./TextInputs.tsx";

interface LoginWindowProps {
    handleLoginWindowClose: () => void;
}

function LoginWindow({ handleLoginWindowClose }: LoginWindowProps) {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="flex items-center text-color-10 text-3xl font-bold mt-2 mb-4">
                <a>
                    Insert your data to register!
                </a>
            </div>
            <div className="w-full">
                <TextInputs />
            </div>
            <div className="flex justify-center mt-4">
                <button
                    className="px-4 py-2 rounded-md text-3xl text-color-10 font-bold hover:text-color-3 hover:bg-color-10 transition duration-300 ease-in-out transform hover:scale-95 flex justify-center"
                    onClick={handleLoginWindowClose}
                >
                    <span>Register</span>
                    <CheckIcon className="h-8 w-8 ml-4 font-bold" />
                </button>
            </div>
        </div>
    );
}

export default LoginWindow;
