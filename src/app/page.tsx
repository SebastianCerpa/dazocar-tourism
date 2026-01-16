"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import { AnimatedSection } from "./components/AnimatedSection";
import CarouselComponent from "./components/CarouselComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faUserGear,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
                    Contáctenos
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
              <CarouselComponent
                slides={[
                  {
                    image: "/images/torres.jpg",
                    icon: "/images/logo.png",
                    title: "Torres del Paine",
                    description:
                      "Explora los majestuosos picos y glaciares de la Patagonia",
                  },
                  {
                    image: "/images/desierto.jpg",
                    icon: "/images/logo.png",
                    title: "Desierto de Atacama",
                    description:
                      "Descubre el desierto más árido del mundo y sus cielos estrellados",
                  },
                  {
                    image: "/images/valparaiso.jpg",
                    icon: "/images/logo.png",
                    title: "Valparaíso",
                    description: "Descubre los misterios de las estatuas Moai",
                  },
                  {
                    image: "/images/viñedos.jpg",
                    icon: "/images/logo.png",
                    title: "Tour Viñedos",
                    description: "Degusta vinos de clase mundial en viñedos pintorescos",
                  },
                ]}
              />
              <Link href="/destinations" className="learn-more-btn">
                Descubre más
              </Link>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection className="why-choose-us-business">
          <div className="container">
            <h2>¿Por qué elegirnos?</h2>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faMapLocationDot} className="fa-icon" />
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faUserGear} className="fa-icon" />
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faLeaf} className="fa-icon" />
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
