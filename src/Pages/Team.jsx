import { Link } from 'react-router-dom';
import './Team.css';

// ==========================================
// CONSTANTS & CONTENT (ACCURATE REAL EDUCATOR PORTRAITS)
// ==========================================
const IMAGES = {
  principal: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  teacher1: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
  teacher2: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80",
  teacher3: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80",
  teacher4: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  teacher5: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
  teacher6: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  teacher7: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  teacher8: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=600&q=80"
};

const TEACHERS = [
  {
    name: "Ms. Anita Roy",
    role: "Playgroup Teacher",
    exp: "6 yrs experience",
    ringColor: "var(--color-yellow)",
    badgeClass: "badge-yellow",
    image: IMAGES.teacher1
  },
  {
    name: "Ms. Priya Desai",
    role: "Nursery Teacher",
    exp: "5 yrs experience",
    ringColor: "var(--color-blue)",
    badgeClass: "badge-blue",
    image: IMAGES.teacher2
  },
  {
    name: "Ms. Kavita Nair",
    role: "Jr. KG Teacher",
    exp: "7 yrs experience",
    ringColor: "var(--color-purple)",
    badgeClass: "badge-purple",
    image: IMAGES.teacher3
  },
  {
    name: "Ms. Sarah D'Souza",
    role: "Sr. KG Teacher",
    exp: "8 yrs experience",
    ringColor: "var(--color-orange)",
    badgeClass: "badge-orange",
    image: IMAGES.teacher4
  },
  {
    name: "Ms. Meera Joshi",
    role: "Art & Craft Teacher",
    exp: "4 yrs experience",
    ringColor: "var(--color-green)",
    badgeClass: "badge-green",
    image: IMAGES.teacher5
  },
  {
    name: "Mr. Rohan Mehta",
    role: "Music & Movement Teacher",
    exp: "5 yrs experience",
    ringColor: "var(--color-yellow)",
    badgeClass: "badge-yellow",
    image: IMAGES.teacher6
  },
  {
    name: "Ms. Neha Kapoor",
    role: "Activity Coordinator",
    exp: "6 yrs experience",
    ringColor: "var(--color-blue)",
    badgeClass: "badge-blue",
    image: IMAGES.teacher7
  },
  {
    name: "Ms. Sunita Patil",
    role: "Care & Wellness Assistant",
    exp: "9 yrs experience",
    ringColor: "var(--color-pink)",
    badgeClass: "badge-pink",
    image: IMAGES.teacher8
  }
];

export default function Team() {
  return (
    <div className="team-page">
      {/* 1. PAGE HEADER */}
      <section className="page-header">
        {/* Static Doodles */}
        <div className="doodle-shape" style={{ top: 22, left: '6%' }} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FEC200" strokeWidth="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div className="doodle-circle" style={{ bottom: 22, right: '8%', width: 22, height: 22, background: '#FFEAA7' }} aria-hidden="true"></div>

        <div className="container page-header-inner">
          <div className="badge badge-yellow">
            <span>Our Mentors</span>
          </div>
          <h1>Meet Our Caring Team</h1>
          <p>
            Passionate, certified educators and nurturing caregivers who treat every single child like their very own.
          </p>
        </div>
      </section>

      {/* 2. LEADERSHIP SECTION (Principal) */}
      <section className="team-lead-sec">
        {/* Static Doodles */}
        <div className="doodle-shape" style={{ top: 36, right: '4%' }} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5100" strokeWidth="2.5">
            <path d="M12 2v20M2 12h20" />
          </svg>
        </div>

        <div className="container">
          <div className="team-lead-badge-wrap">
            <div className="badge badge-purple">
              <span>School Leadership</span>
            </div>
          </div>

          <div className="team-lead-card card">
            <div className="team-lead-visual">
              <div className="team-lead-img-box">
                <img src={IMAGES.principal} alt="Mrs. Swati Sharma, Founder and Principal" />
              </div>
            </div>

            <div className="team-lead-info">
              <div className="team-lead-top">
                <div>
                  <h2>Mrs. Swati Sharma</h2>
                  <div className="team-lead-role">Founder &amp; Principal</div>
                </div>

                <div className="team-lead-quote-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              <p className="team-lead-quote">
                “At Sunny Steps, we believe early childhood should be filled with wonder, warmth, and laughter. Our role is not just to teach, but to listen, support, and help every child discover their unique spark.”
              </p>

              <div className="team-lead-pill badge badge-purple">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                <span>M.Ed. Early Childhood Education • 18+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TEACHERS SECTION (8 Members) */}
      <section className="team-teach-sec">
        <div className="container">
          <div className="team-teach-header">
            <div className="badge badge-blue">
              <span>Classroom Guides</span>
            </div>
            <h2>The People Behind the Smiles</h2>
            <p>
              Dedicated, qualified, and playful mentors nurturing curious explorers every single day.
            </p>
          </div>

          <div className="team-teach-grid">
            {TEACHERS.map((teacher, idx) => (
              <div key={idx} className="team-teach-card card">
                <div className="team-teach-photo-box" style={{ borderColor: teacher.ringColor }}>
                  <img src={teacher.image} alt={teacher.name} />
                </div>
                <h3>{teacher.name}</h3>
                <div className="team-teach-role">{teacher.role}</div>
                <div className={`team-teach-tag badge ${teacher.badgeClass}`}>
                  {teacher.exp}
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
              <h2>Come Meet Us in Person</h2>
              <p>Schedule a campus walkthrough and chat directly with our educators about your child's learning journey.</p>
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
