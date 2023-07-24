import { useRef, useEffect } from "react";

function TextInputs() {
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
        </div>
    );
}

export default TextInputs;
