"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
  return (
    <li>
      <Link href={href} onClick={onClick}>
        {label}
      </Link>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  // Detectar cuando el componente está montado
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Cerrar menú cuando se cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo-navbar.png"
              alt="Dazocar Logo"
              width={120}
              height={40}
              priority
            />
          </Link>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menú de navegación"
          aria-expanded={isMounted ? isMenuOpen : false}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navLinks ${isMenuOpen ? "active" : ""}`}>
          <NavLink href="/" label="Home" onClick={closeMenu} />
          <NavLink href="/about" label="About" onClick={closeMenu} />
          <NavLink href="/services" label="Services" onClick={closeMenu} />
          <NavLink href="/contact" label="Contact" onClick={closeMenu} />
        </ul>
      </nav>

      {isMounted && (
        <div
          className={`overlay ${isMenuOpen ? "active" : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
};

export default Navbar;
