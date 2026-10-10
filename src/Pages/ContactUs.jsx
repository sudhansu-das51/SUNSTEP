import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './ContactUs.css';

// ==========================================
// CONSTANTS & CONTENT
// ==========================================
const WHATSAPP_NUMBER = "919876543210";

const IMAGES = {
  entrance: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
  counselor: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
};

const PROGRAM_MAP = {
  'playgroup': 'Playgroup',
  'nursery': 'Nursery',
  'jr-kg': 'Jr. KG',
  'sr-kg': 'Sr. KG'
};

export default function ContactUs() {
  const [searchParams] = useSearchParams();
  const rawProgramParam = searchParams.get('program') || '';
  const initialProgram = PROGRAM_MAP[rawProgramParam.toLowerCase()] || '';

  // Form State
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    program: initialProgram,
    phone: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  // Sync state if query param changes during render
  const [prevParam, setPrevParam] = useState(rawProgramParam);
  if (prevParam !== rawProgramParam) {
    setPrevParam(rawProgramParam);
    if (initialProgram) {
      setFormData((prev) => ({ ...prev, program: initialProgram }));
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.parentName || !formData.childName || !formData.program || !formData.phone || !formData.email) {
      setFormError("Please fill out all required fields marked with *.");
      return;
    }
    setFormError("");
    setSubmitted(true);
    setFormData({
      parentName: "",
      childName: "",
      program: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact-page">
      {/* 1. PAGE HEADER */}
      <section className="page-header">
        {/* Static Doodles */}
        <div className="doodle-shape" style={{ top: 22, left: '6%' }} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FEC200" strokeWidth="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div className="doodle-circle" style={{ bottom: 20, right: '7%', width: 20, height: 20, background: '#BEE3F8' }} aria-hidden="true"></div>

        <div className="container page-header-inner">
          <div className="badge badge-yellow">
            <span>Connect With Us</span>
          </div>
          <h1>Begin Your Child's Journey Today</h1>
          <p>
            We would love to welcome your family for a warm cup of tea and an unhurried walkthrough of our sunny campus.
          </p>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN SECTION */}
      <section className="contact-main-section">
        {/* Static Doodles */}
        <div className="doodle-shape" style={{ top: 40, right: '3%' }} aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF5FA2" strokeWidth="2.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <div className="doodle-circle" style={{ bottom: 80, left: '3%', width: 24, height: 24, background: '#FFEAA7' }} aria-hidden="true"></div>

        <div className="container">
          <div className="contact-grid">
            {/* LEFT COLUMN: ENQUIRY FORM */}
            <div className="contact-form-card card">
              <div className="contact-form-header">
                <div className="badge badge-orange">
                  <span>Admissions Enquiry</span>
                </div>
                <h2>Send Us a Message</h2>
                <p>Fill out the details below and our admissions head will reach out within 24 hours.</p>
              </div>

              {submitted && (
                <div className="contact-alert contact-alert-success">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <div>
                    <strong>Thank you! Your enquiry has been received.</strong>
                    <div style={{ fontSize: "0.88rem", marginTop: "2px", fontWeight: 500 }}>
                      Our counselors will call you shortly to schedule your campus tour.
                    </div>
                  </div>
                </div>
              )}

              {formError && (
                <div className="contact-alert contact-alert-error">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-label">
                      Parent's Full Name <span className="contact-req">*</span>
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Radhika Sharma"
                      className="contact-input"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-label">
                      Child's Name <span className="contact-req">*</span>
                    </label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      placeholder="e.g. Vihaan"
                      className="contact-input"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-label">
                    Child's Age / Program <span className="contact-req">*</span>
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="contact-select"
                    required
                  >
                    <option value="" disabled>Select appropriate grade / age band</option>
                    <option value="Playgroup">Playgroup (1.5 – 2.5 yrs)</option>
                    <option value="Nursery">Nursery (2.5 – 3.5 yrs)</option>
                    <option value="Jr. KG">Jr. KG (3.5 – 4.5 yrs)</option>
                    <option value="Sr. KG">Sr. KG (4.5 – 5.5 yrs)</option>
                  </select>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-label">
                      Phone Number <span className="contact-req">*</span>
                    </label>
                    <div className="contact-phone-group">
                      <span className="contact-phone-prefix">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        className="contact-phone-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label className="contact-label">
                      Email Address <span className="contact-req">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      className="contact-input"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-label">
                    Message / Specific Queries
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your child's interests, dietary preferences, or timing questions..."
                    className="contact-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-orange contact-submit-btn">
                  <span>Send Enquiry</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>

                <p className="contact-privacy-note">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>We respect your family's privacy. Your contact details are strictly confidential.</span>
                </p>
              </form>
            </div>

            {/* RIGHT COLUMN: 3 INFO CARDS & WHATSAPP */}
            <div className="contact-side">
              {/* Card 1: Visit Us with Real Campus Gate Photo */}
              <div className="contact-info-card card-visit card">
                <div className="contact-info-icon-box icon-yellow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FEC200" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h3>Visit Our Campus</h3>
                  <p>
                    14 Sunflower Lane, Green Meadows Colony,<br />
                    Near Central Park, Pune 411001
                  </p>
                  <div className="contact-entrance-thumb">
                    <img src={IMAGES.entrance} alt="Campus Gate" />
                    <span>Main Entrance Gate</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Call Us (With Counselor Photo) */}
              <div className="contact-info-card card-call card">
                <div className="contact-info-icon-box icon-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D6EFD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-info-content">
                  <div className="contact-counselor-row">
                    <div className="contact-counselor-avatar">
                      <img src={IMAGES.counselor} alt="Admissions counselor" />
                    </div>
                    <div>
                      <h3>Call Admissions</h3>
                      <p className="contact-highlight-link link-blue">+91 98765 43210</p>
                    </div>
                  </div>
                  <span className="contact-time-badge badge badge-blue">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Mon–Sat, 9:00 AM – 4:00 PM</span>
                  </span>
                </div>
              </div>

              {/* Card 3: Email Us */}
              <div className="contact-info-card card-email card">
                <div className="contact-info-icon-box icon-orange">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h3>Email Directly</h3>
                  <p className="contact-highlight-link link-orange">
                    admissions@sunnystepspreschool.edu
                  </p>
                  <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", marginTop: "4px" }}>
                    Quick response for admissions &amp; paperwork
                  </p>
                </div>
              </div>

              {/* Green WhatsApp Action */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-btn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.477-.15-.678.15-.201.3-.778.979-.954 1.18-.176.2-.352.226-.653.076-.3-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.176.2-.301.301-.501.101-.201.05-.377-.025-.527-.076-.151-.678-1.634-.929-2.237-.245-.588-.494-.508-.678-.518-.176-.01-.377-.01-.578-.01-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.08 2.912 1.23 3.113c.15.201 2.125 3.245 5.148 4.551.719.311 1.28.497 1.718.636.722.23 1.379.197 1.899.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352z" />
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.08L2 22l5.08-1.34A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2a8.16 8.16 0 0 1-4.17-1.14l-.3-.18-3.09.81.83-3.01-.2-.31A8.18 8.18 0 1 1 12 20.2z" />
                </svg>
                <span>Chat Instantly on WhatsApp</span>
              </a>

              {/* Social Media Row */}
              <div className="contact-social-row card">
                <span>Connect with our community:</span>
                <div className="contact-social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAMPUS MAP PLACEHOLDER SECTION */}
      <section className="contact-map-sec">
        <div className="container">
          <div className="contact-map-header">
            <div className="badge badge-blue">
              <span>Campus Location</span>
            </div>
            <h2>Visit Our Sprawling Campus</h2>
            <p>
              Safe pickup zones, sensory gardens, and bright open classrooms just 5 minutes from Central Park.
            </p>
          </div>

          <div className="contact-map-card card">
            <div className="contact-map-canvas">
              {/* Botanical park */}
              <div className="contact-map-park">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9s-9-4.03-9-9a9 9 0 0 1 9-9z" />
                </svg>
                <span>Central Park Botanical Grounds</span>
              </div>

              {/* Lake */}
              <div className="contact-map-lake"></div>

              {/* Horizontal road */}
              <div className="contact-map-road-h">
                <span>SUNFLOWER LANE →</span>
              </div>

              {/* Vertical road */}
              <div className="contact-map-road-v"></div>

              {/* Campus Pin with tooltip */}
              <div className="contact-map-pin-wrap">
                <div className="contact-map-tooltip">
                  <div className="contact-map-tt-title">Sunny Steps Campus</div>
                  <div className="contact-map-tt-sub">14 Sunflower Lane, Green Meadows Colony</div>
                  <span className="badge badge-blue" style={{ marginTop: "6px", fontSize: "0.78rem" }}>
                    Open for Tours
                  </span>
                </div>

                <div className="contact-map-pin">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom info strip */}
            <div className="contact-map-strip">
              <div className="contact-map-strip-text">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <span>Conveniently reachable via Green Meadows Main Road. Landmark: Opposite Blossom Library.</span>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-purple contact-directions-btn"
              >
                <span>Get Driving Directions</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
