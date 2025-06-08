"use client";

import { useEffect, useState, useRef, memo, useCallback } from "react";
import Image from "next/image";
// Interfaces más específicas
interface SlideItem {
  readonly image: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

interface CarouselProps {
  readonly slides: readonly SlideItem[];
  readonly autoplaySpeed?: number;
  readonly showControls?: boolean;
  readonly showDots?: boolean;
}

// Componente de diapositiva memoizado
const Slide = memo(
  ({ slide, width }: { readonly slide: SlideItem; readonly width: number }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
      <div className="carousel-slide" style={{ width: `${width}px` }}>
        <div className="service-card">
          <div className="card-image-container">
            {!imageLoaded && !imageError && (
              <div className="image-placeholder">Cargando...</div>
            )}
            {imageError && (
              <div className="image-error">No se pudo cargar la imagen</div>
            )}
            <Image
              src={slide.image}
              alt={slide.title}
              className={`card-image ${imageLoaded ? "loaded" : ""}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              style={{ display: imageLoaded ? "block" : "none" }}
              width={400}
              height={220}
              unoptimized
              priority
            />
          </div>
          <div className="service-icon">
            <Image
              src={slide.icon}
              alt={`${slide.title} icon`}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
              width={56}
              height={56}
              unoptimized
              className="icon-image"
            />
          </div>
          <div className="service-content">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        </div>
      </div>
    );
  }
);

Slide.displayName = "Slide";

export default function CarouselComponent({
  slides,
  autoplaySpeed = 5000,
  showControls = true,
  showDots = true,
}: CarouselProps) {
  // Hooks deben ir antes de cualquier return condicional
  const [currentIndex, setCurrentIndex] = useState(slides.length);
  const [isClient, setIsClient] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [slideWidth, setSlideWidth] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Refs para timeouts y intervals
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const jumpTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Observer para detectar visibilidad
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Create an array with clones at both ends for infinite scrolling
  const extendedSlides = [...slides, ...slides, ...slides] as SlideItem[];

  // Función para calcular el ancho de las diapositivas
  const calculateSlideWidth = useCallback(() => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      let visibleSlides = 1;
      if (window.innerWidth >= 1200) {
        visibleSlides = 3;
      } else if (window.innerWidth >= 768) {
        visibleSlides = 2;
      }
      setSlideWidth((containerWidth - (visibleSlides - 1) * 5) / visibleSlides);
    }
  }, []);

  useEffect(() => {
    setIsClient(true);

    // Calcular el ancho de las diapositivas
    calculateSlideWidth();
    window.addEventListener("resize", calculateSlideWidth);

    // Configurar observer para detectar visibilidad
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0]?.isIntersecting ?? true);
      },
      { threshold: 0.3 }
    );

    if (carouselRef.current) {
      observerRef.current.observe(carouselRef.current);
    }

    return () => {
      window.removeEventListener("resize", calculateSlideWidth);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [calculateSlideWidth]);

  // Función para programar un salto con transición
  const scheduleJump = useCallback((newIndex: number) => {
    if (jumpTimeoutRef.current) {
      clearTimeout(jumpTimeoutRef.current);
    }

    jumpTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(true);
      setCurrentIndex(newIndex);

      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }

      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 500);
  }, []);

  // handleNext sin llamar a startAutoplay
  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  // startAutoplay recibe la función que debe ejecutar
  const startAutoplay = useCallback(
    (nextFn: () => void) => {
      stopAutoplay();
      autoplayTimerRef.current = setInterval(() => {
        if (!isDragging && !isTransitioning) {
          nextFn();
        }
      }, autoplaySpeed);
    },
    [isDragging, isTransitioning, autoplaySpeed]
  );

  // En useEffect y otros lugares, llama startAutoplay(() => handleNext())
  // Control de autoplay basado en visibilidad
  useEffect(() => {
    if (isVisible) {
      startAutoplay(handleNext);
    } else {
      stopAutoplay();
    }
    return () => {
      stopAutoplay();
    };
  }, [isVisible, autoplaySpeed, startAutoplay, handleNext]);

  // Manejo de limpieza al desmontar
  useEffect(() => {
    return () => {
      cleanupAllTimeouts();
    };
  }, []);

  useEffect(() => {
    if (!isClient || isTransitioning) return;

    // Lógica mejorada para el scroll infinito
    if (currentIndex <= slides.length - 1) {
      // Estamos en los clones del principio, saltar al final de los originales
      scheduleJump(currentIndex + slides.length);
    } else if (currentIndex >= slides.length * 2) {
      // Estamos en los clones del final, saltar al principio de los originales
      scheduleJump(currentIndex - slides.length);
    }
  }, [currentIndex, isClient, slides.length, isTransitioning, scheduleJump]);

  const cleanupAllTimeouts = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
    if (jumpTimeoutRef.current) {
      clearTimeout(jumpTimeoutRef.current);
      jumpTimeoutRef.current = null;
    }
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
    startAutoplay(handleNext); // Reset autoplay timer
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning) return;
    // Map the dot index to the middle set of slides
    setCurrentIndex(slides.length + index);
    startAutoplay(handleNext); // Reset autoplay timer
  };

  // Handlers de teclado para accesibilidad
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        handlePrev();
        break;
      case "ArrowRight":
        handleNext();
        break;
    }
  };

  // Mouse/Touch event handlers for dragging
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isTransitioning) return;
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setDragOffset(0);
    stopAutoplay();
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const newOffset = clientX - dragStartX;
    setDragOffset(newOffset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    if (Math.abs(dragOffset) > slideWidth / 3) {
      if (dragOffset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    startAutoplay(handleNext);
  };

  // Calculate transform based on current index and drag offset
  const getTransform = () => {
    if (!isClient) return "translateX(0)";

    // Calculate center offset
    const containerWidth = carouselRef.current?.offsetWidth ?? 0;
    const totalSlideWidth = slideWidth + 1; // slide width + gap
    const centerOffset = (containerWidth - totalSlideWidth) / 2;

    const baseTransform = -currentIndex * totalSlideWidth + centerOffset;
    const dragTransform = isDragging ? dragOffset : 0; // Corregido de 1 a 0

    return `translateX(${baseTransform + dragTransform}px)`;
  };

  // Get the active dot index based on the current slide
  const getActiveDotIndex = () => {
    // Map the current index to the original slides (middle set)
    const normalizedIndex = currentIndex % slides.length;
    if (normalizedIndex < 0) {
      return normalizedIndex + slides.length;
    }
    return normalizedIndex;
  };

  // Ahora el return condicional
  if (!slides?.length) {
    return (
      <div className="carousel-empty">No hay diapositivas disponibles</div>
    );
  }

  return (
    <div
      className="carousel-wrapper"
      style={{ overflow: "hidden", width: "100%", position: "relative" }}
    >
      <section
        className="carousel-container"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Carrusel de imágenes"
      >
        <div
          ref={carouselRef}
          className="carousel-track-container"
          role="presentation"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            className={`carousel-track ${isDragging ? "dragging" : ""}`}
            style={{
              transform: getTransform(),
              transition:
                isDragging || isTransitioning
                  ? "none"
                  : "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
            aria-live="polite"
          >
            {isClient &&
              extendedSlides.map((slide, index) => (
                <Slide
                  key={`slide-${slide.title}-${Math.floor(
                    index / slides.length
                  )}-${index % slides.length}`}
                  slide={slide}
                  width={slideWidth}
                />
              ))}
          </div>
        </div>

        {showControls && (
          <div className="carousel-nav" aria-label="Controles de carrusel">
            <button
              className="carousel-button"
              onClick={handlePrev}
              aria-label="Diapositiva anterior"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {showDots && (
              <div
                className="carousel-dots"
                role="group"
                aria-label="Indicadores de diapositiva"
              >
                {slides.map((slide, index) => (
                  <button
                    key={`dot-${slide.title}-${index}`}
                    className={`carousel-dot ${
                      index === getActiveDotIndex() ? "active" : ""
                    }`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Ir a diapositiva ${index + 1}: ${slide.title}`}
                    aria-current={
                      index === getActiveDotIndex() ? "true" : "false"
                    }
                    type="button"
                  />
                ))}
              </div>
            )}

            <button
              className="carousel-button"
              onClick={() => {
                handleNext();
                startAutoplay(handleNext);
              }}
              aria-label="Siguiente diapositiva"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
