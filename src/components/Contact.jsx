import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { profile } from '../data.js';
import { L, Section } from './ui.jsx';

const API = import.meta.env.VITE_API_URL || '/.netlify/functions/contact';
const handle = (url) => url.split('/').filter(Boolean).pop();
const cards = [
  { Icon: FaEnvelope, label: 'Email', value: profile.email, hint: 'Best for project and job enquiries', href: profile.email, mailto: true },
  { Icon: FaGithub, label: 'GitHub', value: `@${handle(profile.github)}`, hint: 'Browse my code and repositories', href: profile.github },
  { Icon: FaLinkedin, label: 'LinkedIn', value: profile.name, hint: "Let's connect professionally", href: profile.linkedin },
];
const init = { name: '', email: '', subject: '', message: '', website: '' };

const validate = (v) => {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.';
  if (v.subject.trim().length < 3) e.subject = 'Add a subject (at least 3 characters).';
  if (v.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.';
  return e;
};

function Field({ id, label, error, area, ...rest }) {
  const C = area ? 'textarea' : 'input';
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <C id={id} name={id} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined} {...rest} />
      {error && <p id={`${id}-e`} className="err" role="alert">{error}</p>}
    </div>
  );
}

export function Contact() {
  const [v, setV] = useState(init);
  const [errs, setErrs] = useState({});
  const [status, setStatus] = useState('idle');
  const set = (e) => setV({ ...v, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    const er = validate(v);
    setErrs(er);
    if (Object.keys(er).length) return;
    setStatus('sending');
    try {
      const r = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(v) });
      if (!r.ok) throw new Error('failed');
      setStatus('ok');
      setV(init);
    } catch {
      setStatus('err');
    }
  }

  return (
    <Section id="contact" title="Let's work together" intro="Have a project or an opportunity in mind? Send a message and I'll reply by email.">
      <div className="two">
        <div className="xlist">
          {cards.map(({ Icon, label, value, hint, href, mailto }) => (
            <L key={label} href={href} mailto={mailto} className="xcard">
              <span className="xi"><Icon aria-hidden="true" /></span>
              <span className="xt"><small>{label}</small><strong>{value}</strong><em>{hint}</em></span>
              <FaArrowRight className="xa" aria-hidden="true" />
            </L>
          ))}
        </div>
        <form onSubmit={submit} noValidate className="form">
          <Field id="name" label="Name" value={v.name} onChange={set} error={errs.name} autoComplete="name" />
          <Field id="email" label="Email" type="email" value={v.email} onChange={set} error={errs.email} autoComplete="email" />
          <Field id="subject" label="Subject" value={v.subject} onChange={set} error={errs.subject} />
          <Field id="message" label="Message" area rows="5" value={v.message} onChange={set} error={errs.message} />
          <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={v.website} onChange={set} />
          <button className="btn btn-p" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send message'}</button>
          <p className={`status ${status}`} role="status">
            {status === 'ok' && 'Message sent. I will reply by email.'}
            {status === 'err' && 'The message could not be sent. Please try again or email me directly.'}
          </p>
        </form>
      </div>
    </Section>
  );
}
