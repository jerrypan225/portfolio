export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <div className="hero-overlay" />
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content container">
        <div className="hero-intro">
          <span className="hero-badge">Animation Designer</span>
          <h1 className="hero-title">
            Crafting Motion,
            <br />
            <span className="hero-title-accent">Bringing Stories</span>
            <br />
            to Life
          </h1>
          <p className="hero-subtitle">
            I create compelling animated experiences that blend artistry with
            technology — from character animation to motion graphics,
            every frame tells a story.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-metrics">
          <div className="metric-item">
            <span className="metric-value">6+</span>
            <span className="metric-label">Years Experience</span>
          </div>
          <div className="metric-divider" />
          <div className="metric-item">
            <span className="metric-value">120+</span>
            <span className="metric-label">Projects Delivered</span>
          </div>
          <div className="metric-divider" />
          <div className="metric-item">
            <span className="metric-value">40+</span>
            <span className="metric-label">Happy Clients</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
