import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import { AnimatedSection } from "./components/AnimatedSection";
import CarouselComponent from './components/CarouselComponent';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <AnimatedSection className="hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Descubre Chile con Dazocar</h1>
              <p>
                Del desierto de Atacama a los glaciares de la Patagonia,
                descubra los paisajes más diversos de Sudamérica
              </p>
              <a href="/tours" className="cta-button">
                Descubre nuestros Tours
              </a>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="home-about">
          <div className="container">
            <div className="about-wrapper">
              <div className="about-text">
                <h2>Acerca de Gayzocar</h2>
                <p>
                  Con más de dos décadas de experiencia, nos especializamos en
                  crear viajes inolvidables a través de los paisajes más
                  impresionantes de Chile. Nuestra pasión por los viajes y
                  nuestro profundo conocimiento de la cultura chilena garantizan
                  experiencias auténticas que van más allá del turismo típico.
                </p>
                <div className="about-buttons">
                  <Link href="/about" className="learn-more-btn">
                    Learn More About Us
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

        <div className="container">
          <AnimatedSection className="featured-destinations">
            <h2>Destinos Populares</h2>
            <CarouselComponent 
              slides={[
                {
                  image: '/images/torres.jpg',
                  icon: '/images/mountain-icon.svg',
                  title: 'Torres del Paine',
                  description: 'Explore the majestic peaks and glaciers of Patagonia'
                },
                {
                  image: '/images/desierto.jpg',
                  icon: '/images/desert-icon.svg',
                  title: 'Atacama Desert',
                  description: 'Discover the world driest desert and its starry skies'
                },
                {
                  image: '/images/valparaiso.jpg',
                  icon: '/images/statue-icon.svg',
                  title: 'Valparaíso',
                  description: 'Uncover the mysteries of the Moai statues'
                },
                {
                  image: '/images/viñedos.jpg',
                  icon: '/images/wine-icon.svg',
                  title: 'Tour Viñedos',
                  description: 'Taste world-class wines in scenic vineyards'
                }
              ]}
            />
          </AnimatedSection>

          <AnimatedSection className="why-choose-us">
            <h2>¿Por qué elegirnos?</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>Guías locales Expertos</h3>
                <p>
                  Nuestros guías conoces cada rincón de Chile y te guiarán
                  desde el primer momento.
                </p>
              </div>
              <div className="feature">
                <h3>Experiencia Personalizada</h3>
                <p>Los tours son desarrollados de acuerdo a su necesidad</p>
              </div>
              <div className="feature">
                <h3>Turismo Sustentable</h3>
                <p> Comprometidos con la preservación de la belleza natural de Chile </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
