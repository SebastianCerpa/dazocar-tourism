'use client';

import { useEffect, useState, useRef } from 'react';

interface CarouselProps {
  slides: {
    image: string;
    icon: string;
    title: string;
    description: string;
  }[];
}

export default function CarouselComponent({ slides }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(slides.length); // Start at the first clone
  const [isClient, setIsClient] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideWidth = useRef(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Create an array with clones at both ends for infinite scrolling
  const extendedSlides = [...slides, ...slides, ...slides];

  useEffect(() => {
    setIsClient(true);
    
    // Calculate slide width on mount and resize
    const updateSlideWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const visibleSlides = window.innerWidth >= 1200 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        slideWidth.current = (containerWidth - (visibleSlides - 1) * 5) / visibleSlides;
      }
    };
    
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    
    startAutoplay();
    
    return () => {
      window.removeEventListener('resize', updateSlideWidth);
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, []);

  // Handle the infinite scroll effect
  useEffect(() => {
    if (!isClient) return;

    // If we've scrolled to a clone, wait for transition to end, then jump to the real slide
    if (isTransitioning) return;

    if (currentIndex <= slides.length - 1) {
      // We're at the beginning clones, jump to the end originals
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(currentIndex + slides.length);
        
        // Re-enable transitions after the jump
        const transitionTimeout = setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
        
        return () => {
          clearTimeout(transitionTimeout);
        };
      }, 500);
      
      return () => {
        clearTimeout(timeout);
      };
    } else if (currentIndex >= slides.length * 2) {
      // We're at the end clones, jump to the beginning originals
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(currentIndex - slides.length);
        
        // Re-enable transitions after the jump
        const transitionTimeout = setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
        
        return () => {
          clearTimeout(transitionTimeout);
        };
      }, 500);
      
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentIndex, isClient, slides.length]);

  const startAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    
    autoplayTimerRef.current = setInterval(() => {
      if (!isDragging && !isTransitioning) {
        handleNext();
      }
    }, 5000);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setCurrentIndex(prev => prev - 1);
    startAutoplay(); // Reset autoplay timer
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setCurrentIndex(prev => prev + 1);
    startAutoplay(); // Reset autoplay timer
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning) return;
    // Map the dot index to the middle set of slides
    setCurrentIndex(slides.length + index);
    startAutoplay(); // Reset autoplay timer
  };

  // Mouse/Touch event handlers for dragging
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isTransitioning) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setDragOffset(0);
    
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const newOffset = clientX - dragStartX;
    setDragOffset(newOffset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    if (Math.abs(dragOffset) > slideWidth.current / 3) {
      if (dragOffset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
    startAutoplay();
  };

  // Calculate transform based on current index and drag offset
  const getTransform = () => {
    if (!isClient) return 'translateX(0)';
    
    // Calculate center offset
    const containerWidth = carouselRef.current?.offsetWidth || 0;
    const totalSlideWidth = slideWidth.current + 1; // slide width + gap
    const centerOffset = (containerWidth - totalSlideWidth) / 2;
    
    const baseTransform = -currentIndex * totalSlideWidth + centerOffset;
    const dragTransform = isDragging ? dragOffset : 1;
    
    return `translateX(${baseTransform + dragTransform}px)`;
  };

  // Get the active dot index based on the current slide
  const getActiveDotIndex = () => {
    // Map the current index to the original slides (middle set)
    const normalizedIndex = currentIndex % slides.length;
    return normalizedIndex < 0 ? normalizedIndex + slides.length : normalizedIndex;
  };

  return (
    <div className="carousel-container">
      <div 
        ref={carouselRef}
        className="carousel-track-container"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div 
          className={`carousel-track ${isDragging ? 'dragging' : ''}`}
          style={{ 
            transform: getTransform(),
            transition: isDragging || isTransitioning ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)'
          }}
        >
          {isClient && extendedSlides.map((slide, index) => (
            <div 
              className="carousel-slide" 
              key={`slide-${index}`}
              style={{ width: `${slideWidth.current}px` }}
            >
              <div className="service-card">
                <div className="card-image-container">
                  <img src={slide.image} alt={slide.title} className="card-image" />
                </div>
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
      </div>
      <div className="carousel-nav">
        <button className="carousel-button" onClick={handlePrev}>←</button>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`carousel-dot ${index === getActiveDotIndex() ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <button className="carousel-button" onClick={handleNext}>→</button>
      </div>
    </div>
  );
}
