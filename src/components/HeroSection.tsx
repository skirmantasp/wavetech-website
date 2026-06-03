import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      background: 'var(--color-wt-black)',
      borderBottom: '1px solid var(--color-wt-border)'
    }}>
      {/* The Legendary Hero: Battery Intelligence Network Trademark */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/network-identity.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} />
        {/* Dark cinematic overlay */}
        <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 40%, rgba(10,10,10,0.3) 100%)',
        }} className="cinematic-shadow" />
      </div>

      {/* Blueprint Grid Overlay */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.4 }} />

      {/* Main Content Area */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        flex: 1, 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 0.8fr',
        paddingTop: '72px'
      }}>
        
        {/* Left Column: Hero Copy */}
        <div style={{ 
          padding: '6rem 4rem', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          borderRight: '1px solid var(--color-wt-border)',
          background: 'rgba(10,10,10,0.5)',
          backdropFilter: 'blur(8px)'
        }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="label-mono" style={{ color: 'var(--color-wt-cyan)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '20px', height: '1px', background: 'var(--color-wt-cyan)' }} />
              THE BATTERY INTELLIGENCE NETWORK
            </div>

            <h1 className="display-xl" style={{ marginBottom: '2rem' }}>
              <span className="gradient-text-white">The nervous system of</span><br/>
              <span className="gradient-text-white">global infrastructure.</span>
            </h1>

            <p className="text-body" style={{ maxWidth: '600px', marginBottom: '3.5rem', fontSize: '1.125rem' }}>
              WaveTech is the intelligence layer connecting and optimizing battery fleets globally. We transform passive assets into a living, self-healing network that guarantees critical infrastructure resilience.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <button className="btn-primary">
                Explore The Network
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Global Infrastructure HUD */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem' }}>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
            style={{ 
              background: 'rgba(10,10,10,0.65)', 
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--color-wt-border)',
              padding: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-wt-border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <span className="label-mono" style={{ color: 'var(--color-wt-subtle)' }}>GLOBAL OPTIMIZATION PATHWAYS</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-wt-cyan)' }} className="animate-blink" />
                <span className="label-mono" style={{ color: 'var(--color-wt-cyan)' }}>ROUTING</span>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <div className="label-mono" style={{ color: 'var(--color-wt-muted)', marginBottom: '0.5rem' }}>ACTIVE FLEETS (GLOBAL)</div>
                <div className="metric-value">4,192</div>
                <div className="label-mono" style={{ color: 'var(--color-wt-green)', marginTop: '0.5rem' }}>TELECOM + UTILITY</div>
              </div>
              <div>
                <div className="label-mono" style={{ color: 'var(--color-wt-muted)', marginBottom: '0.5rem' }}>DEGRADATION RISK AVERTED</div>
                <div className="metric-value">12.4<span style={{ fontSize: '1.5rem', color: 'var(--color-wt-muted)' }}>GWh</span></div>
                <div className="label-mono" style={{ color: 'var(--color-wt-cyan)', marginTop: '0.5rem' }}>REAL-TIME MITIGATION</div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-wt-border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span className="label-mono" style={{ color: 'var(--color-wt-muted)' }}>INFRASTRUCTURE INTELLIGENCE SCAN</span>
                <span className="label-mono" style={{ color: 'var(--color-wt-green)' }}>100% COVERAGE</span>
              </div>
              <div style={{ height: '2px', background: 'var(--color-wt-border-strong)', width: '100%', position: 'relative' }}>
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: '100%' }} 
                  transition={{ delay: 1, duration: 2, ease: "easeOut" }}
                  style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: 'var(--color-wt-green)' }} 
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Bottom Status Bar */}
      <div style={{ 
        position: 'relative', zIndex: 10,
        display: 'flex', 
        borderTop: '1px solid var(--color-wt-border)',
        background: 'var(--color-wt-deep)',
      }}>
        {['TELECOM BACKUP SYSTEMS', 'DATA CENTER UPS', 'GRID-SCALE STORAGE', 'INDUSTRIAL BESS'].map((sector, i) => (
          <div key={sector} style={{ 
            flex: 1, 
            padding: '1.5rem 2rem', 
            borderRight: i < 3 ? '1px solid var(--color-wt-border)' : 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{ width: '4px', height: '4px', background: 'var(--color-wt-subtle)' }} />
            <span className="label-mono" style={{ color: 'var(--color-wt-muted)' }}>{sector}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
