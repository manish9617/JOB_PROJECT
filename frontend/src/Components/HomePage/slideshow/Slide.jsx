// Slide.js
import React from "react";

const Slide = ({ slide, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <img
        className="d-block w-100"
        style={{ height: "400px" }}
        src={slide.imageUrl}
        alt={`Slide ${slide.id}`}
      />
      <div className="carousel-caption">
        <h3>{slide.caption}</h3>
        <p>{slide.description}</p>
      </div>
    </div>
  );
};

export default Slide;
