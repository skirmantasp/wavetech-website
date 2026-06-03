export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-wt-black)' }}>
      {/* Massive CTA Block */}
      <div style={{ padding: '8rem 4rem', borderBottom: '1px solid var(--color-wt-border)', textAlign: 'center', background: 'var(--color-wt-deep)', position: 'relative', overflow: 'hidden' }}>
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="display-lg" style={{ marginBottom: '2rem' }}>
            <span className="gradient-text-white">Build tomorrow's</span><br/>
            <span style={{ color: 'var(--color-wt-cyan)' }}>Infrastructure.</span>
          </h2>
          <p className="text-body" style={{ maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.125rem' }}>
            Deploy the intelligence layer that extends battery life, eliminates downtime, and transforms capital efficiency at a global scale.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <button className="btn-primary">
              Initialize Deployment
            </button>
            <button className="btn-outline">
              Request Validation Data
            </button>
          </div>
        </div>
      </div>

      {/* Grid Links */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        
        {/* Brand */}
        <div style={{ padding: '4rem', borderRight: '1px solid var(--color-wt-border)' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-wt-text)', marginBottom: '2rem' }}>
            WAVE<span style={{ color: 'var(--color-wt-cyan)' }}>TECH</span>
          </div>
          <p className="text-body" style={{ fontSize: '0.875rem' }}>
            Software-defined physical optimization for critical infrastructure.
          </p>
        </div>

        {/* Links */}
        <div style={{ padding: '4rem', borderRight: '1px solid var(--color-wt-border)' }}>
          <div className="label-mono" style={{ color: 'var(--color-wt-subtle)', marginBottom: '2rem' }}>PLATFORM</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="#" className="nav-link">Intelligence Stack</a>
            <a href="#" className="nav-link">BEAT Engine</a>
            <a href="#" className="nav-link">BARS System</a>
            <a href="#" className="nav-link">BCAT Telemetry</a>
          </div>
        </div>

        <div style={{ padding: '4rem', borderRight: '1px solid var(--color-wt-border)' }}>
          <div className="label-mono" style={{ color: 'var(--color-wt-subtle)', marginBottom: '2rem' }}>ENTERPRISE</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="#" className="nav-link">Executive Briefing</a>
            <a href="#" className="nav-link">Technical Reports</a>
            <a href="#" className="nav-link">Case Studies</a>
            <a href="#" className="nav-link">Partner Program</a>
          </div>
        </div>

        <div style={{ padding: '4rem' }}>
          <div className="label-mono" style={{ color: 'var(--color-wt-subtle)', marginBottom: '2rem' }}>COMPANY</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="#" className="nav-link">About WaveTech</a>
            <a href="#" className="nav-link">Leadership</a>
            <a href="#" className="nav-link">Careers</a>
            <a href="#" className="nav-link">Contact Operations</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ padding: '2rem 4rem', borderTop: '1px solid var(--color-wt-border)', display: 'flex', justifyContent: 'space-between' }}>
        <div className="label-mono" style={{ color: 'var(--color-wt-subtle)', fontSize: '0.65rem' }}>
          © {new Date().getFullYear()} WAVETECH CORP. ALL RIGHTS RESERVED.
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" className="nav-link" style={{ fontSize: '0.65rem', color: 'var(--color-wt-subtle)' }}>SYSTEM STATUS</a>
          <a href="#" className="nav-link" style={{ fontSize: '0.65rem', color: 'var(--color-wt-subtle)' }}>PRIVACY</a>
          <a href="#" className="nav-link" style={{ fontSize: '0.65rem', color: 'var(--color-wt-subtle)' }}>TERMS</a>
        </div>
      </div>
    </footer>
  );
}
