'use client';
import Hero from '../components/Hero';
import '../styles/globals.css';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import BackToTop from '../components/BackToTop';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <BackToTop />
    </main>
  );
}
