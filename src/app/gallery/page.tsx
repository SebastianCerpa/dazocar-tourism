import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="page-header">
          <div className="header-content">
            <h1>Gallery</h1>
            <p>Visual journey through Chile most beautiful destinations</p>
          </div>
        </div>
        <div className="container">{/* Add your gallery content here */}</div>
      </main>
      <Footer />
    </>
  );
}
