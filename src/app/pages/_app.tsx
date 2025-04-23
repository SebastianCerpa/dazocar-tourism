import type { AppProps } from "next/app";
import Navbar from "../components/Navbar"; // Default import
import Footer from "../components/Footer"; // Default import
import "../styles/globals.css"; // Make sure this file exists

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
