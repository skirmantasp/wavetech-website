import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Welcome to WaveTech. How can I help you with battery infrastructure intelligence today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages.map(m => ({ role: m.role, content: m.content })) }),
      });

      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Connection error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9999,
          width: '56px',
          height: '56px',
          background: 'var(--color-wt-cyan)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(0, 194, 255, 0.3)',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="square"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/></svg>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: '6rem',
              right: '2rem',
              zIndex: 9998,
              width: '400px',
              maxHeight: '520px',
              background: 'var(--color-wt-deep)',
              border: '1px solid var(--color-wt-border)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(0, 0, 0, 0.6)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1rem 1.25rem',
              borderBottom: '1px solid var(--color-wt-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'var(--color-wt-black)',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-wt-cyan)' }} className="animate-blink" />
              <span className="label-mono" style={{ color: 'var(--color-wt-text)', letterSpacing: '0.08em' }}>WAVETECH AI ASSISTANT</span>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              minHeight: '300px',
              maxHeight: '360px',
            }}>
              {messages.map((msg, i) => (
                <div key={i} style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '0.75rem 1rem',
                  background: msg.role === 'user' ? 'var(--color-wt-cyan)' : 'var(--color-wt-black)',
                  border: msg.role === 'user' ? 'none' : '1px solid var(--color-wt-border)',
                  color: msg.role === 'user' ? '#0a0a0a' : 'var(--color-wt-text)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                }}>
                  {msg.content}
                </div>
              ))}

              {isLoading && (
                <div style={{
                  alignSelf: 'flex-start',
                  padding: '0.75rem 1rem',
                  background: 'var(--color-wt-black)',
                  border: '1px solid var(--color-wt-border)',
                  color: 'var(--color-wt-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                }}>
                  Analyzing...
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={{
              padding: '0.75rem',
              borderTop: '1px solid var(--color-wt-border)',
              display: 'flex',
              gap: '0.5rem',
              background: 'var(--color-wt-black)',
            }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about WaveTech..."
                style={{
                  flex: 1,
                  padding: '0.65rem 1rem',
                  background: 'var(--color-wt-deep)',
                  border: '1px solid var(--color-wt-border)',
                  color: 'var(--color-wt-text)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  outline: 'none',
                }}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading}
                style={{
                  padding: '0.65rem 1rem',
                  background: 'var(--color-wt-cyan)',
                  border: 'none',
                  color: '#0a0a0a',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.5 : 1,
                }}
              >
                SEND
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
