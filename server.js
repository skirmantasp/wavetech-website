import express from 'express';
import { OpenAI } from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, 'dist')));

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are the WaveTech AI Assistant — a knowledgeable, professional, and concise representative of WaveTech, a deep-tech infrastructure company specializing in battery intelligence.

ABOUT WAVETECH:
WaveTech builds the intelligence layer for global battery infrastructure. The company combines proprietary battery diagnostics, signal modulation, and predictive intelligence to extend battery lifespan, reduce downtime, and unlock capital efficiency across critical energy systems.

PLATFORM SUITE:
1. BEAT (Continuous Optimization Protocol) — Active impedance stabilization for telecom and critical UPS systems. Extends hardware lifespan up to 2x by preventing crystallization.
2. BARS (Advanced Rejuvenation System) — Capacity recovery for global industrial storage. Recovers up to 80% of lost capacity, delaying capital replacement.
3. BCAT (Diagnostic Intelligence) — Predictive network telemetry for planetary fleet aggregation. Delivers high-resolution Remaining Useful Life (RUL) forecasting.

TARGET MARKETS:
- Telecom operators (backup battery systems)
- Data centers (UPS systems)
- Grid-scale energy storage (BESS)
- Industrial battery fleets
- Utilities

KEY FACTS:
- 34+ granted and pending patents
- 1,000s of critical sites managed
- 15+ years of R&D and field data
- Verified by independent laboratories
- Operating in 20+ countries

BEHAVIOR RULES:
- Be professional, concise, and helpful.
- If asked about pricing, say: "Pricing depends on deployment scale and infrastructure type. I'd recommend scheduling an Executive Briefing for a tailored proposal."
- If asked something outside WaveTech's domain, politely redirect.
- Keep answers short (2-4 sentences) unless the user asks for details.
- Never fabricate technical specifications or claim capabilities not listed above.
- Respond in the same language the user writes in.`;

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || 'I apologize, I was unable to process your request.';

    res.json({ reply });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Failed to get response from AI.' });
  }
});

// SPA fallback — serve index.html for all non-API routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`WaveTech server running on port ${PORT}`);
});
