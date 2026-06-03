import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Technology Architecture', href: '#architecture' },
  { label: 'Intelligence Modules', href: '#modules' },
  { label: 'Infrastructure Impact', href: '#impact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid var(--color-wt-border)',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', height: '72px' }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 2rem', borderRight: '1px solid var(--color-wt-border)' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-wt-text)', lineHeight: 1 }}>
            WAVE<span style={{ color: 'var(--color-wt-cyan)' }}>TECH</span>
            <div className="label-mono" style={{ color: 'var(--color-wt-muted)', fontSize: '0.6rem', marginTop: '4px' }}>
              INFRASTRUCTURE OS
            </div>
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 2rem', gap: '3rem' }} className="hidden md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Status / CTA */}
        <div style={{ display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--color-wt-border)' }}>
          <div style={{ padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '8px' }} className="hidden lg:flex">
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-wt-green)' }} className="animate-blink" />
            <span className="label-mono" style={{ color: 'var(--color-wt-muted)' }}>INTELLIGENCE NETWORK ONLINE</span>
          </div>
          <button style={{ 
            height: '100%', 
            padding: '0 2.5rem', 
            background: 'var(--color-wt-text)', 
            color: 'var(--color-wt-black)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            border: 'none',
            cursor: 'pointer'
          }} className="hover:bg-wt-muted transition-colors">
            Request Briefing
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
