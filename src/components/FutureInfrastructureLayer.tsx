import { motion } from 'framer-motion';

export default function FutureInfrastructureLayer({ onRequestBriefing }: { onRequestBriefing: () => void }) {
  return (
    <section style={{ position: 'relative', background: 'var(--color-wt-black)' }}>
      {/* Cinematic Visionary Background */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/future-vision.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} />
        <div style={{ 
          position: 'absolute', inset: 0, 
          background: 'linear-gradient(to right, rgba(6,6,6,0.95) 0%, rgba(6,6,6,0.7) 50%, rgba(6,6,6,0.1) 100%)',
        }} />

        {/* Content Container (Emotional / Visionary) */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '6rem 4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ maxWidth: '800px' }}
          >
            <div className="label-mono" style={{ color: 'var(--color-wt-cyan)', marginBottom: '2rem' }}>
              THE FUTURE OF INFRASTRUCTURE
            </div>
            
            <h2 className="display-lg" style={{ marginBottom: '2rem', lineHeight: 1.1 }}>
              <span className="gradient-text-white">When degradation is</span><br />
              <span style={{ color: 'var(--color-wt-text)' }}>no longer accepted.</span>
            </h2>
            
            <p className="text-body" style={{ fontSize: '1.25rem', color: 'var(--color-wt-muted)', marginBottom: '2rem', maxWidth: '600px' }}>
              WaveTech is not a battery company. We are building the intelligence layer that guarantees infrastructure resilience. 
            </p>
            <p className="text-body" style={{ fontSize: '1.25rem', color: 'var(--color-wt-muted)', marginBottom: '4rem', maxWidth: '600px' }}>
              By transforming unpredictable chemical degradation into predictable, controllable software intelligence, we are permanently altering the capital efficiency and operational longevity of the world's most critical systems.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <button className="btn-primary" onClick={onRequestBriefing}>
                Request Executive Briefing
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
