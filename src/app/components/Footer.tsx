import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles["footer-container"]}`}>
        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>Chile Executive Tours</h3>
          <p className={styles["footer-text"]}>Descubre los paisajes más diversos de Sudamérica con nuestros tours personalizados y guías expertos locales.</p>
        </div>
        
        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>Enlaces Rápidos</h3>
          <ul className={styles["footer-links"]}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/about">Acerca de</Link></li>
            <li><Link href="/tours">Tours</Link></li>
            <li><Link href="/gallery">Galería</Link></li>
            <li><Link href="/contact">Contacto</Link></li>
          </ul>
        </div>
        
        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>Contacto</h3>
          <address className={styles["footer-contact"]}>
            <p><strong>Dirección:</strong> Av. Apoquindo 123, Santiago, Chile</p>
            <p><strong>Email:</strong> info@chileexecutivetours.com</p>
            <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
          </address>
        </div>
        
        <div className={styles["footer-section"]}>
          <h3 className={styles["footer-heading"]}>Síguenos</h3>
          <div className={styles["social-icons"]}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className={styles["social-icon"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg className={styles["social-icon"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className={styles["social-icon"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2M7.6 4C5.61 4 4 5.61 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C18.39 20 20 18.39 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6M17.25 5.5C17.94 5.5 18.5 6.06 18.5 6.75C18.5 7.44 17.94 8 17.25 8C16.56 8 16 7.44 16 6.75C16 6.06 16.56 5.5 17.25 5.5M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7M12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg className={styles["social-icon"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 15L15.19 12L10 9V15M21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles["footer-bottom"]}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Chile Executive Tours. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
