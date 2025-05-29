"use client";

import React, { useState } from "react";
import "../styles/globals.css";
import "../styles/destinations.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AnimatedSection } from "../components/AnimatedSection";

// Define TypeScript interfaces for our data structure
interface Service {
  id: string;
  name: string;
  description: string;
  details: string;
  schedules: string;
  image: string;
  thumbnailImage: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

// Initial service data organized by categories
const initialServiceCategories: ServiceCategory[] = [
  {
    id: "traditional-tours",
    title: "Traditional Tours",
    services: [
      {
        id: "city-tour",
        name: "City Tour / Santiago",
        description:
          "Explore the vibrant capital of Chile with our guided city tour. Discover the perfect blend of historical landmarks and modern architecture.",
        details:
          "Our Santiago City Tour offers two options to fit your schedule: a 4-hour half-day experience covering the main attractions, or an 8-hour full-day immersion that includes lunch at a local restaurant and visits to additional sites. You'll explore Plaza de Armas, San Cristobal Hill, Bellavista neighborhood, and more with our knowledgeable guides who provide cultural and historical context throughout the journey.",
        schedules:
          "4h half day (9:00 AM - 1:00 PM) – 8h full day (9:00 AM - 5:00 PM)",
        image: "/images/city-tour.jpg",
        thumbnailImage: "/images/chile-landscape.jpg",
      },
      {
        id: "valparaiso-tour",
        name: "Valparaíso / Viña del Mar Tour",
        description:
          "Visit the colorful coastal cities of Valparaíso and Viña del Mar in this full-day excursion from Santiago.",
        details:
          "This full-day tour takes you to Chile's central coast to explore two contrasting cities. In Valparaíso, a UNESCO World Heritage site, you'll wander through labyrinthine streets adorned with colorful street art and ride the historic funiculars. Then continue to the garden city of Viña del Mar with its beautiful beaches, parks, and elegant architecture. The tour includes transportation, guided visits, and time to enjoy local cuisine at recommended restaurants.",
        schedules: "Full day tour (8:30 AM - 6:30 PM)",
        image: "/images/valparaiso.jpg",
        thumbnailImage: "/images/valparaiso.jpg",
      },
      {
        id: "mountain-tours",
        name: "Cordilleras",
        description:
          "Experience the majestic Andes mountains with panoramic tours to Farellones Park or Valle Nevado.",
        details:
          "Our mountain tours offer breathtaking views of the Andes and exciting activities year-round. During winter (June-August), enjoy world-class skiing and snowboarding at Valle Nevado or Farellones. In summer, the mountains transform into hiking paradises with trails for all difficulty levels. The panoramic tour includes transportation with stops at scenic viewpoints, while adventure packages can include equipment rental and instruction for winter sports or guided hiking experiences.",
        schedules: "Panoramic Tour available year-round (8:00 AM - 5:00 PM)",
        image: "/images/torres.jpg",
        thumbnailImage: "/images/torres.jpg",
      },
      {
        id: "transfer",
        name: "Transfer in/out",
        description:
          "Convenient and reliable airport transfers to and from your accommodation in Santiago.",
        details:
          "Our professional transfer service ensures a smooth start and end to your Chilean adventure. We offer punctual airport pickups with drivers holding welcome signs, comfortable vehicles ranging from sedans to minivans depending on your group size, and 24/7 availability to accommodate any flight schedule. All our drivers speak English and can provide basic information about Santiago during your transfer.",
        schedules: "Available 24/7, scheduled according to your flight times",
        image: "/images/serv-business.jpg",
        thumbnailImage: "/images/serv-business.jpg",
      },
    ],
  },
  {
    id: "traditional-vineyards",
    title: "Traditional Vineyards",
    services: [
      {
        id: "concha-y-toro",
        name: "Concha y Toro",
        description:
          "Visit one of Chile's most famous wineries and taste their world-renowned wines.",
        details:
          "Concha y Toro offers two tour experiences: The Traditional Tour (1:15 duration) includes a walk through the gardens of the summer residence, a visit to the external part of the manor house, the variety garden, and Pirque's old cellars, plus a tasting of 3 wines. The Premium Tour (2 hours) adds access to the interior of the manor house, a visit to the new technological wine cellar, and a tasting of 4 premium reserve wines paired with cheese.",
        schedules: "Traditional – duration 1:15. Premium – approx. 2h",
        image: "/images/viñedos.jpg",
        thumbnailImage: "/images/viñedos.jpg",
      },
      {
        id: "undurraga",
        name: "Undurraga",
        description:
          "Experience one of Chile's oldest vineyards with a tour that combines tradition and innovation.",
        details:
          "At Undurraga Vineyard, the Traditional Tour (1:15 duration) takes you through the beautiful gardens, the family's original house, and traditional cellars, concluding with a tasting of 3 wines from their classic line. The Premium Tour (2 hours) extends the experience with a visit to the modern production facilities and barrel room, finishing with a guided tasting of 4 premium wines accompanied by selected cheeses and gourmet crackers.",
        schedules: "Traditional – duration 1:15. Premium – approx. 2h",
        image: "/images/viñedos.jpg",
        thumbnailImage: "/images/viñedos.jpg",
      },
      {
        id: "santa-rita",
        name: "Santa Rita",
        description:
          "Discover the perfect blend of wine tradition and Chilean history at this historic estate.",
        details:
          "Santa Rita Vineyard offers a Traditional Tour (1:15 duration) that includes a visit to the historic Doña Paula Restaurant, the neo-gothic chapel, and classic wine cellars, followed by a tasting of 3 wines. The Premium Tour (2 hours) adds a visit to the Andean Museum with its pre-Columbian art collection, a tour of the premium production area, and a tasting of 4 reserve wines paired with artisanal cheeses in an exclusive tasting room.",
        schedules: "Traditional – duration 1:15. Premium – approx. 2h",
        image: "/images/viñedos.jpg",
        thumbnailImage: "/images/viñedos.jpg",
      },
      {
        id: "cousino-macul",
        name: "Cousiño Macul",
        description:
          "Tour the oldest family-owned winery in Chile, operating continuously since 1856.",
        details:
          "Cousiño Macul offers a Traditional Tour (1:15 duration) through their historic cellars and vineyards, explaining their traditional winemaking methods passed down through generations, with a tasting of 3 classic wines. The Premium Tour (2 hours) provides a more comprehensive experience including a visit to the family's private cellar, the modern production facility, and concludes with a guided tasting of 4 premium wines paired with selected cheeses and charcuterie.",
        schedules: "Traditional – duration 1:15. Premium – approx. 2h",
        image: "/images/viñedos.jpg",
        thumbnailImage: "/images/viñedos.jpg",
      },
      {
        id: "alyan",
        name: "Alyan",
        description:
          "Experience a unique sunset night tour at this boutique winery with spectacular views.",
        details:
          "The Alyan Sunset Night Tour offers a magical experience as the sun sets over the vineyards. This special evening tour includes a guided walk through the vineyards during golden hour, followed by a visit to the production facilities illuminated for the evening. The experience culminates with a wine tasting under the stars on their panoramic terrace, featuring 4 premium wines paired with local appetizers. This tour provides a unique perspective on Chilean winemaking and stunning photo opportunities.",
        schedules:
          "Sunset night tour (times vary seasonally, typically 6:00 PM - 9:00 PM)",
        image: "/images/viñedos.jpg",
        thumbnailImage: "/images/viñedos.jpg",
      },
    ],
  },
];

export default function Destinations() {
  // State for service data and loading status
  const serviceCategories = initialServiceCategories;
  const isLoading = false;
  const error = null;

  // Modal state
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Handle keyboard navigation for accessibility
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Manage focus when modal opens/closes
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (isModalOpen && closeButtonRef.current) {
      // Set focus to close button when modal opens
      closeButtonRef.current.focus();
    }
  }, [isModalOpen]);

  // Store the previously focused element to restore focus when modal closes
  const previousFocusRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (isModalOpen) {
      // Save the currently focused element before opening modal
      previousFocusRef.current = document.activeElement as HTMLElement;
    } else if (previousFocusRef.current) {
      // Restore focus when modal closes
      previousFocusRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <>
      <Navbar />
      <div className="services-section">
        <AnimatedSection>
          <section className="services-intro">
            <div className="section-container story-content">
              <div className="story-text">
                <h2>Nuestros Servicios</h2>
                <p>
                  Descubra lo mejor de Chile con nuestra completa gama de
                  servicios turísticos. Desde visitas guiadas a la ciudad hasta
                  experiencias en viñedos, ofrecemos experiencias cuidadosamente
                  diseñadas que muestran la belleza y la cultura de este diverso
                  país.
                </p>
                <p>
                  Cada uno de nuestros servicios está diseñado con atención a
                  los detalles, asegurando que disfrute de la mejor experiencia
                  con guías conocedoras, transporte cómodo y recuerdos
                  inolvidables.
                </p>
              </div>
              <div className="story-image">
                <img
                  src="/images/chile-map.jpg"
                  alt="Map of Chile highlighting tourist destinations"
                  className="about-img"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Loading State */}
        {isLoading && (
          <AnimatedSection>
            <section className="loading-section">
              <div className="section-container">
                <h2>Loading Services...</h2>
                <div className="loading-spinner"></div>
              </div>
            </section>
          </AnimatedSection>
        )}

        {/* Error State */}
        {error && (
          <AnimatedSection>
            <section className="error-section">
              <div className="section-container">
                <h2>Oops! Something went wrong</h2>
                <p>{error}</p>
                <button
                  className="retry-button"
                  onClick={() => window.location.reload()}
                >
                  Retry
                </button>
              </div>
            </section>
          </AnimatedSection>
        )}

        {/* Service Categories */}
        {!isLoading &&
          !error &&
          serviceCategories.map((category) => (
            <AnimatedSection key={category.id}>
              <section className="service-category-section">
                <div className="section-container">
                  <h2>{category.title}</h2>
                  <div className="service-cards-grid">
                    {category.services.map((service, index) => (
                      <div
                        className="service-card"
                        key={service.id}
                        style={{ "--card-index": index } as React.CSSProperties}
                      >
                        <div
                          className="service-image"
                          aria-hidden="true"
                          style={{ position: "relative" }}
                        >
                          <img
                            src={service.thumbnailImage}
                            alt={service.name}
                            className="service-image-front"
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "cover",
                              borderTopLeftRadius: "16px",
                              borderTopRightRadius: "16px",
                            }}
                          />
                          <div className="service-image-overlay"></div>
                        </div>
                        <div className="service-content">
                          <h3>{service.name}</h3>
                          <p>{service.description}</p>
                          <button
                            className="details-button"
                            onClick={() => openModal(service)}
                            aria-label={`View more details about ${service.name}`}
                          >
                            More Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </AnimatedSection>
          ))}

        {/* Service Detail Modal */}
        {isModalOpen && selectedService && (
          <div
            className="modal-overlay"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="modal-content"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={closeModal}
                ref={closeButtonRef}
                aria-label="Close modal"
              >
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
              <div className="modal-image">
                <img
                  src={selectedService.image}
                  alt={`${selectedService.name} tour`}
                  loading="lazy"
                />
                <div className="modal-image-caption">
                  <h2 id="modal-title">{selectedService.name}</h2>
                </div>
              </div>
              <div className="modal-details">
                <h2 id="modal-title-mobile" className="mobile-only">
                  {selectedService.name}
                </h2>

                <div className="modal-info">
                  <h3>Overview</h3>
                  <p>{selectedService.details}</p>
                </div>

                <div className="modal-info">
                  <h3>Available Schedules</h3>
                  <p>{selectedService.schedules}</p>
                </div>

                <div className="modal-highlights">
                  <h3>Highlights</h3>
                  <ul className="highlights-list">
                    <li>Professional bilingual guides</li>
                    <li>Comfortable transportation</li>
                    <li>Small groups for personalized attention</li>
                    <li>Flexible booking options</li>
                  </ul>
                </div>

                <div className="modal-actions">
                  <button
                    className="book-button"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      window.location.href = "/contact";
                    }}
                    aria-label="Book this experience"
                  >
                    Book This Experience
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
