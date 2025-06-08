"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import { AnimatedSection } from "./components/AnimatedSection";
import CarouselComponent from "./components/CarouselComponent";
import Image from "next/image";

interface FeaturedDestination {
  id: number;
  image: string;
  icon: string;
  title: string;
  description: string;
}

export default function Home() {
  const [featuredDestinations, setFeaturedDestinations] = useState<
    FeaturedDestination[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  const fetchFeaturedDestinations = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/featured-destinations");
      if (!response.ok) {
        throw new Error("Failed to fetch featured destinations");
      }
      const data = await response.json();
      setFeaturedDestinations(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      fetchFeaturedDestinations();
    }
  }, [fetchFeaturedDestinations, isMounted]);

  return (
    <>
      <Navbar />
      <main>
        <div className="hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Descubre Chile con Dazocar</h1>
              <p>
                Del desierto de Atacama a los glaciares de la Patagonia,
                descubra los paisajes más diversos de Sudamérica
              </p>
            </div>
          </div>
        </div>

        <AnimatedSection className="home-about">
          <div className="container">
            <div className="about-wrapper">
              <div className="about-text">
                <h2>Acerca de Dazocar</h2>
                <p>
                  Somos una empresa con más de 15 años de experiencia en el
                  mundo del turismo. Velamos por el interés y la seguridad de
                  nuestros clientes brindándoles comodidad, confianza y un
                  servicio de calidad a la altura de sus expectativas. Creemos
                  en la necesidad de entregar un servicio diferenciado y
                  personalizado a los distintos tipos de clientes, garantizando
                  servicios turísticos de calidad con todos
                </p>
                <div className="about-buttons">
                  <Link href="/about" className="learn-more-btn">
                    Descubre más sobre nosotros
                  </Link>
                  <Link href="/contact" className="contact-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Años de Experiencia</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Turistas Felices</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Rutas Únicas</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="featured-destinations-section">
          <div className="container">
            <AnimatedSection className="featured-destinations">
              <h2>Destinos Populares</h2>
              <p>
                Descubre algunos de nuestros destinos más populares de nuestro
                país
              </p>

              {(!isMounted || loading) && (
                <div className="carousel-loading">
                  <p>Cargando destinos...</p>
                </div>
              )}

              {!loading && error && (
                <div className="carousel-error">
                  <p>Error al cargar destinos: {error}</p>
                </div>
              )}

              {!loading && !error && featuredDestinations.length > 0 && (
                <CarouselComponent slides={featuredDestinations} />
              )}

              {!loading && !error && featuredDestinations.length === 0 && (
                <div className="no-destinations">
                  <p>No hay destinos destacados disponibles</p>
                </div>
              )}
              <Link href="/destinations" className="learn-more-btn">
                Descubre más
              </Link>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection className="why-choose-us-business">
          <div className="container">
            <div className="section-header">
              <h2>¿Por qué elegirnos?</h2>
              <div className="section-underline"></div>
              <p className="section-subtitle">
                Descubre las razones por las que somos la mejor opción para
                explorar Chile con un servicio profesional y personalizado.
              </p>
            </div>

            <div className="business-features-grid">
              <div className="business-feature">
                <div className="business-feature-content">
                  <div className="business-feature-icon">
                    <Image
                      src="/images/service-icon.svg"
                      alt="Servicio Premium"
                      width={64}
                      height={64}
                      className="icon-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="business-feature-text">
                    <h3>Servicio Premium</h3>
                    <p>
                      Ofrecemos una experiencia de viaje de alta calidad con
                      atención personalizada y cuidado en cada detalle para
                      superar sus expectativas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="business-feature">
                <div className="business-feature-content">
                  <div className="business-feature-icon">
                    <Image
                      src="/images/destination-icon.svg"
                      alt="Destinos Exclusivos"
                      width={64}
                      height={64}
                      className="icon-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="business-feature-text">
                    <h3>Destinos Exclusivos</h3>
                    <p>
                      Acceda a lugares únicos y experiencias exclusivas
                      cuidadosamente seleccionadas para crear recuerdos
                      inolvidables.
                    </p>
                  </div>
                </div>
              </div>

              <div className="business-feature">
                <div className="business-feature-content">
                  <div className="business-feature-icon">
                    <Image
                      src="/images/sustainability-icon.svg"
                      alt="Compromiso Sustentable"
                      width={64}
                      height={64}
                      className="icon-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="business-feature-text">
                    <h3>Compromiso Sustentable</h3>
                    <p>
                      Nuestras operaciones están diseñadas para minimizar el
                      impacto ambiental y contribuir positivamente a las
                      comunidades locales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
