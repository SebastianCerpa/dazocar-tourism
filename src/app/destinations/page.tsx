"use client";

import React, { useState } from "react";
import "../styles/globals.css";
import "../styles/destinations.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AnimatedSection } from "../components/AnimatedSection";
import Image from "next/image";
import {
  Service,
  serviceCategories as initialServiceCategories,
} from "./serviceData";

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
                <Image
                  src="/images/chile-map.jpg"
                  alt="Map of Chile highlighting tourist destinations"
                  className="about-img"
                  width={800} // reemplaza con el ancho real de la imagen
                  height={600} // reemplaza con la altura real
                  priority={true} // opcional: si es una imagen importante en el primer render
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
                        className="service-card-grid"
                        key={service.id}
                        style={{ "--card-index": index } as React.CSSProperties}
                      >
                        <div
                          className="service-image"
                          aria-hidden="true"
                          style={{ position: "relative" }}
                        >
                          <Image
                            src={service.thumbnailImage}
                            alt={service.name}
                            className="service-image-front"
                            width={400}
                            height={200}
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
                        <div className="service-content-grid">
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
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="modal-content"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              style={{
                display: "flex",
                height: "80vh",
                maxHeight: "90vh",
                maxWidth: "1000px",
                width: "90vw",
                borderRadius: "16px",
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <div
                className="modal-image"
                style={{ flex: 1, height: "100%", position: "relative" }}
              >
                <Image
                  src={selectedService.image}
                  alt={`${selectedService.name} tour`}
                  width={800}
                  height={1200}
                  className="modal-img"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  priority={false}
                />
                <div className="modal-image-caption">
                  <h2 id="modal-title">{selectedService.name}</h2>
                </div>
              </div>
              <div
                className="modal-details"
                style={{
                  flex: 1,
                  height: "100%",
                  overflowY: "auto",
                  padding: "2rem",
                }}
              >
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
