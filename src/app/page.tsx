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
              <h1>Descubre Chile con Gayzocar</h1>
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
                  <span className="stat-label">Years of Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Happy Travelers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Unique Routes</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="container">
          <AnimatedSection className="featured-destinations">
            <h2>Popular Destinations</h2>
            <CarouselComponent 
              slides={[
                {
                  image: '/images/torres-del-paine.jpg',
                  icon: '/images/mountain-icon.svg',
                  title: 'Torres del Paine',
                  description: 'Explore the majestic peaks and glaciers of Patagonia'
                },
                {
                  image: '/images/atacama-desert.jpg',
                  icon: '/images/desert-icon.svg',
                  title: 'Atacama Desert',
                  description: 'Discover the world driest desert and its starry skies'
                },
                {
                  image: '/images/easter-island.jpg',
                  icon: '/images/statue-icon.svg',
                  title: 'Easter Island',
                  description: 'Uncover the mysteries of the Moai statues'
                },
                {
                  image: '/images/wine-valley.jpg',
                  icon: '/images/wine-icon.svg',
                  title: 'Wine Valleys',
                  description: 'Taste world-class wines in scenic vineyards'
                }
              ]}
            />
          </AnimatedSection>

          <AnimatedSection className="why-choose-us">
            <h2>Why Choose Chile Tours?</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>Expert Local Guides</h3>
                <p>
                  Our guides know every corner of Chile and its rich history
                </p>
              </div>
              <div className="feature">
                <h3>Customized Experiences</h3>
                <p>Tailor-made tours to match your interests and preferences</p>
              </div>
              <div className="feature">
                <h3>Sustainable Tourism</h3>
                <p>Committed to preserving Chile natural beauty</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
