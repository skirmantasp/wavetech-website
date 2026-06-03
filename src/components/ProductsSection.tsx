import { motion } from 'framer-motion';

const PLATFORMS = [
  {
    id: 'BEAT',
    name: 'Continuous Optimization Protocol',
    role: 'Active Impedance Stabilization',
    scope: 'Telecom & Critical UPS',
    impact: 'Extends hardware lifespan up to 2× by preventing crystallization.',
  },
  {
    id: 'BARS',
    name: 'Advanced Rejuvenation System',
    role: 'Capacity Recovery',
    scope: 'Global Industrial Storage',
    impact: 'Recovers up to 80% of lost capacity, delaying capital replacement.',
  },
  {
    id: 'BCAT',
    name: 'Diagnostic Intelligence',
    role: 'Predictive Network Telemetry',
    scope: 'Planetary Fleet Aggregation',
    impact: 'Delivers immediate, high-resolution RUL (Remaining Useful Life) forecasting.',
  }
];

export default function ProductsSection() {
  return (
    <section id="modules" style={{ background: 'var(--color-wt-black)', position: 'relative', borderBottom: '1px solid var(--color-wt-border)' }}>
      
      {/* Human Scale / Cinematic Header for Platform Suite */}
      <div style={{ position: 'relative', borderBottom: '1px solid var(--color-wt-border)', minHeight: '60vh', display: 'flex' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/human-scale.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} />
        <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to right, rgba(6,6,6,0.95) 0%, rgba(6,6,6,0.8) 40%, rgba(6,6,6,0.2) 100%)',
        }} />
        
        <div style={{ position: 'relative', zIndex: 10, padding: '6rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="label-mono" style={{ color: 'var(--color-wt-cyan)', marginBottom: '1.5rem' }}>// THE WAVETECH PLATFORM SUITE</div>
          <h2 className="display-md" style={{ marginBottom: '2rem' }}>
            <span className="gradient-text-white">Software-Defined</span><br/>
            <span style={{ color: 'var(--color-wt-text)' }}>Physics.</span>
          </h2>
          <p className="text-body" style={{ maxWidth: '500px', fontSize: '1.125rem' }}>
            Our platforms go beyond passive monitoring. We empower infrastructure operators to actively intervene at the electrochemical level—altering battery behavior and extending operational life at scale.
          </p>
        </div>
      </div>

      {/* Enterprise Platform Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {PLATFORMS.map((plat, i) => (
          <div key={plat.id} style={{ 
            padding: '4rem', 
            borderRight: i < 2 ? '1px solid var(--color-wt-border)' : 'none',
            display: 'flex', flexDirection: 'column',
            background: i === 1 ? 'var(--color-wt-deep)' : 'transparent'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
              <span className="label-mono" style={{ color: 'var(--color-wt-text)', fontSize: '1.5rem' }}>{plat.id}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '4px', height: '4px', background: 'var(--color-wt-cyan)' }} />
                <span className="label-mono" style={{ color: 'var(--color-wt-muted)' }}>ENTERPRISE READY</span>
              </div>
            </div>

            <h3 className="heading-lg" style={{ color: 'var(--color-wt-text)', marginBottom: '1.5rem', minHeight: '3rem' }}>{plat.name}</h3>
            
            <div style={{ flex: 1, borderTop: '1px solid var(--color-wt-border)', paddingTop: '2rem', marginTop: '1rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="label-mono" style={{ color: 'var(--color-wt-muted)', marginBottom: '0.5rem', fontSize: '0.65rem' }}>INFRASTRUCTURE ROLE</div>
                <div style={{ color: 'var(--color-wt-text)' }}>{plat.role}</div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="label-mono" style={{ color: 'var(--color-wt-muted)', marginBottom: '0.5rem', fontSize: '0.65rem' }}>DEPLOYMENT SCOPE</div>
                <div style={{ color: 'var(--color-wt-text)' }}>{plat.scope}</div>
              </div>
              <div>
                <div className="label-mono" style={{ color: 'var(--color-wt-muted)', marginBottom: '0.5rem', fontSize: '0.65rem' }}>BUSINESS IMPACT</div>
                <div style={{ color: 'var(--color-wt-text)' }}>{plat.impact}</div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
