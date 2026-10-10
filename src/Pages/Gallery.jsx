import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

// ==========================================
// CONSTANTS & CONTENT (ACCURATE REAL PRESCHOOL IMAGES)
// ==========================================
const IMAGES = {
  actArt: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
  actStory: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
  actMusic: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
  actOutdoor: "https://images.unsplash.com/photo-1642917479882-d03065a1844e?auto=format&fit=crop&w=1000&q=80",
  actSand: "https://images.unsplash.com/photo-1595760780346-f972eb49709f?auto=format&fit=crop&w=800&q=80",
  actFestival: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
  // 12 Photo Gallery images
  photo1: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  photo2: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
  photo3: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
  photo4: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80",
  photo5: "https://images.unsplash.com/photo-1758798465093-d99f3acc2f11?auto=format&fit=crop&w=1000&q=80",
  photo6: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
  photo7: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
  photo8: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
  photo9: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80",
  photo10: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  photo11: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80",
  photo12: "https://images.unsplash.com/photo-1679662487821-1e3aae311132?auto=format&fit=crop&w=1000&q=80"
};

const ACTIVITIES = [
  {
    title: "Art & Craft Studio",
    desc: "Little hands, big imagination with washable colors and tactile exploration.",
    tag: "Creative",
    badgeClass: "badge-orange",
    footerLabel: "Daily morning sessions",
    image: IMAGES.actArt,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="#FF5100" />
        <circle cx="17.5" cy="10.5" r=".5" fill="#FF5100" />
        <circle cx="8.5" cy="7.5" r=".5" fill="#FF5100" />
        <circle cx="6.5" cy="12.5" r=".5" fill="#FF5100" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.4-1.1-.3-.3-.4-.8-.4-1.3 0-1.1.9-2 2-2h2.4c3.3 0 6-2.7 6-6 0-5.5-4.5-10-10-10z" />
      </svg>
    )
  },
  {
    title: "Story Time Wonder",
    desc: "Interactive theatre and colorful picture books that spark curiosity and vocabulary.",
    tag: "Literacy",
    badgeClass: "badge-yellow",
    footerLabel: "Interactive story sessions",
    image: IMAGES.actStory,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FEC200" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  },
  {
    title: "Music & Movement",
    desc: "Rhymes, rhythm instruments and body movement to build coordination and confidence.",
    tag: "Rhythm",
    badgeClass: "badge-purple",
    footerLabel: "Kinesthetic rhythm play",
    image: IMAGES.actMusic,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#641C8C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    )
  },
  {
    title: "Outdoor Exploration",
    desc: "Fresh morning air, custom climbing equipment, tunnels and grass games.",
    tag: "Physical",
    badgeClass: "badge-green",
    footerLabel: "Gross motor development",
    image: IMAGES.actOutdoor,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9s-9-4.03-9-9a9 9 0 0 1 9-9z" />
        <path d="M12 8v4l3 3" />
      </svg>
    )
  },
  {
    title: "Sand & Sensory Lab",
    desc: "Sensory stations with safe sand moulding, water wheels and floating experiments.",
    tag: "Sensory",
    badgeClass: "badge-blue",
    footerLabel: "Tactile scientific discovery",
    image: IMAGES.actSand,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D6EFD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    )
  },
  {
    title: "Festival Celebrations",
    desc: "Joyous multi-cultural dressing up, cultural dances, music and sharing healthy feasts.",
    tag: "Community",
    badgeClass: "badge-pink",
    footerLabel: "Cultural harmony and empathy",
    image: IMAGES.actFestival,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5FA2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }
];

