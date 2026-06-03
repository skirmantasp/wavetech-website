import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  subject: string;
}

export default function ContactForm({ isOpen, onClose, subject }: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, subject }),
      });

      if (res.ok) {
        setStatus('sent');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', email: '', company: '', message: '' });
        }, 2500);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'var(--color-wt-black)',
    border: '1px solid var(--color-wt-border)',
    color: 'var(--color-wt-text)',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.875rem',
    outline: 'none',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '500px',
              background: 'var(--color-wt-deep)',
              border: '1px solid var(--color-wt-border)',
              boxShadow: '0 24px 64px rgba(0, 0, 0, 0.6)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.5rem 2rem',
              borderBottom: '1px solid var(--color-wt-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'var(--color-wt-black)',
            }}>
              <div>
                <div className="label-mono" style={{ color: 'var(--color-wt-cyan)', marginBottom: '0.25rem', fontSize: '0.65rem' }}>
                  {subject.toUpperCase()}
                </div>
                <div style={{ color: 'var(--color-wt-text)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Contact WaveTech
                </div>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: 'none',
                  border: '1px solid var(--color-wt-border)',
                  color: 'var(--color-wt-muted)',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                }}
              >
                ✕
              </button>
            </div>

            {/* Form */}
            {status === 'sent' ? (
              <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                <div style={{ color: 'var(--color-wt-green)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  MESSAGE TRANSMITTED
                </div>
                <div style={{ color: 'var(--color-wt-muted)', fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                  Our team will respond within 24 hours.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label className="label-mono" style={{ color: 'var(--color-wt-muted)', display: 'block', marginBottom: '0.5rem', fontSize: '0.65rem' }}>
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="label-mono" style={{ color: 'var(--color-wt-muted)', display: 'block', marginBottom: '0.5rem', fontSize: '0.65rem' }}>
                    BUSINESS EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="label-mono" style={{ color: 'var(--color-wt-muted)', display: 'block', marginBottom: '0.5rem', fontSize: '0.65rem' }}>
                    COMPANY
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={inputStyle}
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="label-mono" style={{ color: 'var(--color-wt-muted)', display: 'block', marginBottom: '0.5rem', fontSize: '0.65rem' }}>
                    MESSAGE
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
                    placeholder="Tell us about your infrastructure needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary"
                  style={{
                    marginTop: '0.5rem',
                    opacity: status === 'sending' ? 0.6 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? 'TRANSMITTING...' : 'SUBMIT REQUEST'}
                </button>

                {status === 'error' && (
                  <div style={{ color: '#ff4444', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textAlign: 'center' }}>
                    Transmission failed. Please try again.
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
