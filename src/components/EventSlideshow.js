import React, { useEffect, useRef, useState } from "react";
import "../styles/EventSlideshow.css";
import eventVideo1 from "../media/basketballssss.mp4";
import eventVideo2 from "../media/basketballssss_2.mp4";
import eventVideo3 from "../media/basketballssss_p3.mp4";
import eventPhoto1 from "../media/WhatsApp Image 2025-01-06 at 22.06.47_db40da2b.jpg";
import eventVideo4 from "../media/WhatsApp Video 2025-01-06 at 22.16.11_2ea6aec4.mp4";

const EventSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  const slides = [
    { type: "video", src: eventVideo1 },
    { type: "video", src: eventVideo2 },
    { type: "video", src: eventVideo3 },
    { type: "image", src: eventPhoto1 },
    { type: "video", src: eventVideo4 },
  ];

  // Auto-play the current video and transition to next
  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo && currentVideo.play) {
      currentVideo.play();
      const handleVideoEnd = () => handleNextSlide();
      currentVideo.addEventListener("ended", handleVideoEnd);
      return () => {
        currentVideo.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [currentSlide]);

  // Move to the next slide
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Move to the previous slide
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
            <div key={index} className={`slide ${position}`}>
              {slide.type === "video" && (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  muted={index !== currentSlide}
                  className="video-slide"
                >
                  <source src={slide.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {slide.type === "image" && (
                <img
                  src={slide.src}
                  alt={`Slide ${index}`}
                  className="image-slide"
                />
              )}
            </div>
          );
        })}

        {/* Navigation Buttons */}
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
