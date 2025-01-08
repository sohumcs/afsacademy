import React, { useState, useEffect, useRef } from "react";
import "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/styles/EventSlideshow.css";
import eventVideo from "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/media/WhatsApp Video 2025-01-06 at 22.16.11_2ea6aec4.mp4";
import eventImage from "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/media/WhatsApp Image 2025-01-06 at 22.06.47_db40da2b.jpg";  

const EventSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);
  const slides = [
    { type: "video", src: eventVideo },
    { type: "image", src: eventImage },
  ];

  useEffect(() => {
    if (slides[currentSlide].type === "video") {
      const videoElement = videoRef.current;
      videoElement.onended = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  }, [currentSlide, slides]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slideshow-container">
      <div className="slide">
        {slides[currentSlide].type === "video" ? (
          <video
            className="slide-content"
            autoPlay
            ref={videoRef}
            muted
          >
            <source src={slides[currentSlide].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            className="slide-content"
            src={slides[currentSlide].src}
            alt="Event Slide"
          />
        )}
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default EventSlideshow;





{/*import React from "react";
import "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/styles/EventSlideshow.css";
import eventVideo from "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/media/WhatsApp Video 2025-01-06 at 22.16.11_2ea6aec4.mp4"
*/}