import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Lip Blushing Delhi</h2>
          <p>Korean Esthetics</p>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#before-after" onClick={closeMenu}>Before & After</a>
          <a href="#benefits" onClick={closeMenu}>Benefits</a>
          <a href="#procedure" onClick={closeMenu}>Process</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#testimonials" onClick={closeMenu}>Reviews</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="header-actions">
          <a href="#contact" className="btn book-btn">Book Appointment</a>
          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;