import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles["footer-container"]}`}>
        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>Chile Executive Tours</h3>
          <p className={styles["footer-text"]}>
            Descubre los paisajes más diversos de Sudamérica con nuestros tours
            personalizados y guías expertos locales.
          </p>
        </div>

        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>Enlaces Rápidos</h3>
          <ul className={styles["footer-links"]}>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/about">Acerca de</Link>
            </li>
            <li>
              <Link href="/tours">Tours</Link>
            </li>
            <li>
              <Link href="/gallery">Galería</Link>
            </li>
            <li>
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </div>

        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>Contacto</h3>
          <address className={styles["footer-contact"]}>
            <p>
              <strong>Dirección:</strong> Av. Apoquindo 123, Santiago, Chile
            </p>
            <p>
              <strong>Email:</strong> info@chileexecutivetours.com
            </p>
            <p>
              <strong>Teléfono:</strong> +56 9 1234 5678
            </p>
          </address>
        </div>

        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>Síguenos</h3>
          <div className={styles["social-icons"]}>
            <a
              href="https://www.tripadvisor.cl/Attraction_Review-g15349484-d26640638-Reviews-Dazocar_Transporte_y_Turismo-Providencia_Santiago_Metropolitan_Region.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
            >
              <svg
                className={styles["social-icon"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M15.5,14.25 c-0.412,0-0.74-0.335-0.74-0.75c0-0.414,0.328-0.75,0.74-0.75c0.41,0,0.75,0.336,0.75,0.75C16.25,13.915,15.91,14.25,15.5,14.25z M12,14.25c-1.242,0-2.25-1.01-2.25-2.25c0-1.242,1.008-2.25,2.25-2.25s2.25,1.008,2.25,2.25C14.25,13.24,13.242,14.25,12,14.25z M8.5,14.25c-0.41,0-0.75-0.335-0.75-0.75c0-0.414,0.34-0.75,0.75-0.75s0.74,0.336,0.74,0.75C9.24,13.915,8.91,14.25,8.5,14.25z M12,8.25c-2.07,0-3.75,1.68-3.75,3.75c0,2.07,1.68,3.75,3.75,3.75c2.07,0,3.75-1.68,3.75-3.75C15.75,9.93,14.07,8.25,12,8.25z M12,17c-2.75,0-5-2.25-5-5s2.25-5,5-5s5,2.25,5,5S14.75,17,12,17z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dzrtour/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                className={styles["social-icon"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2M7.6 4C5.61 4 4 5.61 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C18.39 20 20 18.39 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6M17.25 5.5C17.94 5.5 18.5 6.06 18.5 6.75C18.5 7.44 17.94 8 17.25 8C16.56 8 16 7.44 16 6.75C16 6.06 16.56 5.5 17.25 5.5M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7M12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg
                className={styles["social-icon"]}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10 15L15.19 12L10 9V15M21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Chile Executive Tours. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
