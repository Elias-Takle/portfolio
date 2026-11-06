import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile, nav, SECTION_IDS } from '../data.js';
import { useActiveSection, useTheme } from '../hooks.js';
import { L } from './ui.jsx';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, toggle] = useTheme();
  const active = useActiveSection(SECTION_IDS);
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="logo">{profile.name}<span>.</span></a>
        <nav id="menu" className={open ? 'open' : ''} aria-label="Primary">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn-o" href={profile.cv} download onClick={() => setOpen(false)}>Download CV</a>
        </nav>
        <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu" aria-label="Toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div>
          <strong>{profile.name}</strong>
          <p>{profile.title}</p>
        </div>
        <nav aria-label="Footer">
          {nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="soc">
          <L href={profile.github} aria-label="GitHub"><FaGithub /></L>
          <L href={profile.linkedin} aria-label="LinkedIn"><FaLinkedin /></L>
        </div>
      </div>
      <div className="wrap foot-b">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}

// Thin reading-progress bar fixed to the top of the viewport.
export function Progress() {
  const ref = useRef(null);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      ref.current.style.transform = `scaleX(${h.scrollTop / (h.scrollHeight - h.clientHeight || 1)})`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div className="bar" ref={ref} aria-hidden="true" />;
}
