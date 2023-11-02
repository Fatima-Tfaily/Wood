import React, { useState, useEffect } from "react";
import "../styles/work.css";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";
import image14 from "../images/image14.jpg";
import image15 from "../images/image15.jpg";
import image16 from "../images/image16.jpg";

const Work = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image13,
    image14,
    image15,
    image16,
  ];

  const nextSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };
  const prevSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="slider-container">
      <h1 className="title">Work</h1>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide ${index}`}
          className={`slider-image ${index === currentImage ? "active" : ""}`}
        />
      ))}
      <button className="prev-btn" onClick={prevSlide}>
        {"<"}
      </button>
      <button className="next-btn" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default Work;
