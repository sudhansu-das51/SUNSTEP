import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const WHATSAPP_NUMBER = "919876543210";

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Identity */}
          <div className="footer-col-brand">
            <Link to="/" className="footer-brand" aria-label="Sunny Steps Preschool Home">
              <div className="footer-logo-card">
                <img src="/SUNSTEP.svg" alt="Sunny Steps Preschool" className="footer-logo-img" />
              </div>
            </Link>

            <p className="footer-tagline">
              A joyful, loving second home where little steps become big dreams through play-based discovery and heartwarming care.
            </p>

            <div className="footer-socials">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.201.3-.778.979-.954 1.18-.176.2-.352.226-.653.076-.3-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.176.2-.301.301-.501.101-.201.05-.377-.025-.527-.076-.151-.678-1.634-.929-2.237-.245-.588-.494-.508-.678-.518-.176-.01-.377-.01-.578-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.08 2.912 1.23 3.113c.15.201 2.125 3.245 5.148 4.551.719.311 1.28.497 1.718.636.722.23 1.379.197 1.899.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352z" />
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.08L2 22l5.08-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2a8.16 8.16 0 0 1-4.17-1.14l-.3-.18-3.09.81.83-3.01-.2-.31A8.18 8.18 0 1 1 12 20.2z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-nav-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/program" className="footer-link">Programs & Curriculum</Link></li>
              <li><Link to="/gallery" className="footer-link">Campus Life & Gallery</Link></li>
              <li><Link to="/team" className="footer-link">Meet Our Teachers</Link></li>
              <li><Link to="/contact" className="footer-link">Admissions & Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Programs</h4>
            <ul className="footer-nav-list">
              <li><Link to="/contact?program=playgroup" className="footer-link">Playgroup (1.5 – 2.5 yrs)</Link></li>
              <li><Link to="/contact?program=nursery" className="footer-link">Nursery (2.5 – 3.5 yrs)</Link></li>
              <li><Link to="/contact?program=jr-kg" className="footer-link">Jr. KG (3.5 – 4.5 yrs)</Link></li>
              <li><Link to="/contact?program=sr-kg" className="footer-link">Sr. KG (4.5 – 5.5 yrs)</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="footer-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-row">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>14 Sunflower Lane, Green Meadows Colony, Near Central Park, Pune 411001</span>
              </div>
              <div className="footer-contact-row">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 98765 43210</span>
              </div>
              <div className="footer-contact-row">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>hello@sunnysteps.edu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Sunny Steps Preschool. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/contact" className="footer-legal-link">Admissions Enquiry</Link>
            <span className="footer-sep">•</span>
            <span className="footer-legal-text">Safe Campus Protocol</span>
            <span className="footer-sep">•</span>
            <span className="footer-legal-text">Parent Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
