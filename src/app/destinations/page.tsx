'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
    id: 'traditional-tours',
    title: 'Tours Tradicionales',
    services: [
      {
        id: 'city-tour',
        name: 'City Tour / Santiago',
        description: 'Explore la vibrante capital de Chile con nuestro recorrido guiado. Descubra la mezcla perfecta de historia y arquitectura moderna.',
        details: 'Nuestro City Tour por Santiago ofrece dos opciones: medio día (4 horas) cubriendo las principales atracciones, o día completo (8 horas) que incluye almuerzo y lugares adicionales. Explorará la Plaza de Armas, Cerro San Cristóbal, Barrio Bellavista y más con nuestros guías expertos.',
        schedules: 'Medio día 4h (9:00 AM - 1:00 PM) – Día completo 8h (9:00 AM - 5:00 PM)',
        image: '/images/city-tour.jpg',
        thumbnailImage: '/images/city-tour.jpg'
      },
      {
        id: 'valparaiso-tour',
        name: 'Valparaíso / Viña del Mar Tour',
        description: 'Visite las coloridas ciudades costeras de Valparaíso y Viña del Mar en esta excursión de día completo desde Santiago.',
        details: 'Este tour lo lleva a explorar dos ciudades contrastantes. En Valparaíso, Patrimonio de la Humanidad, paseará por calles laberínticas, arte urbano y ascensores históricos. Luego continuaremos hasta la ciudad jardín de Viña del Mar con sus hermosas playas y elegante arquitectura.',
        schedules: 'Tour de día completo (8:30 AM - 6:30 PM)',
        image: '/images/valparaiso.jpg',
        thumbnailImage: '/images/valparaiso.jpg'
      },
      {
        id: 'mountain-tours',
        name: 'Cordilleras',
        description: 'Experimente la majestuosa Cordillera de los Andes con recorridos panorámicos a Farellones o Valle Nevado.',
        details: 'Nuestros tours de montaña ofrecen impresionantes vistas de los Andes. Durante el invierno, disfrute de la nieve en Valle Nevado o Farellones. En verano, las montañas se transforman en paraísos ideales para el senderismo. Incluye transporte y paradas en miradores.',
        schedules: 'Tour panorámico disponible todo el año (8:00 AM - 5:00 PM)',
        image: '/images/torres.jpg',
        thumbnailImage: '/images/torres.jpg'
      },
      {
        id: 'transfer',
        name: 'Transfer in/out',
        description: 'Traslados convenientes y confiables desde y hacia el aeropuerto a su alojamiento en Santiago.',
        details: 'Nuestro servicio de traslado profesional garantiza un inicio y final perfectos para su aventura. Ofrecemos recogidas puntuales en el aeropuerto con un conductor experto, vehículos cómodos y disponibilidad 24/7 de acuerdo al horario de su vuelo.',
        schedules: 'Disponible 24/7, programado según el horario de su vuelo',
        image: '/images/serv-business.jpg',
        thumbnailImage: '/images/serv-business.jpg'
      }
    ]
  },
  {
    id: 'traditional-vineyards',
    title: 'Viñedos Tradicionales',
    services: [
      {
        id: 'concha-y-toro',
        name: 'Concha y Toro',
        description: 'Visite una de las viñas más famosas de Chile y deguste sus mundialmente reconocidos vinos.',
        details: 'El Tour Tradicional incluye una caminata por los jardines de la residencia de verano, una visita al parque de variedades y a las antiguas bodegas de Pirque, terminando con una degustación de vinos.',
        schedules: 'Tradicional – duración 1:15h. Premium – aprox. 2h',
        image: '/images/viñedos.jpg',
        thumbnailImage: '/images/concha-toro.png'
      },
      {
        id: 'undurraga',
        name: 'Undurraga',
        description: 'Experimente una de las viñas más antiguas de Chile con un recorrido que combina tradición e innovación.',
        details: 'En Viña Undurraga, el Tour de 1:15 hrs lo lleva a través de los hermosos jardines, la casa original de la familia y las bodegas tradicionales, concluyendo con una gran degustación.',
        schedules: 'Tradicional – duración 1:15h. Premium – aprox. 2h',
        image: '/images/undurraga.png',
        thumbnailImage: '/images/viña-undurraga.jpg'
      },
      {
        id: 'santa-rita',
        name: 'Santa Rita',
        description: 'Descubra la mezcla perfecta de tradición vitivinícola e historia chilena en sus hermosos jardines.',
        details: 'El Tour en Viña Santa Rita incluye una visita al histórico Restaurante Doña Paula, la capilla neogótica y las clásicas bodegas, seguido de una espectacular cata especializada.',
        schedules: 'Tradicional – duración 1:15h. Premium – aprox. 2h',
        image: '/images/viña-santa-rita.png',
        thumbnailImage: '/images/santa-rita.png'
      },
      {
        id: 'cousino-macul',
        name: 'Cousiño Macul',
        description: 'Recorra la viña familiar más antigua de Chile, operando ininterrumpidamente desde 1856.',
        details: 'Cousiño Macul ofrece un tour a través de sus bodegas históricas, explicando sus métodos tradicionales transmitidos por generaciones.',
        schedules: 'Tradicional – duración 1:15h. Premium – aprox. 2h',
        image: '/images/cousino.png',
        thumbnailImage: '/images/viña-cousino.jpg'
      },
      {
        id: 'alyan',
        name: 'Alyan',
        description: 'Disfrute de un tour y cata nocturna única al atardecer en esta viña boutique de espectaculares vistas.',
        details: 'El tour Alyan Sunset Night ofrece una experiencia mágica cuando el sol se pone sobre los viñedos, con una caminata iluminada y vinos premium bajo las estrellas.',
        schedules: 'Tour Sunset (el horario varía según la temporada, usualmente 6:00 PM - 9:00 PM)',
        image: '/images/viña-alyan.png',
        thumbnailImage: '/images/alyan.jpg'
      }
    ]
  }
];

