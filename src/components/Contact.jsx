export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg" />
      <div className="contact-grid-overlay" />

      <div className="contact-content container">
        <div className="contact-top">
          <span className="section-label" style={{ color: '#a78bfa' }}>Get in Touch</span>
          <h2 className="contact-title">
            Let's Create
            <br />
            <span className="contact-title-accent">Something Great</span>
            <br />
            Together
          </h2>
          <p className="contact-desc">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to bring your vision to life through animation.
          </p>
        </div>

        <div className="contact-channels">
          <a href="mailto:alex.chen@portfolio.com" className="channel-card">
            <div className="channel-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-label">Email</span>
              <span className="channel-value">alex.chen@portfolio.com</span>
            </div>
            <div className="channel-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </a>

          <a href="#" className="channel-card">
            <div className="channel-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-label">Twitter / X</span>
              <span className="channel-value">@alex_chen</span>
            </div>
            <div className="channel-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </a>

          <a href="#" className="channel-card">
            <div className="channel-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-label">LinkedIn</span>
              <span className="channel-value">linkedin.com/in/alexchen</span>
            </div>
            <div className="channel-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>

        <div className="contact-footer">
          <div className="contact-footer-left">
            <span className="contact-copyright">&copy; 2025 Alex Chen</span>
            <span className="contact-sep">/</span>
            <span className="contact-copyright">Animation Designer</span>
          </div>
          <div className="contact-footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Work</a>
            <a href="#strengths">Strengths</a>
          </div>
        </div>
      </div>
    </section>
  );
}
