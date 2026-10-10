import { Link } from 'react-router-dom';
import './Program.css';

// ==========================================
// CONSTANTS & CONTENT (ACCURATE REAL PRESCHOOL IMAGES)
// ==========================================
const IMAGES = {
  // 4 Programs
  playgroup: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
  nursery: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  jrKg: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
  srKg: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",

  // 4 Daily Routine Steps (Now with real photos!)
  routine1: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
  routine2: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
  routine3: "https://images.unsplash.com/photo-1728494049079-c262d3facee0?auto=format&fit=crop&w=1000&q=80",
  routine4: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
};

const PROGRAMS = [
  {
    id: "playgroup",
    title: "Playgroup",
    age: "1.5 – 2.5 yrs",
    tint: "var(--color-yellow-soft)",
    cardBg: "program-card-yellow",
    tag: "Morning Cohort",
    desc: "A gentle first step into school with sensory play, rhymes and cuddly circle time.",
    bullets: [
      "Sensory & tactile play",
      "Action rhymes & music",
      "Gentle social bonding"
    ],
    time: "9:00 AM – 11:30 AM",
    link: "/contact?program=playgroup",
    image: IMAGES.playgroup,
    badgeClass: "badge-yellow",
    btnClass: "btn-yellow",
    accentColor: "var(--color-yellow)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FEC200" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M5.5 20v-2a6.5 6.5 0 0 1 13 0v2" />
      </svg>
    )
  },
  {
    id: "nursery",
    title: "Nursery",
    age: "2.5 – 3.5 yrs",
    tint: "var(--color-blue-soft)",
    cardBg: "program-card-blue",
    tag: "Interactive Play",
    desc: "Builds language, motor skills and curiosity through colours, shapes and stories.",
    bullets: [
      "Early literacy basics",
      "Colours, shapes & numbers",
      "Creative art & craft"
    ],
    time: "9:00 AM – 12:00 PM",
    link: "/contact?program=nursery",
    image: IMAGES.nursery,
    badgeClass: "badge-blue",
    btnClass: "btn-blue",
    accentColor: "var(--color-blue)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D6EFD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  },
  {
    id: "jr-kg",
    title: "Jr. KG",
    age: "3.5 – 4.5 yrs",
    tint: "var(--color-lavender)",
    cardBg: "program-card-purple",
    tag: "Foundation Stage",
    desc: "Strengthens reading, writing readiness and confidence through guided activities.",
    bullets: [
      "Phonics & pre-writing",
      "Number concepts & math",
      "Team sports & games"
    ],
    time: "8:45 AM – 12:30 PM",
    link: "/contact?program=jr-kg",
    image: IMAGES.jrKg,
    badgeClass: "badge-purple",
    btnClass: "btn-purple",
    accentColor: "var(--color-purple)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#641C8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  },
  {
    id: "sr-kg",
    title: "Sr. KG",
    age: "4.5 – 5.5 yrs",
    tint: "var(--color-orange-soft)",
    cardBg: "program-card-orange",
    tag: "Graduation Year",
    desc: "Prepares children for primary school with reading, writing and problem solving.",
    bullets: [
      "Reading & writing practice",
      "Scientific thinking",
      "School readiness habits"
    ],
    time: "8:30 AM – 1:00 PM",
    link: "/contact?program=sr-kg",
    image: IMAGES.srKg,
    badgeClass: "badge-orange",
    btnClass: "btn-orange",
    accentColor: "var(--color-orange)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    )
  }
];

const DAILY_STEPS = [
  {
    step: "1",
    title: "Welcome & Circle Time",
    desc: "Morning greetings, cheerful songs and settling in with warm friends.",
    time: "8:45 AM – 9:30 AM",
    circleColor: "var(--color-yellow)",
    numColor: "#212529",
    image: IMAGES.routine1
  },
  {
    step: "2",
    title: "Learning Activities",
    desc: "Interactive phonics, number discovery and hands-on sensorial crafts.",
    time: "9:30 AM – 10:45 AM",
    circleColor: "var(--color-blue)",
    numColor: "#ffffff",
    image: IMAGES.routine2
  },
  {
    step: "3",
    title: "Snack & Outdoor Play",
    desc: "Healthy eating habits, sharing etiquette, and sandbox motor games.",
    time: "10:45 AM – 11:30 AM",
    circleColor: "var(--color-orange)",
    numColor: "#ffffff",
    image: IMAGES.routine3
  },
  {
    step: "4",
    title: "Story Hour & Goodbye",
    desc: "Enchanting storybooks, daily reflection, and affectionate parent pickup.",
    time: "11:30 AM – 12:15 PM",
    circleColor: "var(--color-purple)",
    numColor: "#ffffff",
    image: IMAGES.routine4
  }
];

export default function Program() {
  return (
    <div className="program-page">
      {/* 1. PAGE HEADER */}
      <section className="page-header">
        {/* Static Doodles */}
        <div className="doodle-shape" style={{ top: 20, left: '8%' }} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FEC200" strokeWidth="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div className="doodle-shape" style={{ bottom: 24, right: '10%' }} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF5FA2" strokeWidth="2.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>

        <div className="container page-header-inner">
          <div className="badge badge-yellow">
            <span>Learning Milestones</span>
          </div>
          <h1>Programs Crafted for Every Little Milestone</h1>
          <p>
            From playful sensory discovery to confident primary school readiness, explore our four age-specific stages.
          </p>
        </div>
      </section>

      {/* 2. 4 PROGRAM CARDS */}
      <section className="program-cards-section">
        <div className="container">
          <div className="program-grid">
            {PROGRAMS.map((prog) => (
              <div key={prog.id} className={`program-card card ${prog.cardBg}`}>
                <div>
                  <div className="program-card-header">
                    <div className="program-icon-box" style={{ background: prog.tint }}>
                      {prog.icon}
                    </div>
                    <span className={`badge ${prog.badgeClass}`}>
                      {prog.age}
                    </span>
                  </div>

                  <div className="program-card-title-group">
                    <span className="program-tag-label" style={{ color: prog.accentColor }}>{prog.tag}</span>
                    <h2 className="program-card-title">{prog.title}</h2>
                  </div>

                  <p className="program-card-desc">{prog.desc}</p>

                  <div className="program-card-image">
                    <img src={prog.image} alt={`${prog.title} activities`} />
                  </div>

                  <ul className="program-bullets-list">
                    {prog.bullets.map((bullet, idx) => (
                      <li key={idx} className="program-bullet-item">
                        <span className="program-bullet-check" style={{ color: prog.accentColor, background: prog.tint }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="program-card-footer">
                  <div className="program-time-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{prog.time}</span>
                  </div>

                  <Link to={prog.link} className={`btn ${prog.btnClass}`}>
                    <span>Enquire for this program →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. A DAY AT SUNNY STEPS (Now with real preschool photos for each step!) */}
      <section className="program-routine-section">
        {/* Static Doodles */}
        <div className="doodle-shape" style={{ top: 32, right: '6%' }} aria-hidden="true">
          <svg width="40" height="20" viewBox="0 0 60 20" fill="none">
            <path d="M2 10 Q15 0 30 10 T58 10" stroke="#FF5100" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="doodle-circle" style={{ top: 60, left: '5%', width: 22, height: 22, background: '#FFEAA7' }} aria-hidden="true"></div>

        <div className="container">
          <div className="program-routine-header">
            <div className="badge badge-purple">
              <span>Daily Rhythm</span>
            </div>
            <h2>A Day at Sunny Steps</h2>
            <p>
              A predictable, joyful rhythm balancing active discovery, restful nourishment, and creative storytelling.
            </p>
          </div>

          <div className="program-routine-grid">
            {DAILY_STEPS.map((step) => (
              <div key={step.step} className="program-routine-card card">
                {/* Step Photo */}
                <div className="program-routine-img-wrap">
                  <img src={step.image} alt={step.title} />
                  <div className="program-routine-step-num" style={{ background: step.circleColor, color: step.numColor }}>
                    {step.step}
                  </div>
                </div>

                <div className="program-routine-body">
                  <span className="program-routine-time">
                    {step.time}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
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
              <h2>Find the Perfect Cohort for Your Child</h2>
              <p>Book an interactive session with our counselors to see which program will best nurture your child's innate potential.</p>
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
