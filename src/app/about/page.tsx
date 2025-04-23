import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatedSection } from "../components/AnimatedSection";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="hero about-hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <AnimatedSection delay={0.3}>
                <h1>Our Journey in Chile</h1>
                <p>
                  Dedicated to sharing the beauty and culture of Chile with the
                  world since 2010
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>

        <div className="container">
          <section className="about-section">
            <div className="about-content">
              <div className="mission-vision">
                <h2>Our Mission</h2>
                <p>
                  To provide unforgettable experiences while promoting
                  sustainable tourism and preserving Chile natural and cultural
                  heritage for future generations.
                </p>
              </div>

              <div className="company-story">
                <h2>Our Story</h2>
                <p>
                  Founded by passionate local explorers, Chile Tours has been
                  helping travelers discover the hidden gems of Chile since
                  2010. From the otherworldly landscapes of the Atacama Desert
                  to the pristine wilderness of Patagonia, we have been crafting
                  unique journeys that showcase the best of our country.
                </p>
              </div>

              <div className="values-section">
                <h2>Our Values</h2>
                <div className="values-grid">
                  <div className="value-card">
                    <h3>Sustainability</h3>
                    <p>
                      We prioritize eco-friendly practices and support local
                      communities.
                    </p>
                  </div>
                  <div className="value-card">
                    <h3>Excellence</h3>
                    <p>
                      We strive to exceed expectations in every tour we
                      organize.
                    </p>
                  </div>
                  <div className="value-card">
                    <h3>Authenticity</h3>
                    <p>
                      We offer genuine experiences that showcase the real Chile.
                    </p>
                  </div>
                </div>
              </div>

              <div className="team-section">
                <h2>Our Team</h2>
                <p>
                  Our experienced team consists of passionate local guides,
                  travel experts, and adventure enthusiasts who are dedicated to
                  making your Chilean journey unforgettable.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
