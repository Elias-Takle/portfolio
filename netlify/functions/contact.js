// Express app wrapped as a Netlify Function. Receives the contact form and emails it via SMTP.
const express = require('express');
const serverless = require('serverless-http');
const nodemailer = require('nodemailer');

const app = express();
const hits = new Map(); // best-effort, per function instance
const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && allowed.includes(origin)) {
    res.set({
      'Access-Control-Allow-Origin': origin,
      Vary: 'Origin',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
    });
  }
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});
app.use(express.json({ limit: '10kb' }));

app.post('*', async (req, res) => {
  const { name, email, subject, message, website } = req.body || {};
  if (website) return res.json({ ok: true }); // honeypot: pretend success to bots

  const ip = req.headers['x-nf-client-connection-ip'] || req.headers['x-forwarded-for'] || 'unknown';
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  if (recent.length >= 5) return res.status(429).json({ error: 'Too many messages. Try again later.' });
  hits.set(ip, [...recent, now]);

  const ok = (v, min, max) => typeof v === 'string' && v.trim().length >= min && v.length <= max;
  if (!ok(name, 2, 100) || !ok(subject, 3, 150) || !ok(message, 10, 5000) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '')) {
    return res.status(400).json({ error: 'Invalid form data.' });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    return res.status(500).json({ error: 'Mail service is not configured.' });
  }
  try {
    const port = Number(SMTP_PORT) || 587;
    const transport = nodemailer.createTransport({ host: SMTP_HOST, port, secure: port === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } });
    await transport.sendMail({
      from: `"Portfolio contact" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: `[Portfolio] ${subject.trim()}`,
      text: `From: ${name.trim()} <${email}>\n\n${message.trim()}`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Mail error:', err.message);
    res.status(502).json({ error: 'Could not send the message.' });
  }
});

module.exports.handler = serverless(app);
