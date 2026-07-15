const projects = [
  {
    id: 1,
    title: 'Ethereal Drift',
    tag: 'Motion Design',
    year: '2025',
    gradient: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    accent: '#a78bfa',
  },
  {
    id: 2,
    title: 'Neon Pulse',
    tag: 'Character Animation',
    year: '2024',
    gradient: 'linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e)',
    accent: '#64ffda',
  },
  {
    id: 3,
    title: 'Urban Flow',
    tag: 'Brand Animation',
    year: '2024',
    gradient: 'linear-gradient(135deg, #0d0d0d, #1c1c3a, #0f3460)',
    accent: '#f472b6',
  },
  {
    id: 4,
    title: 'Cosmic Shift',
    tag: 'VFX & Compositing',
    year: '2023',
    gradient: 'linear-gradient(135deg, #050510, #1a0a2e, #100c2e)',
    accent: '#38bdf8',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            A curated selection of recent animation and motion design projects,
            each crafted with attention to narrative, rhythm, and visual impact.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ '--card-accent': project.accent }}>
              <div className="project-card-visual" style={{ background: project.gradient }}>
                <div className="project-card-grid" />
                <div className="project-card-glow" />
                <div className="project-card-shape">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="50" stroke={project.accent} strokeWidth="1" strokeDasharray="6 6" opacity="0.3" />
                    <circle cx="60" cy="60" r="25" fill={project.accent} fillOpacity="0.08" stroke={project.accent} strokeWidth="1" opacity="0.5" />
                  </svg>
                </div>
                <span className="project-card-number">0{index + 1}</span>
              </div>
              <div className="project-card-info">
                <div className="project-card-meta">
                  <span className="project-card-tag">{project.tag}</span>
                  <span className="project-card-year">{project.year}</span>
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <div className="project-card-cta">
                  <span>View Case Study</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
