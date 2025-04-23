import React from "react";
import { useEffect } from "react"; // For simple animations

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
}) => {
  useEffect(() => {
    // Simple fade-in animation on mount
    const heroElement = document.querySelector(".hero");
    if (heroElement) {
      heroElement.classList.add("fade-in");
    }
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {ctaText && ctaLink && (
            <a href={ctaLink} className="cta-button">
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
