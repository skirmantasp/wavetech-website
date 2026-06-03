import { motion } from 'framer-motion';

export default function DeploymentMapSection() {
  return (
    <section id="deployment" style={{ position: 'relative', background: 'var(--color-wt-black)', borderBottom: '1px solid var(--color-wt-border)' }}>
      {/* Full width map container */}
      <div style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/deployment-map.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} />
        <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to top, var(--color-wt-deep) 0%, rgba(10,10,10,0.2) 30%, rgba(10,10,10,0.8) 100%)',
        }} />

        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

        {/* Content Overlay */}
        <div style={{ position: 'absolute', inset: 0, padding: '6rem 4rem', display: 'flex', flexDirection: 'column' }}>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="label-mono" style={{ color: 'var(--color-wt-cyan)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '20px', height: '1px', background: 'var(--color-wt-cyan)' }} />
              PLANETARY DEPLOYMENT
            </div>
            <h2 className="display-md" style={{ marginBottom: '2rem' }}>
              <span className="gradient-text-white">Operating at</span><br/>
              <span style={{ color: 'var(--color-wt-text)' }}>Global Scale.</span>
            </h2>
            <p className="text-body" style={{ maxWidth: '480px', fontSize: '1.125rem' }}>
              WaveTech connects distributed critical assets—from isolated telecom towers in extreme climates to massive grid-scale storage facilities—into one unified intelligence ecosystem.
            </p>
          </motion.div>

          {/* Map specific metrics */}
          <div style={{ marginTop: 'auto', display: 'flex', gap: '4rem' }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <div className="metric-value">24<span style={{ fontSize: '1.5rem', color: 'var(--color-wt-muted)' }}>/7</span></div>
              <div className="label-mono" style={{ color: 'var(--color-wt-muted)', marginTop: '0.5rem' }}>CONTINUOUS DIAGNOSTICS</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <div className="metric-value">20+</div>
              <div className="label-mono" style={{ color: 'var(--color-wt-muted)', marginTop: '0.5rem' }}>COUNTRIES OPERATING</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <div className="metric-value">120<span style={{ fontSize: '1.5rem', color: 'var(--color-wt-muted)' }}>TB</span></div>
              <div className="label-mono" style={{ color: 'var(--color-wt-muted)', marginTop: '0.5rem' }}>ELECTROCHEMICAL DATA</div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
