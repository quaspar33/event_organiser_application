import ImageSlider from "./Images.tsx";
import { useState, useEffect } from "react";
import MenuBar from "./MenuBar.tsx";
import { StopIcon } from "@heroicons/react/24/outline";

function BackgroundSlider() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevSlideIndex) => (prevSlideIndex + 1) % ImageSlider.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = ({ index }: { index: any }) => {
        setCurrentSlideIndex(index);
    };

    return (
        <div className="relative h-full w-full">
            {ImageSlider.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${
                        index === currentSlideIndex ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                        backgroundImage: `url(${slide.url})`
                    }}
                >
                <div
                        className={`h-full flex flex-col justify-center items-left ml-72 text-white ${
                            index === currentSlideIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                    <h1 className="text-6xl text-color-10 font-bold">{slide.title}</h1>
                    <p className="text-3xl text-color-10 font-bold">{slide.body}</p>
                    <div className="flex mt-4">
                        {ImageSlider.map((_, i) => (
                            <StopIcon
                                key={i}
                                className={`text-color-10 h-4 w-4 cursor-pointer mr-2 font-bold ${
                                    i === currentSlideIndex ? "opacity-100" : "opacity-50"
                                }`}
                                onClick={() => goToSlide({ index: i })}
                            />
                        ))}
                    </div>
                    </div>
                </div>
            ))}
            <div className="h-full">
                <MenuBar />
            </div>
        </div>
    );
}

export default BackgroundSlider;
