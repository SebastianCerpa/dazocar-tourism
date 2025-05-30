import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import { AnimatedSection } from "./components/AnimatedSection";
import CarouselComponent from "./components/CarouselComponent";
import Image from "next/image";

export default function Home() {
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
              <a href="/tours" className="cta-button">
                Descubre nuestros Tours
              </a>
            </div>
          </div>
        </div>

        <AnimatedSection className="home-about">
          <div className="container">
            <div className="about-wrapper">
              <div className="about-text">
                <h2>Acerca de Dazocar</h2>
                <p>
                  Con más de dos décadas de experiencia, nos especializamos en
                  crear viajes inolvidables a través de los paisajes más
                  impresionantes de Chile. Nuestra pasión por los viajes y
                  nuestro profundo conocimiento de la cultura chilena garantizan
                  experiencias auténticas que van más allá del turismo típico.
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
              <CarouselComponent
                slides={[
                  {
                    image: "/images/torres.jpg",
                    icon: "/images/logo.png",
                    title: "Torres del Paine",
                    description:
                      "Explore the majestic peaks and glaciers of Patagonia",
                  },
                  {
                    image: "/images/desierto.jpg",
                    icon: "/images/logo.png",
                    title: "Atacama Desert",
                    description:
                      "Discover the world driest desert and its starry skies",
                  },
                  {
                    image: "/images/valparaiso.jpg",
                    icon: "/images/logo.png",
                    title: "Valparaíso",
                    description: "Uncover the mysteries of the Moai statues",
                  },
                  {
                    image: "/images/viñedos.jpg",
                    icon: "/images/logo.png",
                    title: "Tour Viñedos",
                    description: "Taste world-class wines in scenic vineyards",
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
                <div className="business-feature-number">01</div>
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
                <div className="business-feature-number">02</div>
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
                <div className="business-feature-number">03</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
