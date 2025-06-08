"use client";

import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import "../styles/services.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AnimatedSection } from "../components/AnimatedSection";
import Image from "next/image";

interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch("/api/services");
      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }
      const data = await response.json();
      setServices(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

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
                <Image
                  src="/images/chile-map.jpg"
                  alt="Map of Chile highlighting tourist destinations"
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
              <h2>Our Services</h2>
              <p className="section-description">
                We offer a range of specialized services to meet the needs of
                every traveler, from personalized luxury experiences to
                family-friendly adventures
              </p>

              {loading && (
                <div className="loading-container">
                  <p>Loading services...</p>
                </div>
              )}

              {error && (
                <div className="error-container">
                  <p>Error: {error}</p>
                </div>
              )}

              {!loading && !error && (
                <div className="values-grid">
                  {services.map((service, index) => (
                    <div
                      className="value-card"
                      key={service.id}
                      data-number={`0${index + 1}`}
                    >
                      <div className="value-card-content">
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                      </div>
                      <div className="value-image">
                        <Image
                          src={service.image}
                          alt={`${service.name} service`}
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
                  ))}
                </div>
              )}
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
