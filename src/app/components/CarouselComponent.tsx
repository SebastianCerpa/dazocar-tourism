'use client';

import { useEffect, useRef, useState } from 'react';

interface CarouselProps {
  slides: {
    image: string;
    icon: string;
    title: string;
    description: string;
  }[];
}

export default function CarouselComponent({ slides }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const autoplayInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(autoplayInterval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Only render transform style on client side
  const trackStyle = isClient 
    ? { transform: `translateX(-${currentIndex * (100 / slides.length)}%)` }
    : {};

  return (
    <div className="carousel-container">
      <div 
        className="carousel-track" 
        id="destinationCarousel"
        ref={trackRef}
        style={trackStyle}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <div className="service-card">
              <div className="service-image" style={{backgroundImage: `url('${slide.image}')`}}></div>
              <div className="service-icon">
                <img src={slide.icon} alt={`${slide.title} icon`} />
              </div>
              <div className="service-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        <button className="carousel-button" onClick={handlePrev}>←</button>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <button className="carousel-button" onClick={handleNext}>→</button>
      </div>
    </div>
  );
}