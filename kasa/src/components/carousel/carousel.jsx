import { useState } from "react";
import arrowLeft from "../../assets/image/arrowLeft.png";
import arrowRight from "../../assets/image/arrowRight.png";
import "../../components/carousel/carousel.scss";
import PropTypes from 'prop-types';

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
                            <img src={arrowLeft} alt='flèche gauche' style={{ width: '40px', height: '60px' }} />
                        </button>
                        <button className="carouselSlide" onClick={nextSlide}>
                            <img src={arrowRight} alt='flèche droite' style={{ width: '40px', height: '60px' }} />
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

Carousel.propTypes = {
    pictures: PropTypes.array.isRequired
}