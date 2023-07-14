import ImageSlider from "./Images.tsx";
import { useState, useEffect } from "react";
import MenuBar from "./MenuBar.tsx";

function BackgroundSlider() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % ImageSlider.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-full w-full">
            {ImageSlider.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${
                        index === currentSlideIndex ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundImage: `url(${slide.url})` }}
                ></div>
            ))}
            <div className="h-full">
                {
                    <MenuBar/>
                }
            </div>
        </div>
    );
}

export default BackgroundSlider;
