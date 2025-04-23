import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Our Services</h1>
              <p>Discover our range of travel experiences in Chile</p>
            </div>
          </div>
        </div>
        <div className="container">{/* Add your services content here */}</div>
      </main>
      <Footer />
    </>
  );
}