const MEMORIES = [
  { image: IMAGES.photo1, title: "Children painting", sub: "Creative Studio, Room 1", tall: true },
  { image: IMAGES.photo2, title: "Group circle time", sub: "Daily Morning Welcome", tall: false },
  { image: IMAGES.photo3, title: "Birthday celebration", sub: "Celebrating 4 Years Old", tall: true },
  { image: IMAGES.photo4, title: "Annual day dress-up", sub: "Little Wings Concert", tall: false },
  { image: IMAGES.photo5, title: "Playground sandbox", sub: "Sunshine & Discovery", tall: true },
  { image: IMAGES.photo6, title: "Classroom learning", sub: "Engineering Young Minds", tall: false },
  { image: IMAGES.photo7, title: "Sports day mini race", sub: "Run, Giggle, Win!", tall: true },
  { image: IMAGES.photo8, title: "Clay modeling creations", sub: "Tactile Art Explorations", tall: false },
  { image: IMAGES.photo9, title: "Field trip nature walk", sub: "Curious Little Botanists", tall: true },
  { image: IMAGES.photo10, title: "Music class songs", sub: "Rhythm & Joy", tall: false },
  { image: IMAGES.photo11, title: "Story hour tales", sub: "Listening & Wonder", tall: false },
  { image: IMAGES.photo12, title: "Craft time collages", sub: "Hands-on Discovery", tall: true }
];

const STORAGE_KEY = 'sunstep_custom_photos';

function loadStoredPhotos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (err) {
    console.warn('Could not load custom photos from localStorage', err);
  }
  return [];
}

/**
 * Resizes and compresses image to safely fit in browser localStorage without exceeding quotas
 */
function compressImageFile(file, maxDimension = 1200, quality = 0.85) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = () => reject(new Error('Invalid image file.'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('Failed to read file.'));
    reader.readAsDataURL(file);
  });
}

