import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section id="problem" style={{ background: 'var(--color-wt-deep)', borderBottom: '1px solid var(--color-wt-border)' }}>
      <div style={{ padding: '8rem 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <div className="label-mono" style={{ color: 'var(--color-wt-amber)', marginBottom: '3rem', letterSpacing: '0.1em' }}>
          THE INFRASTRUCTURE CRISIS
        </div>
        
        <h2 className="display-xl" style={{ marginBottom: '4rem', maxWidth: '1000px', lineHeight: 1.1 }}>
          <span className="gradient-text-white">Battery degradation is</span><br/>
          <span className="gradient-text-white">costing the industry</span><br/>
          <span style={{ color: 'var(--color-wt-amber)' }}>$20 Billion annually.</span>
        </h2>
        
        <p className="text-body" style={{ maxWidth: '680px', marginBottom: '6rem', fontSize: '1.25rem' }}>
          Across telecommunications, data centers, and utilities, the assumption is that battery degradation is inevitable physics. This assumption is chemically incorrect. It is simply unmanaged physics.
        </p>

        {/* Minimalist Data Points instead of heavy dashboard */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', width: '100%', maxWidth: '1200px', borderTop: '1px solid var(--color-wt-border)', paddingTop: '4rem' }}>
          <div>
            <div className="metric-value" style={{ color: 'var(--color-wt-text)', marginBottom: '1rem' }}>40%</div>
            <div className="label-mono" style={{ color: 'var(--color-wt-muted)', marginBottom: '0.5rem' }}>AVERAGE CAPACITY LOSS</div>
            <p className="text-body" style={{ fontSize: '0.875rem' }}>The average battery loses massive capacity before its scheduled end-of-life.</p>
          </div>
          <div>
            <div className="metric-value" style={{ color: 'var(--color-wt-text)', marginBottom: '1rem' }}>85%</div>
            <div className="label-mono" style={{ color: 'var(--color-wt-muted)', marginBottom: '0.5rem' }}>PREVENTABLE FAILURES</div>
            <p className="text-body" style={{ fontSize: '0.875rem' }}>Most premature failures are preceded by measurable electrochemical signatures.</p>
          </div>
          <div>
            <div className="metric-value" style={{ color: 'var(--color-wt-amber)', marginBottom: '1rem' }}>2.5x</div>
            <div className="label-mono" style={{ color: 'var(--color-wt-amber)', marginBottom: '0.5rem' }}>CASCADE COST MULTIPLIER</div>
            <p className="text-body" style={{ fontSize: '0.875rem' }}>Downtime and emergency procurement dwarf the actual hardware replacement cost.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
