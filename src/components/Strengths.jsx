const strengths = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
      </svg>
    ),
    title: 'Concept & Storyboarding',
    description: 'Translating ideas into visual narratives with composited storyboards and animatics that capture timing and emotion before production begins.',
    color: '#64ffda',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
    title: '2D & 3D Animation',
    description: 'Proficient in frame-by-frame, rigged character animation, and 3D motion using industry-standard tools for production-ready results.',
    color: '#a78bfa',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" />
      </svg>
    ),
    title: 'Motion Graphics & VFX',
    description: 'Creating dynamic motion graphics, kinetic typography, title sequences, and visual effects that elevate brand identity and viewer engagement.',
    color: '#f472b6',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
    title: 'Interactive Animation',
    description: 'Bringing motion to the web with Lottie, Rive, and custom web animation -- building interactive experiences that feel alive and responsive.',
    color: '#38bdf8',
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="strengths-section">
      <div className="container">
        <div className="strengths-header">
          <span className="section-label">Expertise</span>
          <h2 className="section-title">What I Do Best</h2>
        </div>
        <div className="strengths-grid">
          {strengths.map((item, index) => (
            <div key={index} className="strength-card" style={{ '--strength-color': item.color }}>
              <div className="strength-icon-wrap">
                {item.icon}
              </div>
              <h3 className="strength-title">{item.title}</h3>
              <p className="strength-desc">{item.description}</p>
              <div className="strength-bar">
                <div className="strength-bar-fill" style={{ animationDelay: `${index * 0.15}s` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
