import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Close mobile drawer if route changes during render
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMenuOpen(false);
  }

  const isContactActive = location.pathname === '/contact';

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" aria-label="Sunny Steps Preschool Home">
          <img src="/SUNSTEP.svg" alt="Sunny Steps Preschool" className="navbar-logo-img" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav-desktop" aria-label="Main Navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/program"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            Programs
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
          >
            Our Team
          </NavLink>
        </nav>

        {/* CTA Enquire Action: Bold Orange Button */}
        <div className="navbar-actions-desktop">
          <Link
            to="/contact"
            className={`btn btn-orange ${isContactActive ? 'btn-nav-active' : ''}`}
          >
            <span>Enquire Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`navbar-burger ${menuOpen ? 'burger-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={menuOpen}
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      <div className={`navbar-drawer ${menuOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-inner">
          <nav className="drawer-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `drawer-link ${isActive ? 'drawer-link-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/program"
              className={({ isActive }) => `drawer-link ${isActive ? 'drawer-link-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Programs
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => `drawer-link ${isActive ? 'drawer-link-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) => `drawer-link ${isActive ? 'drawer-link-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Our Team
            </NavLink>
            <NavLink
              to="/contact"
              className="drawer-link drawer-cta-link"
              onClick={() => setMenuOpen(false)}
            >
              Enquire Now →
            </NavLink>
          </nav>
          <div className="drawer-contact-quick">
            <p>📞 <strong>Admissions:</strong> +91 98765 43210</p>
            <p>📍 <strong>Campus:</strong> Green Meadows Colony, Pune</p>
          </div>
        </div>
      </div>
    </header>
  );
}