export default function Destinations() {
  // State for service data and loading status
  const [serviceCategories] = useState<ServiceCategory[]>(initialServiceCategories);

  // Modal state
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle keyboard navigation for accessibility
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
                  Descubra lo mejor de Chile con nuestra completa gama de servicios turísticos.
                  Desde visitas guiadas a la ciudad hasta experiencias en viñedos, ofrecemos experiencias cuidadosamente diseñadas que muestran la belleza y la cultura de este diverso país.
                </p>
                <p>
                  Cada uno de nuestros servicios está diseñado con atención a los detalles, asegurando que disfrute de la mejor experiencia con guías conocedoras, transporte cómodo y recuerdos inolvidables.
                </p>
              </div>
              <div className="story-image">
                <Image
                  src="/images/chile-map.jpg"
                  alt="Map of Chile highlighting tourist destinations"
                  className="about-img"
                  width={800}
                  height={600}
                  priority={true}
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Service Categories */}
        {serviceCategories.map((category) => (
          <AnimatedSection key={category.id}>
            <section className="service-category-section">
              <div className="section-container">
                <h2>{category.title}</h2>
                <div className="service-cards-grid">
                  {category.services.map((service, index) => (
                    <div
                      className="service-card"
                      key={service.id}
                      style={{ '--card-index': index } as React.CSSProperties}
                    >
                      <div
                        className="service-image"
                        style={{
                          backgroundImage: `url(${service.thumbnailImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          position: 'relative'
                        }}
                        aria-hidden="true"
                      >
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
                <span className="sr-only">Cerrar</span>
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
                <h2 id="modal-title-mobile" className="mobile-only">{selectedService.name}</h2>

                <div className="modal-info">
                  <h3>Descripción General</h3>
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
                      window.location.href = '/contact';
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
