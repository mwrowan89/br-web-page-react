import React, { useEffect, useState } from "react";
import "../css/PhotoSlide.css";
import imageData from "./ImageData";

function PhotoSlide() {
  const [timer, setTimer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    startSlide();
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, [currentIndex]);

  const startSlide = () => {
    setTimer(setInterval(next, 8000));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const shuffledArray = (array) => {
      const shuffled = array.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    setShuffledImages(shuffledArray(imageData));
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.className === "prev") {
      prev();
      console.log(imageData.length);
    } else if (event.target.className === "next") {
      next();
    }
  };

  return (
    <>
      <div className="photo-slide">
        {shuffledImages.map((image, index) => (
          <img key={index} className="slide-image" src={image.src} alt="" />
        ))}

        <div className="buttons">
          <a className="prev" onClick={handleClick} href="/">
            &#10094; Previous
          </a>
          <a className="next" onClick={handleClick} href="/">
            Next &#10095;
          </a>
        </div>
      </div>
    </>
  );
}

export default PhotoSlide;
