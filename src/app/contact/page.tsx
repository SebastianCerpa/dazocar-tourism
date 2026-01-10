'use client';

import React, { useState } from 'react';
import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AnimatedSection } from "../components/AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Set loading state
      setFormStatus({
        submitted: false,
        error: false,
        message: 'Enviando mensaje...'
      });

      // Send form data to the API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle different error status codes
        if (response.status === 400) {
          throw new Error('Por favor, verifica que todos los campos estén completos y correctos.');
        } else if (response.status === 429) {
          throw new Error('Has enviado demasiados mensajes. Por favor, espera unos minutos e intenta de nuevo.');
        } else if (response.status >= 500) {
          throw new Error('Nuestro servidor está experimentando problemas. Por favor, intenta de nuevo más tarde.');
        }

        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al enviar el formulario');
      }

      // Success
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Gracias por su mensaje. Nos pondremos en contacto con usted en breve.'
      });

      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);

      // Categorize errors for better user feedback
      let errorMessage = 'Error al enviar el formulario. Por favor, inténtelo de nuevo.';

      if (error instanceof TypeError && error.message.includes('fetch')) {
        // Network error
        errorMessage = 'No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet e intenta de nuevo.';
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setFormStatus({
        submitted: true,
        error: true,
        message: errorMessage
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="container contact-container">
          <AnimatedSection className="contact-section">
            <div className="contact-grid">
              <div className="contact-form-container">
                <h2>Envíanos un Mensaje</h2>
                {formStatus.submitted ? (
                  <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                    {formStatus.message}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="name">Tu nombre</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Ingresa tu nombre completo"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Correo electrónico</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Ingresa tu correo electrónico"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Asunto</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="¿De qué trata su consulta?"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Mensaje</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="¿Cómo podemos ayudarte?"
                      ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                      Enviar Mensaje
                    </button>
                  </form>
                )}
              </div>

              <div className="contact-info">
                <h2>Information de Contacto</h2>
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">
                      <img src="/images/icons/location-icon.svg" alt="Location" />
                    </div>
                    <div className="info-content">
                      <h3>Nuestra Oficina</h3>
                      <p>Av. Providencia 1208, Santiago, Chile</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <img src="/images/icons/phone-icon.svg" alt="Phone" />
                    </div>
                    <div className="info-content">
                      <h3>Números de Contacto</h3>
                      <p>+56 2 2123 4567</p>
                      <p>+56 9 8765 4321</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <img src="/images/icons/email-icon.svg" alt="Email" />
                    </div>
                    <div className="info-content">
                      <h3>Email</h3>
                      <p>info@chiletourism.com</p>
                      <p>bookings@chiletourism.com</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <img src="/images/icons/clock-icon.svg" alt="Hours" />
                    </div>
                    <div className="info-content">
                      <h3>Horario</h3>
                      <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="map-section" delay={0.2}>
            <h2>Encuentranos</h2>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2478740619513!2d-70.7156774!3d-33.4002208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c6b18aacedff%3A0xf809da7a11cda3a!2s11%20de%20Septiembre%204381%2C%208650321%20Renca%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1sen!2scl!4v1715107507!5m2!1sen!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office location map"
                aria-label="Google Maps showing our office location"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />

    </>
  );
}
