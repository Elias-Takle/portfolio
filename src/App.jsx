import { Navbar, Footer, Progress } from './components/Layout.jsx';
import { useReveal } from './hooks.js';
import { Hero, Marquee, About, Skills, Projects, Services, Process } from './components/Sections.jsx';
import { Contact } from './components/Contact.jsx';

export default function App() {
  useReveal();
  return (
    <>
      <Progress />
      <a className="skip" href="#about">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
