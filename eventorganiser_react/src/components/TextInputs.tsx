import { useRef, useEffect } from "react";
import {CheckIcon} from "@heroicons/react/24/outline";

interface TextInputsProps {
    handleClose: () => void;
}

function TextInputs({ handleClose }: TextInputsProps) {
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    useEffect(() => {
        if (inputRefs.current.length === 0) return;

        const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
                const targetName = event.currentTarget.name;
                const currentIndex = inputRefs.current.findIndex(
                    (inputRef) => inputRef?.name === targetName
                );

                if (currentIndex >= 0 && currentIndex < inputRefs.current.length - 1) {
                    inputRefs.current[currentIndex + 1]?.focus();
                }
            }
        };

        inputRefs.current.forEach((inputRef) => {
            if (inputRef) {
                // @ts-ignore
                inputRef.addEventListener("keydown", handleKeyDown);
            }
        });

        return () => {
            inputRefs.current.forEach((inputRef) => {
                if (inputRef) {
                    // @ts-ignore
                    inputRef.removeEventListener("keydown", handleKeyDown);
                }
            });
        };
    }, []);

    const handleClick = () => {
        const formData = {
            name: inputRefs.current[0]?.value,
            surname: inputRefs.current[1]?.value,
            email: inputRefs.current[2]?.value,
            password: inputRefs.current[3]?.value,
            description: inputRefs.current[4]?.value,
        };

        fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                handleClose();
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    };

    return (
        <div className="flex flex-col">
            {["name", "surname", "email", "password", "description"].map((fieldName, index) => (
                <input
                    key={fieldName}
                    type={fieldName === "password" ? "password" : "text"}
                    name={fieldName}
                    placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                    className="px-2 py-2 rounded-md border border-color-10 mt-2 text-color-10 focus:ring-2 focus:ring-color-8 focus:outline-none"
                    ref={(el) => (inputRefs.current[index] = el)}
                />
            ))}
            <div className="flex justify-center mt-4">
                <button
                    className="px-4 py-2 rounded-md text-3xl text-color-10 font-bold hover:text-color-3 hover:bg-color-10
                    transition duration-300 ease-in-out transform hover:scale-95 flex justify-center"
                    onClick={handleClick}
                >
                    <span>Register</span>
                    <CheckIcon className="h-8 w-8 ml-4 font-bold" />
                </button>
            </div>
        </div>
    );
}

export default TextInputs;
