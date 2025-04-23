import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Contact Us</h1>
              <p>Get in touch to plan your Chilean adventure</p>
            </div>
          </div>
        </div>
        <div className="container">
          {/* Add your contact form or contact information here */}
        </div>
      </main>
      <Footer />
    </>
  );
}
