import { Link } from 'react-router-dom';
import './Home.css';

// ==========================================
// CONSTANTS & CONTENT (ACCURATE REAL PRESCHOOL IMAGES)
// ==========================================
const IMAGES = {
  // Hero 4-Photo Collage (Top rectangle + 3 bottom squares)
  heroTop: "https://images.unsplash.com/photo-1578349035260-9f3d4042f1f7?auto=format&fit=crop&w=1400&q=80",
  heroSq1: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80",
  heroSq2: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80",
  heroSq3: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80",

  // About Section
  aboutStory: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
  aboutFriends: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",

  // All 6 Facilities (Each has its own real photo!)
  classroom: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
  playArea: "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=800&q=80",
  library: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
  artRoom: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
  security: "https://images.unsplash.com/photo-1474301105119-cdc36a303335?auto=format&fit=crop&w=1000&q=80",
  washrooms: "https://images.unsplash.com/photo-1595760780346-f972eb49709f?auto=format&fit=crop&w=800&q=80"
};

const TRUST_POINTS = [
  "Caring Teachers",
  "Safe Campus",
  "Play-based Learning"
];

const ABOUT_HIGHLIGHTS = [
  { label: "Experienced Teachers", badgeClass: "badge-yellow" },
  { label: "Child-friendly Curriculum", badgeClass: "badge-blue" },
  { label: "Safe & Clean Environment", badgeClass: "badge-green" }
];

