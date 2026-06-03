import { motion } from 'framer-motion';

export default function BatteryIntelligenceNetwork() {
  return (
    <section id="network" style={{ position: 'relative', background: 'var(--color-wt-black)', borderBottom: '1px solid var(--color-wt-border)' }}>
      {/* Massive Cinematic Image Background */}
      <div style={{ position: 'relative', width: '100%', height: '85vh', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/network-identity.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} />
        <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to top, var(--color-wt-black) 0%, rgba(6,6,6,0.3) 50%, var(--color-wt-black) 100%)',
        }} />

        {/* Blueprint Grid Overlay to maintain technical precision */}
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />

        {/* Content Container */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div className="label-mono" style={{ color: 'var(--color-wt-green)', marginBottom: '2rem', letterSpacing: '0.1em' }}>
              THE WAVE TECH OPERATING SYSTEM
            </div>
            
            <h2 className="display-lg" style={{ marginBottom: '2rem', textShadow: '0 4px 24px rgba(0,0,0,0.8)' }}>
              <span className="gradient-text-white">The Battery</span><br />
              <span style={{ color: 'var(--color-wt-cyan)' }}>Intelligence Network</span>
            </h2>
            
            <p className="text-body" style={{ fontSize: '1.25rem', color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,0.8)', maxWidth: '600px' }}>
              A planetary-scale platform where every connected telecom tower, data center, and utility grid contributes to a living, self-optimizing energy ecosystem.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
