import React from "react";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AnimatedSection } from "../components/AnimatedSection";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="about-section">
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
              <Image
                src="/images/about.jpg"
                alt="Chilean landscapes and tourism experiences"
                className="about-img"
                width={500}
                height={400}
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
                  <Image
                    src="/images/mission.jpg"
                    alt="Our mission to promote sustainable tourism in Chile"
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
                <h2>Our Values</h2>
                <div className="values-grid">
                  <div className="value-card">
                    <div className="value-icon">
                      <Image
                        src="/images/sustainability-icon.svg"
                        alt="Sustainability icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h3>Sustainability</h3>
                    <p>
                      We promote eco-friendly tourism practices that preserve
                      Chile natural environments for future generations.
                    </p>
                    <div className="value-image">
                      <Image
                        src="/images/Sustainability.jpg"
                        alt="Sustainable tourism in Chile"
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
                  <div className="value-card">
                    <div className="value-icon">
                      <Image
                        src="/images/authenticity-icon.svg"
                        alt="Authenticity icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h3>Authenticity</h3>
                    <p>
                      We showcase the real Chile, connecting visitors with
                      genuine local experiences and traditions.
                    </p>
                    <div className="value-image">
                      <Image
                        src="/images/Authenticity.jpg"
                        alt="Authentic Chilean experiences"
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
                  <div className="value-card">
                    <div className="value-icon">
                      <Image
                        src="/images/respect-icon.svg"
                        alt="Respect icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h3>Respect</h3>
                    <p>
                      We honor the diverse cultures, communities, and ecosystems
                      that make Chile unique.
                    </p>
                    <div className="value-image">
                      <Image
                        src="/images/Respect.jpg"
                        alt="Respecting Chilean ecosystems"
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
