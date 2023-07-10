import { Bars3Icon, ArrowLeftIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Vite from "../assets/vite.svg";
import ReactImg from "../assets/react.svg";
import TypeScript from "../assets/typescript.svg";

const MenuBar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const handleTechnologyClick = (technology: string) => {
        switch (technology) {
            case 'React':
                window.open("https://pl.react.dev/blog/2023/03/16/introducing-react-dev");
                break;
            case 'TypeScript':
                window.open("https://www.typescriptlang.org/");
                break;
            case 'Vite':
                window.open("https://vitejs.dev/");
                break;
            default:
                break;
        }
    };

    return (
        <div className="relative">
            <div className="flex items-center h-20 px-4 bg-color-3">
                {open ? (
                    <button
                        className="p-2 rounded-md hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
                        onClick={handleClick}
                    >
                        <ArrowLeftIcon className="h-8 w-8 text-color-10" />
                    </button>
                ) : (
                    <button
                        className="p-2 rounded-md hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
                        onClick={handleClick}
                    >
                        <Bars3Icon className="h-8 w-8 text-color-10" />
                    </button>
                )}
                <span className="ml-7 text-color-10 font-dmsans font-bold text-4xl">
          Event Organiser
        </span>
            </div>
            <div
                className={`absolute top-20 left-0 h-screen w-60 bg-gray-200 transition-all duration-500 ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div
                    className="py-1 flex flex-col items-left"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                >
                    <a
                        className="px-4 py-2 rounded-md text-2xl text-color-10 hover:bg-color-3 transition duration-300 ease-in-out transform hover:scale-95 flex justify-between items-center"
                    >
                        <span>Log In</span>
                        <ArrowTopRightOnSquareIcon className="h-8 w-8 text-color-10" />
                    </a>

                    <a
                        className="px-4 py-2 rounded-md text-2xl text-color-10 hover:bg-color-3 transition duration-300 ease-in-out transform hover:scale-95 flex justify-between items-center"
                    >
                        <span>Register</span>
                        <ArrowTopRightOnSquareIcon className="h-8 w-8 text-color-10" />
                    </a>
                    <div className="flex flex-col items-center mt-10">
                        <div
                            className="w-36 h-32 rounded-md mb-16 relative bg-cover bg-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
                            style={{ backgroundImage: `url(${ReactImg})` }}
                            onClick={() => handleTechnologyClick("React")}
                        ></div>
                        <div
                            className="w-32 h-32 mb-16 rounded-md relative bg-cover bg-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
                            style={{ backgroundImage: `url(${TypeScript})` }}
                            onClick={() => handleTechnologyClick("TypeScript")}
                        ></div>
                        <div
                            className="w-32 h-32 rounded-md relative bg-cover bg-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
                            style={{ backgroundImage: `url(${Vite})` }}
                            onClick={() => handleTechnologyClick("Vite")}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
