import { useState } from "react";

export default function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        setCurrentIndex((currentIndex) => (currentIndex === 0 ? pictures.length - 1 : currentIndex - 1));
    };
    const nextSlide = () => {
        setCurrentIndex((currentIndex) => (currentIndex === pictures.length - 1 ? 0 : currentIndex + 1));
    };

    return (
        <div className="carousel">
            <img className="carousel-image" src={pictures[currentIndex]} alt="logement" />
            {pictures.length > 1 && (
                <>
                    <div className="carousel-controls">
                        <button className="carousel-control" onClick={prevSlide}>
                            {"<"}
                        </button>
                        <button className="carousel-control" onClick={nextSlide}>
                            {">"}
                        </button>
                    </div>
                    <div className="image-counter">
                        {currentIndex + 1}/{pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}
