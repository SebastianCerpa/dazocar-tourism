"use client";

import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/services.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AnimatedSection } from "../components/AnimatedSection";
import Image from "next/image";

// Service interface
interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
  features?: string[];
  category?: string;
}

// Sample service data - in a real app, this would come from an API or CMS
const defaultServices: Service[] = [
  {
    id: 1,
    name: "Servicio Personalizado",
    description:
      "Experiencias de viaje personalizadas diseñadas específicamente para tus preferencias e intereses. Nuestro servicio personalizado incluye guías privados, itinerarios personalizados y acceso exclusivo a ubicaciones únicas en todo Chile.",
    image: "/images/serv-personalizado.png",
    features: ["Guías Privados", "Itinerarios Personalizados", "Transporte de Lujo"],
  },
  {
    id: 2,
    name: "Servicio Estándar",
    category: "Classic",
    description:
      "Nuestra opción más popular que ofrece tours grupales bien planificados a los destinos icónicos de Chile. Estos servicios siguen itinerarios cuidadosamente elaborados con guías profesionales y alojamientos cómodos.",
    image: "/images/serv-standar.png",
    features: ["Tours Grupales", "Itinerarios Fijos", "Guías Profesionales"],
  },
  {
    id: 3,
    name: "Servicio Familiar",
    category: "Specialized",
    description:
      "Aventuras familiares diseñadas pensando en niños y padres. Estos servicios incluyen actividades apropiadas para cada edad, alojamiento familiar y guías con experiencia trabajando con niños de todas las edades.",
    image: "/images/serv-family.png",
    features: ["Actividades para Niños", "Alojamiento Familiar", "Experiencias Educativas"],
  },
  {
    id: 4,
    name: "Servicio Empresarial",
    category: "Corporate",
    description:
      "Servicios profesionales para clientes corporativos que incluyen retiros de team-building, planificación de conferencias y tours ejecutivos. Manejamos toda la logística mientras mantenemos los más altos estándares de profesionalismo y comodidad.",
    image: "/images/serv-business.jpg",
    features: ["Retiros Corporativos", "Planificación de Conferencias", "Transporte Ejecutivo"],
  },
];

export default function Services() {
  const [services, setServices] = useState<Service[]>(defaultServices);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/services");
      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }
      const data = await response.json();
      if (data.data && data.data.length > 0) {
        setServices(data.data);
      }
    } catch (err) {
      // Use default services on error, don't show error state
      console.error("Failed to fetch services, using defaults:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="services-section">
        <AnimatedSection>
          <section className="services-intro">
            <div className="section-container story-content">
              <div className="story-text">
                <h2>Explora Chile Con Nosotros</h2>
                <p>
                  En Dazocar, ofrecemos una amplia gama de servicios turísticos diseñados
                  para mostrar lo mejor de los diversos paisajes de Chile y su rica
                  herencia cultural. Desde el desierto de Atacama de otro mundo en el
                  norte hasta la naturaleza prístina de la Patagonia en el sur,
                  nuestros tours guiados por expertos y experiencias de viaje personalizadas
                  aseguran aventuras inolvidables para cada tipo de viajero.
                </p>
                <p>
                  Ya sea que busques actividades al aire libre llenas de adrenalina,
                  inmersión cultural, delicias culinarias, o simplemente la oportunidad de
                  presenciar maravillas naturales impresionantes, nuestro equipo de
                  expertos locales creará la experiencia chilena perfecta adaptada a
                  tus intereses y preferencias.
                </p>
              </div>
              <div className="story-image">
                <Image
                  src="/images/chile-map.jpg"
                  alt="Map of Chile highlighting tourist destinations"
                  className="about-img"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="values-section">
            <div className="section-container">
              <h2>Nuestros Servicios</h2>
              <p className="section-description">
                Ofrecemos una gama de servicios especializados para satisfacer las necesidades de cada viajero,
                desde experiencias de lujo personalizadas hasta aventuras familiares
              </p>

              {loading && (
                <div className="loading-container">
                  <p>Loading services...</p>
                </div>
              )}

              {error && (
                <div className="error-container">
                  <p>Error: {error}</p>
                </div>
              )}

              {!loading && !error && (
                <div className="values-grid">
                  {services.map((service, index) => (
                    <div
                      className="value-card"
                      key={service.id}
                      data-number={`0${index + 1}`}
                    >
                      <div className="value-card-content">
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                      </div>
                      <div className="value-image">
                        <Image
                          src={service.image}
                          alt={`${service.name} service`}
                          width={400}
                          height={300}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="team-section">
            <div className="section-container">
              <h2>¿Listo para Experimentar Chile?</h2>
              <p>
                Contacta a nuestros expertos en viajes hoy para comenzar a planificar tu
                aventura chilena perfecta. Te ayudaremos a crear un
                itinerario personalizado que se ajuste a tus intereses, horario y presupuesto.
              </p>
              <button className="cta-button">Contáctenos</button>
            </div>
          </section>
        </AnimatedSection>
      </div>
      <Footer />
    </>
  );
}
