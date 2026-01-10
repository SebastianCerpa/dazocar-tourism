import React from "react";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AnimatedSection } from "../components/AnimatedSection";

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="about-section">

        <section className="company-story">
          <div className="section-container story-content">
            <div className="story-text">
              <h2>Nuestra Historia</h2>
              <p>
                Fundada en 2010 por un grupo de apasionados entusiastas chilenos
                de los viajes, Chile Tourism comenzó como una pequeña iniciativa para
                destacar las maravillas menos conocidas de nuestro país. A lo largo de
                los años, hemos crecido hasta convertirnos en una plataforma turística líder,
                ayudando a miles de viajeros a descubrir la magia de Chile, desde los
                paisajes de otro mundo del Desierto de Atacama hasta la naturaleza
                prístina de la Patagonia. Nuestro viaje ha sido guiado por un profundo
                amor por la belleza natural y el patrimonio cultural de Chile, y un
                compromiso de compartirlo con el mundo de manera responsable.
              </p>
            </div>
            <div className="story-image">
              <img
                src="/images/about.jpg"
                alt="Chilean landscapes and tourism experiences"
                className="about-img"
              />
            </div>
          </div>
        </section>

        <div className="about-content">
          <AnimatedSection>
            <section className="mission-vision">
              <div className="section-container story-content">
                <div className="story-text">
                  <h2>Nuestra Misión</h2>
                  <p>
                    En Chile Tourism, nuestra misión es mostrar la increíble
                    diversidad y belleza de Chile al mundo. Nos esforzamos por
                    promover un turismo sostenible que respete las comunidades locales
                    y preserve el medio ambiente natural. A través de experiencias
                    auténticas y viajes responsables, buscamos crear
                    conexiones significativas entre los visitantes y la rica
                    cultura y paisajes de Chile.
                  </p>
                </div>
                <div className="story-image">
                  <img
                    src="/images/mission.jpg"
                    alt="Our mission to promote sustainable tourism in Chile"
                    className="about-img"
                  />
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <section className="values-section">
              <div className="section-container">
                <h2>Nuestros Valores</h2>
                <div className="values-grid">
                  <div className="value-card">
                    <div className="value-icon">
                      <img
                        src="/images/sustainability-icon.svg"
                        alt="Sustainability icon"
                      />
                    </div>
                    <h3>Sostenibilidad</h3>
                    <p>
                      Promovemos prácticas turísticas ecológicas que preservan
                      los entornos naturales de Chile para las generaciones futuras.
                    </p>
                    <div className="value-image">
                      <img
                        src="/images/Sustainability.jpg"
                        alt="Sustainable tourism in Chile"
                      />
                    </div>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">
                      <img
                        src="/images/authenticity-icon.svg"
                        alt="Authenticity icon"
                      />
                    </div>
                    <h3>Autenticidad</h3>
                    <p>
                      Mostramos el Chile real, conectando a los visitantes con
                      experiencias y tradiciones locales genuinas.
                    </p>
                    <div className="value-image">
                      <img
                        src="/images/Authenticity.jpg"
                        alt="Authentic Chilean experiences"
                      />
                    </div>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">
                      <img src="/images/respect-icon.svg" alt="Respect icon" />
                    </div>
                    <h3>Respeto</h3>
                    <p>
                      Honramos las diversas culturas, comunidades y ecosistemas
                      que hacen de Chile un lugar único.
                    </p>
                    <div className="value-image">
                      <img
                        src="/images/Respect.jpg"
                        alt="Respecting Chilean ecosystems"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <section className="team-section">
              <div className="section-container">
                <h2>Nuestro Equipo</h2>
                <p>
                  Nuestro diverso equipo de expertos en viajes, guías locales y
                  profesionales del turismo comparten una pasión común: mostrar lo mejor de
                  Chile al mundo. Con un profundo conocimiento de la
                  geografía, cultura y joyas ocultas del país, estamos dedicados a
                  crear experiencias inolvidables para cada viajero.
                </p>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
