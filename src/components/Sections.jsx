import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile, skills, experience, certifications, learning, projects, services, process } from '../data.js';
import { L, Section, Tag } from './ui.jsx';

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-h">
      <div className="wrap hero-in">
        <div>
          <p className="role">{profile.title} · {profile.location}</p>
          <h1 id="hero-h">
            {[['I', 0], ['build', 0], ['complete', 1], ['web', 1], ['applications,', 1], ['from', 0], ['interface', 0], ['to', 0], ['database.', 0]].map(([w, g], i) => (
              <span key={i}>{i > 0 && ' '}<span className={g ? 'w grad' : 'w'} style={{ '--i': i }}>{w}</span></span>
            ))}
          </h1>
          <p className="lead">I design responsive interfaces in React, write the server logic in Node.js and Express, and model the data in SQL, so a project ships as one coherent, working product. Currently exploring agentic AI and RAG.</p>
          <div className="cta">
            <a className="btn btn-p" href="#projects">View My Projects</a>
            <a className="btn btn-o" href="#contact">Contact Me</a>
          </div>
          <div className="soc">
            <L href={profile.github} aria-label="GitHub"><FaGithub /></L>
            <L href={profile.linkedin} aria-label="LinkedIn"><FaLinkedin /></L>
          </div>
        </div>
        <figure className="photo"><div className="ring">
          {profile.photo ? <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="360" height="420" /> : <div className="ph-img" role="img" aria-label="Profile photo placeholder"><span>{profile.name[0]}</span><small>[PROFILE PHOTO]</small></div>}</div>
        </figure>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="two">
        <div className="prose">
          <p>I'm {profile.name}, a self-taught Full-Stack Developer and mechanical engineering student at Addis Ababa University. I build complete products, from offline desktop systems to modern web storefronts.</p>
          <p>I trained in full-stack development at Evangadi Networks, working with React, Node.js, Express and SQL, including authentication and REST APIs. I also earned honors in a University of Tokyo data science course, and I write Python fluently.</p>
          <p>Right now I'm going deep on agentic AI and retrieval-augmented generation, and I want to keep shipping real software that solves practical problems.</p>
        </div>
        <ul className="panel">
          {[['Start from the problem', 'I clarify what needs solving before choosing tools.'], ['Write maintainable code', 'Small, reusable pieces that are easy to change later.'], ['Own the whole feature', 'From UI and API to the database and deployment.'], ['Keep learning', 'I treat each project as a chance to improve.']].map(([t, d]) => (
            <li key={t}><strong>{t}</strong><span>{d}</span></li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="The technologies I use to build complete web applications.">
      <div className="grid g4">
        {skills.map((g) => (
          <article key={g.title} className="card">
            <h3>{g.title}</h3>
            <ul className="chips">{g.items.map(([n, I]) => <li key={n}><I aria-hidden="true" />{n}</li>)}</ul>
            {g.also && (<><p className="sub">Also working with</p><ul className="chips dim">{g.also.map(([n, I]) => <li key={n}><I aria-hidden="true" />{n}</li>)}</ul></>)}
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Featured projects" intro="A selection of applications I've built.">
      <div className="grid g3">
        {projects.map((p, i) => (
          <article key={i} className="card proj">
            {p.image ? <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" width="640" height="360" /> : <div className="shot" role="img" aria-label="Project screenshot placeholder">[SCREENSHOT]</div>}
            <div className="proj-b">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p className="sub">Problem it solves</p>
              <p>{p.problem}</p>
              <p className="sub">Main features</p>
              <ul className="list">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <ul className="chips tags">{p.tech.map((t, k) => <li key={k}><Tag>{t}</Tag></li>)}</ul>
              {p.note && <p className="note">{p.note}</p>}
              <div className="links">
                <L href={p.repo} className="btn btn-o sm">GitHub</L>
                {p.demo && <L href={p.demo} className="btn btn-p sm">Live demo</L>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Services() {
  return (
    <Section id="services" title="Services" intro="What I can build for you.">
      <div className="grid g3">
        {services.map(([t, d]) => <article key={t} className="card"><h3>{t}</h3><p>{d}</p></article>)}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" title="My development process" intro="How an idea becomes a working application.">
      <ol className="tl">
        {process.map(([t, d], i) => (
          <li key={t}><span className="dot">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>
        ))}
      </ol>
    </Section>
  );
}

// Slow, looping strip of the tech stack. Decorative: the Skills section holds the real list.
export function Marquee() {
  const items = skills.flatMap((g) => [...g.items, ...(g.also || [])]);
  return (
    <div className="marq" aria-hidden="true">
      <div className="marq-t">
        {[...items, ...items].map(([n, I], i) => <span key={i}><I />{n}</span>)}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience & education" intro="The training, study and recognition behind the work.">
      <div className="two ex">
        <div className="stack">
          {experience.map((e) => (
            <article key={e.title} className="card">
              <h3>{e.title}</h3>
              <p className="org">{e.org}</p>
              <ul className="list">{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="stack">
          <article className="card">
            <h3>Certifications & awards</h3>
            {certifications.map(([t, o, d]) => (
              <div key={t} className="cert"><strong>{t}</strong><p className="org">{o}</p><p>{d}</p></div>
            ))}
          </article>
          <article className="card">
            <h3>Currently learning</h3>
            <ul className="chips dim">{learning.map((x) => <li key={x}>{x}</li>)}</ul>
          </article>
        </div>
      </div>
    </Section>
  );
}
