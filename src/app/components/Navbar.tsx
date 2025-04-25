'use client';
import { useState } from 'react';
import Link from 'next/link';

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
  
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };
  
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link href="/">Dazocar</Link>
        </div>
        
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`navLinks ${isMenuOpen ? 'active' : ''}`}>
          <NavLink href="/" label="Home" onClick={closeMenu} />
          <NavLink href="/about" label="About" onClick={closeMenu} />
          <NavLink href="/services" label="Services" onClick={closeMenu} />
          <NavLink href="/gallery" label="Gallery" onClick={closeMenu} />
          <NavLink href="/contact" label="Contact" onClick={closeMenu} />
        </ul>
      </nav>
      
      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;
