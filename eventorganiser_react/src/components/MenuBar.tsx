import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";

const MenuBar: React.FC = () => {
    const handleClick = () => {
        console.log("Kliknięto przycisk");
    };

    return (
        <div className="flex items-center h-12 px-4 bg-color-3">
            <button
                className="p-1 rounded-md hover:bg-gray-200 focus:outline-none"
                onClick={handleClick}
            >
                <Bars3Icon className="h-6 w-6 text-color-10" />
            </button>
        </div>
    );
};

export default MenuBar;
