import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1)); //because the last index of an array is always length - 1. remember that array indexes start with 0
  };

  const nextSlide = () => {
    setCurrentIndex((next) => (next === total - 1 ? 0 : next + 1));
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`slide ${currentIndex + 1}`}
        className="slideshow__image"
      />

      {total > 1 && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            onClick={prevSlide}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            className="slideshow__arrow slideshow__arrow--right"
            onClick={nextSlide}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <span className="slideshow__counter">
            {currentIndex + 1} / {total}
          </span>
        </>
      )}
    </div>
  );
};

export default Slideshow;
