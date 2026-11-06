import { useEffect, useLayoutEffect, useState } from 'react';

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'dark'; } catch { return 'dark'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* storage unavailable */ }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))];
}

// Slow fade-and-rise for content as it scrolls into view. Skipped for reduced-motion users.
export function useReveal() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.sec h2,.sec .lead,.sec .card,.sec .panel,.sec .prose,.tl li,.form,.xcard').forEach((el) => {
      const idx = [...el.parentElement.children].indexOf(el);
      el.classList.add('reveal');
      el.style.setProperty('--d', `${Math.min(idx, 5) * 150}ms`);
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
}
