import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Strengths', href: '#strengths' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map(item => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Portfolio</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
          <div className="navbar-links">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Let&apos;s Talk</a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
