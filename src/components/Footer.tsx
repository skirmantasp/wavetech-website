export default function Footer() {
  return (
    <footer id="footer" style={{ background: 'var(--color-wt-black)' }}>
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
            <a href="mailto:info@wavetech.com?subject=Deployment%20Request&body=Hello%20WaveTech%20team%2C%0A%0AWe%20are%20interested%20in%20deploying%20WaveTech%20intelligence%20at%20our%20infrastructure.%0A%0ACompany%3A%20%0AIndustry%3A%20%0AFleet%20Size%3A%20%0A%0APlease%20contact%20us%20to%20discuss%20next%20steps.%0A%0ABest%20regards" className="btn-primary" style={{ textDecoration: 'none' }}>
              Initialize Deployment
            </a>
            <a href="mailto:info@wavetech.com?subject=Validation%20Data%20Request&body=Hello%20WaveTech%20team%2C%0A%0AI%20would%20like%20to%20request%20technical%20validation%20data%20and%20independent%20test%20results.%0A%0ACompany%3A%20%0ARole%3A%20%0A%0AThank%20you" className="btn-outline" style={{ textDecoration: 'none' }}>
              Request Validation Data
            </a>
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
            <a href="mailto:info@wavetech.com?subject=Executive%20Briefing%20Request" className="nav-link">Executive Briefing</a>
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
