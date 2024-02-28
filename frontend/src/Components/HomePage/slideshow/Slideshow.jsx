// Slideshow.js
import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import SlideData from "./slideData";

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % SlideData.length);
    }, 3000); // Change slide every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {SlideData.map((slide, index) => (
          <Slide key={index} slide={slide} isActive={index === activeIndex} />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
        onClick={() =>
          handleSelect((activeIndex - 1 + SlideData.length) % SlideData.length)
        }
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        onClick={() => handleSelect((activeIndex + 1) % SlideData.length)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <ol className="carousel-indicators">
        {SlideData.map((slide, index) => (
          <li
            key={index}
            data-bs-target="#carouselExampleControls"
            data-bs-slide-to={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleSelect(index)}
          ></li>
        ))}
      </ol>
    </div>
  );
};

export default Slideshow;