const FACILITIES = [
  {
    id: "classrooms",
    title: "Bright Classrooms",
    desc: "Spacious, airy and colourful rooms with child-height tables, abundant natural light, and sensory play corners.",
    tag: "Essential",
    badgeClass: "badge-yellow",
    image: IMAGES.classroom,
    bgTone: "facility-card-yellow",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FEC200" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 12h18M12 3v18" />
      </svg>
    )
  },
  {
    id: "play-area",
    title: "Safe Play Area",
    desc: "Impact-absorbing soft foam flooring with climbing tunnels, wooden balance beams, and indoor slides.",
    tag: "Active Play",
    badgeClass: "badge-green",
    image: IMAGES.playArea,
    bgTone: "facility-card-mint",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8l6 4-6 4V8z" />
      </svg>
    )
  },
  {
    id: "library",
    title: "Story & Library Corner",
    desc: "A cosy reading haven with plush floor cushions, picture books, and daily interactive teacher storytelling.",
    tag: "Literacy",
    badgeClass: "badge-purple",
    image: IMAGES.library,
    bgTone: "facility-card-lavender",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#641C8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  },
  {
    id: "art-room",
    title: "Art & Craft Studio",
    desc: "Tactile creativity with organic washable finger paints, clay modeling tables, and child-safe easels.",
    tag: "Creativity",
    badgeClass: "badge-orange",
    image: IMAGES.artRoom,
    bgTone: "facility-card-peach",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="#FF5100" />
        <circle cx="17.5" cy="10.5" r=".5" fill="#FF5100" />
        <circle cx="8.5" cy="7.5" r=".5" fill="#FF5100" />
        <circle cx="6.5" cy="12.5" r=".5" fill="#FF5100" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.8-.4-1.3 0-1.1.9-2 2-2h2.4c3.3 0 6-2.7 6-6 0-5.5-4.5-10-10-10z" />
      </svg>
    )
  },
  {
    id: "security",
    title: "CCTV & Gated Security",
    desc: "Complete 24/7 camera surveillance, gated visitor check-in, and emergency medical kit on campus.",
    tag: "Safety",
    badgeClass: "badge-blue",
    image: IMAGES.security,
    bgTone: "facility-card-sky",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D6EFD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    )
  },
  {
    id: "washrooms",
    title: "Child-Sized Hygiene Hub",
    desc: "Low-height basins, non-slip floors, sanitized toddler toilets, and dedicated caregiver assistance.",
    tag: "Hygiene",
    badgeClass: "badge-yellow",
    image: IMAGES.washrooms,
    bgTone: "facility-card-yellow",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FEC200" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6m0 0a4 4 0 0 0-4 4v8h8v-8a4 4 0 0 0-4-4z" />
        <path d="M6 12h12" />
      </svg>
    )
  }
];

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="home-hero-section">
        {/* Static Doodle Elements (NO animation, purely visual hand-crafted feel) */}
        <div className="doodle-shape doodle-star-1" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FEC200" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div className="doodle-shape doodle-star-2" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF5100" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
          </svg>
        </div>
        <div className="doodle-shape doodle-heart-1" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FF5FA2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
        <div className="doodle-circle doodle-circle-pink" aria-hidden="true" style={{ width: 32, height: 32, background: '#FFD1E3' }}></div>
        <div className="doodle-circle doodle-circle-yellow" aria-hidden="true" style={{ width: 24, height: 24, background: '#FFEAA7' }}></div>
        <div className="doodle-circle doodle-circle-blue" aria-hidden="true" style={{ width: 20, height: 20, background: '#BEE3F8' }}></div>
        <div className="doodle-circle doodle-circle-purple" aria-hidden="true" style={{ width: 26, height: 26, background: '#E8DAFF' }}></div>

        <div className="container">
          <div className="home-hero-grid">
            {/* Left Content */}
            <div className="home-hero-content">
              <div className="badge badge-yellow home-hero-badge">
                <span>★ Admissions Open for 2026–2027</span>
              </div>

              <h1 className="home-hero-headline">
                Where Little Steps Become{' '}
                <span className="home-highlight hand-wavy-underline">
                  Big Dreams
                  <svg viewBox="0 0 200 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9C35 3 65 14 100 8C135 2 165 13 198 8" stroke="#FF5100" strokeWidth="4.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="home-hero-subtext">
                A warm, nurturing early years sanctuary where curiosity blooms through hands-on play, joyful rhythm, and unhurried encouragement.
              </p>

              <div className="home-hero-actions-wrap">
                <div className="home-hero-buttons">
                  <Link to="/contact" className="btn btn-orange">
                    <span>Schedule Campus Visit</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  <Link to="/program" className="btn btn-outline-purple">
                    <span>Explore Our Programs</span>
                  </Link>
                </div>

                {/* Hand-drawn curved arrow pointing to CTA */}
                <div className="doodle-shape doodle-curve-arrow" aria-hidden="true">
                  <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14 C28 10, 48 18, 44 38 C42 46, 32 50, 24 50" stroke="#0D6EFD" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 4" />
                    <polyline points="32 44 22 50 28 58" stroke="#0D6EFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="home-trust-points">
                {TRUST_POINTS.map((pt, i) => (
                  <div key={i} className="home-trust-item">
                    <span className="home-trust-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual: 4-Photo Collage (Top Rectangle + 3 Squares Equally Aligned) */}
            <div className="home-hero-visual">
              <div className="hero-collage-wrap">
                {/* 1. TOP RECTANGLE PHOTO CARD */}
                <div className="hero-collage-top card-backing-lavender">
                  <div className="hero-collage-img-frame">
                    <img src={IMAGES.heroTop} alt="Children happily playing and collaborating in sunny classroom" />
                  </div>
                  <div className="hero-collage-top-caption">
                    <span className="badge badge-purple">Discovery Hour</span>
                    <span className="hero-top-text">Collaborative Play &amp; Building</span>
                  </div>
                </div>

                {/* 2. THREE SQUARES EQUALLY ALIGNED UNDERNEATH */}
                <div className="hero-collage-squares-row">
                  {/* Square 1: Yellow backplate */}
                  <div className="hero-collage-sq card-backing-yellow">
                    <div className="hero-sq-img-frame">
                      <img src={IMAGES.heroSq1} alt="Little boy stacking colorful sensory rings" />
                    </div>
                    <span className="hero-sq-label">Sensory Fun</span>
                  </div>

                  {/* Square 2: Mint backplate */}
                  <div className="hero-collage-sq card-backing-mint">
                    <div className="hero-sq-img-frame">
                      <img src={IMAGES.heroSq2} alt="Smiling girl painting with bright colors" />
                    </div>
                    <span className="hero-sq-label">Little Artists</span>
                  </div>

                  {/* Square 3: Pink backplate */}
                  <div className="hero-collage-sq card-backing-pink">
                    <div className="hero-sq-img-frame">
                      <img src={IMAGES.heroSq3} alt="Happy toddler laughing with storybook" />
                    </div>
                    <span className="hero-sq-label">Story Lovers</span>
                  </div>
                </div>

                {/* Floating Happy Kids Badge */}
                <div className="home-float-badge">
                  <div className="home-float-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212529" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                    </svg>
                  </div>
                  <div>
                    <div className="home-float-val">500+</div>
                    <div className="home-float-lbl">Happy Little Learners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="home-about-section">
        {/* Subtle decorative static shapes */}
        <div className="doodle-shape doodle-about-squiggle" aria-hidden="true">
          <svg width="48" height="24" viewBox="0 0 60 20" fill="none">
            <path d="M2 10 Q15 0 30 10 T58 10" stroke="#FEC200" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <div className="doodle-circle doodle-about-dot" aria-hidden="true" style={{ width: 22, height: 22, background: '#D1F2D9' }}></div>

        <div className="container">
          <div className="home-about-grid">
            {/* Visual: Dual Warm Photo Cards */}
            <div className="home-about-visual">
              <div className="home-about-card card-backing-cream">
                <div className="home-about-photo">
                  <img src={IMAGES.aboutStory} alt="Teacher reading storybook to attentive toddlers" />
                </div>
                <div className="home-about-caption-title">Storytime with Teacher Sarah</div>
                <div className="home-about-caption-sub">Where curiosity takes flight every morning</div>
              </div>

              <div className="home-about-mini-accent-card card-backing-mint">
                <div className="home-about-mini-thumb">
                  <img src={IMAGES.aboutFriends} alt="Toddlers hugging and building social bonds" />
                </div>
                <div>
                  <div className="home-mini-title">Joyful Bonds</div>
                  <div className="home-mini-sub">Gentle social empathy</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="home-about-content">
              <div className="badge badge-purple home-about-badge">
                <span>About Sunny Steps</span>
              </div>
              <h2 className="home-about-heading">
                A Second Home for Your Little One
              </h2>
              <p className="home-about-p">
                At Sunny Steps, we believe early childhood should be unhurried and full of wonder. Our play-based curriculum introduces foundational language, numeracy, and social confidence naturally through music, tactile sand exploration, and cooperative games.
              </p>
              <p className="home-about-p">
                Every child is unique, with their own rhythm of discovery. Our certified educators cultivate an emotionally secure, cheerful environment where your child feels celebrated, listened to, and empowered to express themselves freely every day.
              </p>

              <div className="home-about-chips">
                {ABOUT_HIGHLIGHTS.map((h, i) => (
                  <div key={i} className={`home-about-chip badge ${h.badgeClass}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FACILITIES SECTION (All 6 Facilities with photos!) */}
      <section className="home-fac-section">
        <div className="container">
          <div className="home-fac-header">
            <div className="badge badge-blue home-fac-badge">
              <span>Our Campus Spaces</span>
            </div>
            <h2>Everything Your Child Needs to Learn &amp; Play</h2>
            <p>
              Thoughtfully crafted spaces designed specifically for small hands, safe steps, and limitless imagination.
            </p>
          </div>

          <div className="home-fac-grid">
            {FACILITIES.map((fac) => (
              <div key={fac.id} className={`home-facility-card card ${fac.bgTone}`}>
                <div className="home-facility-photo-wrap">
                  <img src={fac.image} alt={fac.title} />
                  <span className={`badge ${fac.badgeClass} home-facility-tag`}>
                    {fac.tag}
                  </span>
                </div>

                <div className="home-facility-body">
                  <div className="home-facility-icon-wrap">
                    {fac.icon}
                  </div>
                  <h3>{fac.title}</h3>
                  <p>{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BAND */}
      <section className="shared-cta-section">
        <div className="container">
          <div className="shared-cta-card">
            <div className="shared-cta-content">
              <h2>Give Your Child the Best Start</h2>
              <p>Schedule a warm campus visit or meet our caring teachers to see how we nurture tomorrow's dreamers.</p>
              <Link to="/contact" className="btn btn-orange">
                <span>Enquire Now</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
