import { motion } from 'framer-motion';

const APPS = [
  {
    title: 'TELECOMMUNICATIONS',
    desc: 'Tower infrastructure and central offices require absolute backup reliability. WaveTech extends the life of VRLA strings in extreme temperature environments.',
    metrics: [
      { label: 'CAPEX REDUCTION', value: '40%' },
      { label: 'UPTIME', value: '99.999%' }
    ]
  },
  {
    title: 'DATA CENTERS',
    desc: 'Hyperscale facilities rely on massive UPS battery rooms. Our intelligence layer prevents catastrophic multi-string failures and defers millions in planned replacement costs.',
    metrics: [
      { label: 'CAPEX DEFERRAL', value: '35%' },
      { label: 'INCIDENT REDUCTION', value: '100%' }
    ]
  },
  {
    title: 'UTILITY & GRID',
    desc: 'Substation switchgear batteries are critical for grid resilience. We provide remote, centralized diagnostic visibility, eliminating manual testing requirements.',
    metrics: [
      { label: 'MANUAL TESTING', value: '-90%' },
      { label: 'READINESS', value: 'MAX' }
    ]
  },
  {
    title: 'INDUSTRIAL STORAGE',
    desc: 'For large-scale BESS and industrial manufacturing backup, WaveTech manages cycle life degradation and normalizes cell imbalances to maximize total energy throughput.',
    metrics: [
      { label: 'LIFECYCLE INCREASE', value: '+80%' },
      { label: 'ROI MULTIPLIER', value: '2.5x' }
    ]
  }
];

export default function ApplicationsSection() {
  return (
    <section id="applications" style={{ background: 'var(--color-wt-black)', borderBottom: '1px solid var(--color-wt-border)' }}>
      <div style={{ padding: '6rem 4rem', borderBottom: '1px solid var(--color-wt-border)', background: 'var(--color-wt-deep)' }}>
        <div className="label-mono" style={{ color: 'var(--color-wt-cyan)', marginBottom: '1.5rem' }}>// DEPLOYMENT VECTORS</div>
        <h2 className="display-md">
          <span className="gradient-text-white">Critical Environments.</span><br/>
          <span style={{ color: 'var(--color-wt-text)' }}>Global Impact.</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        {APPS.map((app, i) => (
          <div key={i} style={{ 
            padding: '4rem', 
            borderRight: '1px solid var(--color-wt-border)',
            borderBottom: '1px solid var(--color-wt-border)',
            display: 'flex', flexDirection: 'column'
          }}>
            <div className="label-mono" style={{ color: 'var(--color-wt-text)', marginBottom: '2rem' }}>{app.title}</div>
            <p className="text-body" style={{ fontSize: '0.875rem', marginBottom: '4rem', flex: 1 }}>{app.desc}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', borderTop: '1px solid var(--color-wt-border)', paddingTop: '2rem' }}>
              {app.metrics.map(m => (
                <div key={m.label}>
                  <div className="label-mono" style={{ color: 'var(--color-wt-subtle)', marginBottom: '0.5rem', fontSize: '0.65rem' }}>{m.label}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', color: 'var(--color-wt-cyan)' }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
