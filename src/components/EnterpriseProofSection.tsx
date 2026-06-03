import { motion } from 'framer-motion';

export default function EnterpriseProofSection() {
  return (
    <section id="proof" style={{ borderBottom: '1px solid var(--color-wt-border)', background: 'var(--color-wt-deep)' }}>
      
      {/* Header Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--color-wt-border)' }}>
        <div style={{ padding: '6rem 4rem', borderRight: '1px solid var(--color-wt-border)', background: 'var(--color-wt-black)' }}>
          <div className="label-mono" style={{ color: 'var(--color-wt-cyan)', marginBottom: '1.5rem' }}>// THE PROOF ECOSYSTEM</div>
          <h2 className="display-md">
            <span className="gradient-text-white">Validated by</span><br/>
            <span style={{ color: 'var(--color-wt-text)' }}>Science & Scale.</span>
          </h2>
        </div>
        <div style={{ padding: '6rem 4rem', display: 'flex', alignItems: 'center' }}>
          <p className="text-body" style={{ maxWidth: '500px', fontSize: '1.125rem' }}>
            Enterprise buyers cannot rely on theory. WaveTech’s optimization protocols are verified by independent scientific research, protected by global patents, and proven in the field by Tier 1 infrastructure operators.
          </p>
        </div>
      </div>

      {/* Massive Proof Wall Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        
        {/* IP & Patents */}
        <div style={{ padding: '4rem 3rem', borderRight: '1px solid var(--color-wt-border)', borderBottom: '1px solid var(--color-wt-border)' }}>
          <div className="metric-value" style={{ marginBottom: '1rem', color: 'var(--color-wt-text)' }}>34+</div>
          <div className="label-mono" style={{ color: 'var(--color-wt-muted)' }}>GRANTED & PENDING PATENTS</div>
        </div>

        {/* Deployments */}
        <div style={{ padding: '4rem 3rem', borderRight: '1px solid var(--color-wt-border)', borderBottom: '1px solid var(--color-wt-border)', background: 'var(--color-wt-black)' }}>
          <div className="metric-value" style={{ marginBottom: '1rem', color: 'var(--color-wt-text)' }}>1,000s</div>
          <div className="label-mono" style={{ color: 'var(--color-wt-muted)' }}>OF CRITICAL SITES MANAGED</div>
        </div>

        {/* Validation */}
        <div style={{ padding: '4rem 3rem', borderRight: '1px solid var(--color-wt-border)', borderBottom: '1px solid var(--color-wt-border)' }}>
          <div className="metric-value" style={{ marginBottom: '1rem', color: 'var(--color-wt-cyan)', fontSize: '2.5rem' }}>VERIFIED</div>
          <div className="label-mono" style={{ color: 'var(--color-wt-muted)' }}>BY INDEPENDENT LABS</div>
        </div>

        {/* Research */}
        <div style={{ padding: '4rem 3rem', borderBottom: '1px solid var(--color-wt-border)', background: 'var(--color-wt-black)' }}>
          <div className="metric-value" style={{ marginBottom: '1rem', color: 'var(--color-wt-text)' }}>15+</div>
          <div className="label-mono" style={{ color: 'var(--color-wt-muted)' }}>YEARS R&D AND FIELD DATA</div>
        </div>

      </div>

      {/* Partner Ecosystem Placeholder */}
      <div style={{ padding: '6rem 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="label-mono" style={{ color: 'var(--color-wt-subtle)', marginBottom: '3rem' }}>TRUSTED BY GLOBAL INFRASTRUCTURE LEADERS</div>
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center', opacity: 0.3 }}>
          {/* Conceptual placeholders for enterprise logos */}
          {['TELECOM TIER 1', 'GLOBAL UTILITY', 'HYPERSCALE DC', 'INDUSTRIAL MFG'].map((partner, i) => (
            <div key={i} style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '1.5rem', 
              fontWeight: 600,
              letterSpacing: '-0.03em',
              color: 'var(--color-wt-text)'
            }}>
              [{partner}]
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
