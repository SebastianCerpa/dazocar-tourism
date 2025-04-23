import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero'; // Import the new component

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Chile Tours - Home</title>
        <meta name="description" content="Discover Chile with our executive vehicle services for transportation and tours." />
      </Head>
      <Hero
        title="Welcome to Chile Executive Tours"
        subtitle="Experience the beauty of Chile with our premium transportation and guided tours using executive vehicles."
        backgroundImage="/hero-image.jpg" // Replace with your actual image path in the public folder
        ctaText="Explore Services" // Optional
        ctaLink="/services" // Links to the Services page
      />
      <div className="page-section">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Professional drivers and guides</li>
          <li>Luxury vehicles for your comfort</li>
          <li>Customized itineraries</li>
        </ul>
      </div>
    </>
  );
};

export default Home;