import React from "react";
import "../styles/globals.css";
import "../styles/services.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AnimatedSection } from "../components/AnimatedSection";

// Sample service data - in a real app, this would come from an API or CMS
const services = [
  {
    id: 1,
    name: "Personalized Service",
    category: "Premium",
    description:
      "Tailored travel experiences designed specifically for your preferences and interests. Our personalized service includes private guides, customized itineraries, and exclusive access to unique locations throughout Chile.",
    image: "/images/serv-personalizado.png", 
    features: ["Private Guides", "Custom Itineraries", "Luxury Transportation"],
  },
  {
    id: 2,
    name: "Standardized Service",
    category: "Classic",
    description:
      "Our most popular option offering well-planned group tours to Chile's iconic destinations. These services follow carefully crafted itineraries with professional guides and comfortable accommodations.",
    image: "/images/serv-standar.png", 
    features: ["Group Tours", "Fixed Itineraries", "Professional Guides"],
  },
  {
    id: 3,
    name: "Family Service",
    category: "Specialized",
    description:
      "Family-friendly adventures designed with children and parents in mind. These services include age-appropriate activities, family accommodations, and guides experienced in working with children of all ages.",
    image: "/images/serv-family.png", 
    features: ["Kid-Friendly Activities", "Family Accommodations", "Educational Experiences"],
  },
  {
    id: 4,
    name: "Business Service",
    category: "Corporate",
    description:
      "Professional services for corporate clients including team-building retreats, conference planning, and executive tours. We handle all logistics while maintaining the highest standards of professionalism and comfort.",
    image: "/images/serv-business.jpg", 
    features: ["Corporate Retreats", "Conference Planning", "Executive Transportation"],
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="services-section">

        <AnimatedSection>
          <section className="services-intro">
            <div className="section-container story-content">
              <div className="story-text">
                <h2>Explore Chile With Us</h2>
                <p>
                  At Dazocar, we offer a wide range of tourism services designed
                  to showcase the best of Chile diverse landscapes and rich
                  cultural heritage. From the otherworldly Atacama Desert in the
                  north to the pristine wilderness of Patagonia in the south,
                  our expert-guided tours and customized travel experiences
                  ensure unforgettable adventures for every type of traveler.
                </p>
                <p>
                  Whether you are seeking adrenaline-pumping outdoor activities,
                  cultural immersion, culinary delights, or simply the chance to
                  witness breathtaking natural wonders, our team of local
                  experts will craft the perfect Chilean experience tailored to
                  your interests and preferences.
                </p>
              </div>
              <div className="story-image">
                <img
                  src="/images/chile-map.jpg"
                  alt="Map of Chile highlighting tourist destinations"
                  className="about-img"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="values-section">
            <div className="section-container">
              <h2>Our Services</h2>
              <p className="section-description">
                We offer a range of specialized services to meet the needs of every traveler,
                from personalized luxury experiences to family-friendly adventures
              </p>
              <div className="values-grid">
                {services.map((service) => (
                  <div className="value-card" key={service.id}>
                    <h3>{service.name}</h3>
                    <span className="destination-region">
                      {service.category}
                    </span>
                    <p>{service.description}</p>
                    <div className="value-image">
                      <img
                        src={service.image}
                        alt={`${service.name} - ${service.category} service`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="team-section">
            <div className="section-container">
              <h2>Ready to Experience Chile?</h2>
              <p>
                Contact our travel experts today to start planning your perfect
                Chilean adventure. We will help you create a customized
                itinerary that matches your interests, timeframe, and budget.
              </p>
              <button className="cta-button">Contact Us</button>
            </div>
          </section>
        </AnimatedSection>
      </div>
      <Footer />
    </>
  );
}
