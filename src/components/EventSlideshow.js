import React, { useEffect, useRef, useState } from "react";
import "../styles/EventSlideshow.css";
import eventVideo1 from "../media/WhatsApp Video 2025-01-06 at 22.16.11_2ea6aec4.mp4";
import eventVideo2 from "../media/basketballssss_p3.mp4";
import eventVideo3 from "../media/basketballssss.mp4";
import eventVideo4 from "../media/basketballssss_2.mp4"; // New Video
import eventImage from "../media/WhatsApp Image 2025-01-06 at 22.06.47_db40da2b.jpg";

const EventSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  const slides = [
    { type: "video", src: eventVideo1 },
    { type: "image", src: eventImage },
    { type: "video", src: eventVideo2 },
    { type: "video", src: eventVideo3 },
    { type: "video", src: eventVideo4 },
  ];

  // Move to the next slide
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Move to the previous slide
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Handle video end event
  useEffect(() => {
    if (slides[currentSlide].type === "video") {
      const video = videoRefs.current[currentSlide];
      if (video) {
        video.play();
        const onVideoEnd = () => handleNextSlide();
        video.addEventListener("ended", onVideoEnd);
        return () => video.removeEventListener("ended", onVideoEnd);
      }
    } else {
      const imageDuration = 5000; // Show image for 5 seconds
      const timer = setTimeout(handleNextSlide, imageDuration);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, slides]);

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {slides.map((slide, index) => {
          // Determine the slide position
          const position =
            index === currentSlide
              ? "current"
              : index === (currentSlide - 1 + slides.length) % slides.length
              ? "previous"
              : index === (currentSlide + 1) % slides.length
              ? "next"
              : "hidden";

          return (
            <div key={index} className={`slide ${position}`}>
              {slide.type === "video" ? (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  muted
                  className="video-slide"
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={slide.src} alt={`Slide ${index}`} className="image-slide" />
              )}
            </div>
          );
        })}

        {/* Navigation */}
        <button
          className="slide-control previous"
          onClick={handlePrevSlide}
          aria-label="Previous slide"
        >
          &#10094; {/* Left arrow */}
        </button>
        <button
          className="slide-control next"
          onClick={handleNextSlide}
          aria-label="Next slide"
        >
          &#10095; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default EventSlideshow;
