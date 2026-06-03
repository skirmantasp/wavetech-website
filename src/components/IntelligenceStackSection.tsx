import { motion } from 'framer-motion';

export default function IntelligenceStackSection() {
  return (
    <section id="architecture" style={{ background: 'var(--color-wt-black)', borderBottom: '1px solid var(--color-wt-border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        
        {/* Left Side: Overview - Removed dense tables, added breathing room */}
        <div style={{ padding: '8rem 4rem', borderRight: '1px solid var(--color-wt-border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="label-mono" style={{ color: 'var(--color-wt-cyan)', marginBottom: '2rem', letterSpacing: '0.1em' }}>
            SOFTWARE-DEFINED PHYSICS
          </div>
          <h2 className="display-md" style={{ marginBottom: '3rem', maxWidth: '400px' }}>
            <span className="gradient-text-white">Vertically Integrated</span><br/>
            <span style={{ color: 'var(--color-wt-text)' }}>Intelligence</span>
          </h2>
          <p className="text-body" style={{ marginBottom: '2rem', maxWidth: '480px', fontSize: '1.125rem' }}>
            We capture raw telemetry at the physical layer, process it through proprietary electrochemical models, and actively modulate the hardware to deliver enterprise-scale outcomes.
          </p>
          <p className="text-body" style={{ maxWidth: '480px', fontSize: '1.125rem' }}>
            WaveTech is a complete operating system for the next generation of battery infrastructure.
          </p>
        </div>

        {/* Right Side: Elegant Stack Diagram */}
        <div style={{ padding: '8rem 4rem', background: 'var(--color-wt-deep)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--color-wt-border)' }}>
            {[
              { num: 'L7', title: 'Enterprise Outcomes' },
              { num: 'L6', title: 'Optimization Engine' },
              { num: 'L5', title: 'Signal Modulation' },
              { num: 'L4', title: 'Predictive Modeling' },
              { num: 'L3', title: 'Health Intelligence' },
              { num: 'L2', title: 'Diagnostic Data' },
              { num: 'L1', title: 'Physical Infrastructure' },
            ].reverse().map((layer, i) => (
              <div 
                key={layer.num}
                style={{
                  background: 'var(--color-wt-deep)',
                  padding: '2rem',
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr',
                  alignItems: 'center',
                }}
              >
                <div className="label-mono" style={{ color: i === 6 ? 'var(--color-wt-cyan)' : 'var(--color-wt-muted)', fontSize: '1rem' }}>
                  {layer.num}
                </div>
                <div style={{ color: i === 6 ? 'var(--color-wt-text)' : 'var(--color-wt-muted)', fontSize: '1.25rem', fontWeight: 500 }}>
                  {layer.title}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
