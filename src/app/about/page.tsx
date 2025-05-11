import React from "react";
import "../styles/globals.css";
// Values styles are now in globals.css
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AnimatedSection } from "../components/AnimatedSection";

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="about-section">
        <div className="container" style={{padding: "3rem 0"}}>
          <h1 style={{textAlign: "center", marginBottom: "1rem"}}>About Dazocar</h1>
          <p style={{textAlign: "center", maxWidth: "700px", margin: "0 auto 2rem"}}>
            Discover the story behind our passion for showcasing Chile beauty
          </p>
        </div>

        <section className="company-story">
          <div className="section-container story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010 by a group of passionate Chilean travel
                enthusiasts, Chile Tourism began as a small initiative to
                highlight the lesser-known wonders of our country. Over the
                years, we have grown into a leading tourism platform, helping
                thousands of travelers discover the magic of Chile from the
                otherworldly landscapes of the Atacama Desert to the pristine
                wilderness of Patagonia. Our journey has been guided by a deep
                love for Chile natural beauty and cultural heritage, and a
                commitment to sharing it with the world in a responsible way.
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
                  <h2>Our Mission</h2>
                  <p>
                    At Chile Tourism, our mission is to showcase the incredible
                    diversity and beauty of Chile to the world. We strive to
                    promote sustainable tourism that respects local communities
                    and preserves the natural environment. Through authentic
                    experiences and responsible travel, we aim to create
                    meaningful connections between visitors and Chile rich
                    culture and landscapes.
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
                <h2>Our Values</h2>
                <div className="values-grid">
                  <div className="value-card">
                    <div className="value-icon">
                      <img
                        src="/images/sustainability-icon.svg"
                        alt="Sustainability icon"
                      />
                    </div>
                    <h3>Sustainability</h3>
                    <p>
                      We promote eco-friendly tourism practices that preserve
                      Chile natural environments for future generations.
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
                    <h3>Authenticity</h3>
                    <p>
                      We showcase the real Chile, connecting visitors with
                      genuine local experiences and traditions.
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
                    <h3>Respect</h3>
                    <p>
                      We honor the diverse cultures, communities, and ecosystems
                      that make Chile unique.
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
                <h2>Our Team</h2>
                <p>
                  Our diverse team of travel experts, local guides, and tourism
                  professionals shares a common passion: showcasing the best of
                  Chile to the world. With deep knowledge of the country
                  geography, culture, and hidden gems, we are dedicated to
                  creating unforgettable experiences for every traveler.
                </p>
                {/* You can add team member cards or photos here */}
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
