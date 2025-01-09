import React, { useState, useEffect, useRef } from "react";
import "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/styles/EventSlideshow.css";
import eventVideo1 from "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/media/WhatsApp Video 2025-01-06 at 22.16.11_2ea6aec4.mp4";
import eventImage from "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/media/WhatsApp Image 2025-01-06 at 22.06.47_db40da2b.jpg";  
import eventVideo2 from "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/media/basketballssss.mp4";  


const EventSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  const slides = [
    { type: "video", src: eventVideo1 },
    { type: "image", src: eventImage },
    { type: "video", src: eventVideo2 },
  ];

  useEffect(() => {
    const handleEnd = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    if (slides[currentSlide].type === "video") {
      const videoElement = videoRef.current;
      videoElement.play();
      videoElement.onended = handleEnd;
    } else {
      const imageDuration = 5000; // 5 seconds for the image
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, imageDuration);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, slides]);

  const handleSlideChange = (direction) => {
    setCurrentSlide(
      (prev) => (prev + direction + slides.length) % slides.length
    );
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {slides.map((slide, index) => {
          const position =
            index === currentSlide
              ? "current"
              : index === (currentSlide - 1 + slides.length) % slides.length
              ? "previous"
              : index === (currentSlide + 1) % slides.length
              ? "next"
              : "hidden";

          return (
            <div
              key={index}
              className={`slide ${position}`}
              onClick={() =>
                position !== "current" &&
                handleSlideChange(position === "next" ? 1 : -1)
              }
            >
              {slide.type === "video" && position === "current" ? (
                <video ref={videoRef} className="video-slide" muted>
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : slide.type === "image" ? (
                <img
                  src={slide.src}
                  alt={`Slide ${index}`}
                  className="image-slide"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventSlideshow;

{
  /*
  
import React, { useState, useEffect, useRef } from "react";
import "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/styles/EventSlideshow.css";
import eventVideo from "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/media/WhatsApp Video 2025-01-06 at 22.16.11_2ea6aec4.mp4";
import eventImage from "C:/Users/Sohum Srivastava/Desktop/afsacademy/afsacademy/src/media/WhatsApp Image 2025-01-06 at 22.06.47_db40da2b.jpg";  

*/
}