export default function Gallery() {
  const [photosLoaded, setPhotosLoaded] = useState(false);
  const [customPhotos, setCustomPhotos] = useState(loadStoredPhotos);

  // Upload Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoSource, setPhotoSource] = useState('file'); // 'file' | 'url'
  const [imagePreview, setImagePreview] = useState('');
  const [imageUrlInput, setImageUrlInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [subInput, setSubInput] = useState('');
  const [isTallInput, setIsTallInput] = useState(false);
  const [formError, setFormError] = useState('');
  const [isCompressing, setIsCompressing] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setFormError('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }
    setFormError('');
    setIsCompressing(true);
    try {
      const compressedData = await compressImageFile(file);
      setImagePreview(compressedData);
    } catch {
      setFormError('Failed to process image. Please try another file.');
    } finally {
      setIsCompressing(false);
    }
  };

  const handleUrlChange = (e) => {
    const val = e.target.value;
    setImageUrlInput(val);
    setImagePreview(val);
    setFormError('');
  };

  const handleAddPhotoSubmit = (e) => {
    e.preventDefault();
    const finalImage = imagePreview.trim();
    if (!finalImage) {
      setFormError('Please upload an image file or enter an image URL.');
      return;
    }
    if (!titleInput.trim()) {
      setFormError('Please give this photo a title.');
      return;
    }

    const newPhoto = {
      id: 'custom-' + Date.now(),
      image: finalImage,
      title: titleInput.trim(),
      sub: subInput.trim() || 'Parent & Community Upload',
      tall: isTallInput,
      isCustom: true,
      createdAt: Date.now()
    };

    try {
      const updated = [newPhoto, ...customPhotos];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setCustomPhotos(updated);
      setIsModalOpen(false);

      // Reset Form
      setImagePreview('');
      setImageUrlInput('');
      setTitleInput('');
      setSubInput('');
      setIsTallInput(false);
      setFormError('');
      showToast('Photo successfully added to the wall!');
    } catch {
      setFormError('Storage quota reached. Please use an image URL or delete older custom photos.');
    }
  };

  const handleDeletePhoto = (id) => {
    if (window.confirm('Remove this photo from the gallery?')) {
      const updated = customPhotos.filter(p => p.id !== id);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      setCustomPhotos(updated);
      showToast('Photo removed.');
    }
  };

  const allMemories = [...customPhotos, ...MEMORIES];

  return (
    <div className="gallery-page">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="gallery-toast-banner" role="status">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. PAGE HEADER */}
      <section className="page-header">
        {/* Static Doodles */}
        <div className="doodle-shape" style={{ top: 24, left: '6%' }} aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FEC200" strokeWidth="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div className="doodle-circle" style={{ bottom: 20, right: '8%', width: 22, height: 22, background: '#FFD1E3' }} aria-hidden="true"></div>

        <div className="container page-header-inner">
          <div className="badge badge-yellow">
            <span>Moments of Joy</span>
          </div>
          <h1>Life, Play &amp; Celebration at Sunny Steps</h1>
          <p>
            Take a window into our vibrant days filled with colors, laughter, friendships, and milestone moments.
          </p>
        </div>
      </section>

      {/* 2. ACTIVITIES SECTION (6 Cards) */}
      <section className="gallery-activities-section">
        {/* Static Doodles */}
        <div className="doodle-shape" style={{ top: 32, right: '4%' }} aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D6EFD" strokeWidth="2.5">
            <path d="M12 2v20M2 12h20" />
          </svg>
        </div>

        <div className="container">
          <div className="gallery-activities-header">
            <div className="badge badge-blue">
              <span>Weekly Highlights</span>
            </div>
            <h2>Special Activities Every Week</h2>
            <p>
              Engaging, hand-crafted experiences curated to cultivate cognitive curiosity, bodily coordination, and warm social camaraderie.
            </p>
          </div>

          <div className="gallery-activities-grid">
            {ACTIVITIES.map((act, i) => (
              <div key={i} className="gallery-activity-card card">
                <div className="gallery-activity-img-box">
                  <img src={act.image} alt={act.title} />
                  <span className={`badge ${act.badgeClass} gallery-activity-tag`}>
                    {act.tag}
                  </span>
                </div>

                <div className="gallery-activity-body">
                  <div className="gallery-activity-top-row">
                    <div className="gallery-activity-icon">
                      {act.icon}
                    </div>
                    <h3>{act.title}</h3>
                  </div>

                  <p>{act.desc}</p>

                  <div className="gallery-activity-footer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{act.footerLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PHOTO GALLERY (Masonry with Add Photo support) */}
      <section className="gallery-photos-section">
        <div className="container">
          <div className="gallery-photos-header">
            <div className="badge badge-purple">
              <span>Photo Wall</span>
            </div>
            <h2>Campus Memories in Motion</h2>
            <p>
              Hover over any moment to peek into our classrooms, outdoor greens, and creative workshops.
            </p>
            <div className="gallery-header-action-row">
              <button
                type="button"
                className="btn btn-orange gallery-upload-trigger-btn"
                onClick={() => setIsModalOpen(true)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                <span>Add Your Photo</span>
              </button>
              {customPhotos.length > 0 && (
                <span className="gallery-custom-count-pill">
                  ⭐ {customPhotos.length} {customPhotos.length === 1 ? 'custom photo' : 'custom photos'} added
                </span>
              )}
            </div>
          </div>

          <div className="gallery-masonry-grid">
            {allMemories.map((m, idx) => (
              <div key={m.id || idx} className={`gallery-photo-item ${m.tall ? 'tall' : ''}`}>
                <img src={m.image} alt={m.title} loading="lazy" />
                <div className="gallery-photo-overlay">
                  <div className="gallery-overlay-title">{m.title}</div>
                  <div className="gallery-overlay-sub">{m.sub}</div>
                </div>
                {m.isCustom && (
                  <button
                    type="button"
                    className="gallery-photo-delete-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeletePhoto(m.id);
                    }}
                    title="Remove this photo"
                    aria-label={`Remove photo ${m.title}`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="gallery-load-more-wrap">
            <button
              type="button"
              className="btn btn-outline-purple"
              onClick={() => setPhotosLoaded(!photosLoaded)}
            >
              <span>{photosLoaded ? 'Showing All Featured Albums' : 'Load More Photos'}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 4. MODAL FOR ADDING USER PHOTO */}
      {isModalOpen && (
        <div className="gallery-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div
            className="gallery-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-upload-title"
          >
            <div className="gallery-modal-header">
              <div className="gallery-modal-title-wrap">
                <span className="badge badge-yellow">Community Wall</span>
                <h3 id="modal-upload-title">Add a Photo to Gallery</h3>
              </div>
              <button
                type="button"
                className="gallery-modal-close-btn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddPhotoSubmit} className="gallery-modal-form">
              {/* Photo Source Switcher */}
              <div className="gallery-source-switcher">
                <button
                  type="button"
                  className={`gallery-source-tab ${photoSource === 'file' ? 'source-tab-active' : ''}`}
                  onClick={() => setPhotoSource('file')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <span>Upload from Device</span>
                </button>
                <button
                  type="button"
                  className={`gallery-source-tab ${photoSource === 'url' ? 'source-tab-active' : ''}`}
                  onClick={() => setPhotoSource('url')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span>Image Web Link</span>
                </button>
              </div>

              {/* Source Input 1: File Upload */}
              {photoSource === 'file' && (
                <div className="gallery-input-group">
                  <label htmlFor="gallery-file-input" className="gallery-dropzone-label">
                    <input
                      id="gallery-file-input"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="gallery-file-native-input"
                    />
                    <div className="gallery-dropzone-content">
                      <div className="dropzone-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF5100" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                      </div>
                      <span className="dropzone-text-main">
                        {isCompressing ? 'Processing image...' : 'Click to browse image from computer or phone'}
                      </span>
                      <span className="dropzone-text-sub">Supports JPG, PNG, WebP</span>
                    </div>
                  </label>
                </div>
              )}

              {/* Source Input 2: URL */}
              {photoSource === 'url' && (
                <div className="gallery-input-group">
                  <label htmlFor="gallery-url-input">Image Direct URL</label>
                  <input
                    id="gallery-url-input"
                    type="url"
                    placeholder="https://images.unsplash.com/... or any photo link"
                    value={imageUrlInput}
                    onChange={handleUrlChange}
                    className="gallery-text-input"
                  />
                </div>
              )}

              {/* Image Preview Box */}
              {imagePreview && (
                <div className="gallery-preview-wrapper">
                  <span className="gallery-preview-label">Live Card Preview:</span>
                  <div className={`gallery-photo-item gallery-preview-card ${isTallInput ? 'tall' : ''}`}>
                    <img src={imagePreview} alt="Preview" />
                    <div className="gallery-photo-overlay" style={{ opacity: 1 }}>
                      <div className="gallery-overlay-title">{titleInput || 'Photo Title Preview'}</div>
                      <div className="gallery-overlay-sub">{subInput || 'Activity / Classroom Name'}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Metadata Inputs */}
              <div className="gallery-input-group">
                <label htmlFor="gallery-title-input">Photo Title *</label>
                <input
                  id="gallery-title-input"
                  type="text"
                  placeholder="e.g. Clay Dinosaur Craft, Sports Day Fun"
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                  className="gallery-text-input"
                  required
                />
              </div>

              <div className="gallery-input-group">
                <label htmlFor="gallery-sub-input">Location / Category Subtitle</label>
                <input
                  id="gallery-sub-input"
                  type="text"
                  placeholder="e.g. Junior KG Garden, Creative Workshop"
                  value={subInput}
                  onChange={(e) => setSubInput(e.target.value)}
                  className="gallery-text-input"
                />
              </div>

              {/* Card Height Toggle (Matches Masonry rhythm) */}
              <div className="gallery-aspect-picker">
                <span className="aspect-picker-label">Masonry Card Format:</span>
                <div className="aspect-radio-options">
                  <button
                    type="button"
                    className={`aspect-option-btn ${!isTallInput ? 'aspect-selected' : ''}`}
                    onClick={() => setIsTallInput(false)}
                  >
                    <span>Standard Card (290px)</span>
                  </button>
                  <button
                    type="button"
                    className={`aspect-option-btn ${isTallInput ? 'aspect-selected' : ''}`}
                    onClick={() => setIsTallInput(true)}
                  >
                    <span>Tall Portrait Card (370px)</span>
                  </button>
                </div>
              </div>

              {formError && <div className="gallery-form-error">{formError}</div>}

              {/* Action Buttons */}
              <div className="gallery-modal-actions">
                <button
                  type="button"
                  className="btn btn-outline-purple"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-orange gallery-modal-submit-btn"
                  disabled={isCompressing || !imagePreview}
                >
                  <span>{isCompressing ? 'Preparing Image...' : 'Add to Photo Wall'}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. CTA BAND */}
      <section className="shared-cta-section">
        <div className="container">
          <div className="shared-cta-card">
            <div className="shared-cta-content">
              <h2>Experience the Sunny Steps Energy in Person</h2>
              <p>Book a walkthrough visit with our head educators to tour our classrooms, activity studios, and outdoor play lawns.</p>
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
