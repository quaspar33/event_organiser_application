import ImageSlider from "./Images.tsx";
import TextSlider from "./TextSlider.tsx";
import { StopIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import MenuBar from "./MenuBar.tsx";

function BackgroundSlider() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % ImageSlider.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const renderSlide = (slide : any, index : any) => {
        const isActive = index === currentSlideIndex;

        return (
            <div
                key={index}
                className={`w-64 h-40 bg-center bg-cover duration-1000 -my-12 mt-28 ml-10 rounded-md ${
                    isActive ? "opacity-100 shadow-neutral-900 shadow-lg" : "opacity-50"
                }`}
                style={{ backgroundImage: `url(${slide.url})` }}
            />
        );
    };

    const renderSlideText = (_ : any, index : any) => {
        const isActive = index === currentSlideIndex;

        return (
            <div
                key={index}
                className={`transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                style={{
                    position: "absolute", top: 1.5, right: 1.5
                }}
            >
                <h1 className="text-color-3 text-7xl font-bold mb-12 relative z-10 whitespace-nowrap">{TextSlider[index].title}</h1>
                <p className="text-color-3 text-4xl mb-6 relative z-10">{TextSlider[index].body}</p>
                <div className="flex text-color-3 justify-center mt-10">
                    {ImageSlider.map((_, i) => (
                        <StopIcon
                            key={i}
                            className={`h-6 w-6 mr-2 font-bold transition-opacity ${i === index ? "opacity-100" : "opacity-50"}`}
                            style={i === index ? { transform: "scale(1.2)" } : undefined}
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="relative h-full w-full">
            <div className="flex flex-col absolute top-1.5 left-1.5">
                {ImageSlider.map(renderSlide)}
            </div>
            <div className="absolute flex flex-col text-center top-1.5 right-1.5 mt-80 mr-64">
                {TextSlider.map(renderSlideText)}
            </div>
            <div className="h-full">
                <MenuBar />
            </div>
        </div>
    );
}

export default BackgroundSlider;
