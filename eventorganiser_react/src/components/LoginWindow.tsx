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
                <TextInputs handleClose={handleLoginWindowClose}/>
            </div>
        </div>
    );
}

export default LoginWindow;
