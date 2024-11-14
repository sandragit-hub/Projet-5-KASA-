import { useState } from "react";
import "../../components/carousel/carousel.scss"

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
            <img className="carouselImage" src={pictures[currentIndex]} alt="logement" />
            {pictures.length > 1 && (
                <>
                    <div className="carouselBtn">
                        <button className="carouseSlide" onClick={prevSlide}>
                            {"<"}
                        </button>
                        <button className="carouselSlide" onClick={nextSlide}>
                            {">"}
                        </button>
                    </div>
                    <div className="carouselCounter">
                        {currentIndex + 1}/{pictures.length}
                    </div>
                </>
            )}
        </div>
    );
}
