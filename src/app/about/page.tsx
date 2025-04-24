import React from 'react';
import '../styles/globals.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
    <div className="about-section">
      <div className="about-hero hero">
        <div className="hero-content">
          <h1>About Dazocar</h1>
          <p>Discover the story behind our passion for showcasing Chile beauty</p>
        </div>
      </div>

      <div className="about-content">
        <section className="mission-vision">
          <div className="section-container">
            <h2>Our Mission</h2>
            <p>
              At Chile Tourism, our mission is to showcase the incredible diversity and beauty of Chile to the world. 
              We strive to promote sustainable tourism that respects local communities and preserves the natural environment.
              Through authentic experiences and responsible travel, we aim to create meaningful connections between visitors and Chile rich culture and landscapes.
            </p>
          </div>
        </section>

        <section className="company-story">
          <div className="section-container">
            <h2>Our Story</h2>
            <p>
              Founded in 2010 by a group of passionate Chilean travel enthusiasts, Chile Tourism began as a small initiative to highlight the lesser-known wonders of our country.
              Over the years, we have grown into a leading tourism platform, helping thousands of travelers discover the magic of Chile from the otherworldly landscapes of the Atacama Desert to the pristine wilderness of Patagonia.
              Our journey has been guided by a deep love for Chile natural beauty and cultural heritage, and a commitment to sharing it with the world in a responsible way.
            </p>
          </div>
        </section>

        <section className="values-section">
          <div className="section-container">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Sustainability</h3>
                <p>We promote eco-friendly tourism practices that preserve Chile natural environments for future generations.</p>
              </div>
              <div className="value-card">
                <h3>Authenticity</h3>
                <p>We showcase the real Chile, connecting visitors with genuine local experiences and traditions.</p>
              </div>
              <div className="value-card">
                <h3>Respect</h3>
                <p>We honor the diverse cultures, communities, and ecosystems that make Chile unique.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="section-container">
            <h2>Our Team</h2>
            <p>
              Our diverse team of travel experts, local guides, and tourism professionals shares a common passion: 
              showcasing the best of Chile to the world. With deep knowledge of the country geography, culture, 
              and hidden gems, we are dedicated to creating unforgettable experiences for every traveler.
            </p>
            {/* You can add team member cards or photos here */}
          </div>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutPage;
