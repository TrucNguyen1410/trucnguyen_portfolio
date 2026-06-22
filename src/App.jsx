import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Certificates from './components/Certificates';
import { useSite } from './context/SiteContext';

function App() {
  const { navCollapsed } = useSite();

  return (
    <SmoothScroll>
      <div className="app" data-nav={navCollapsed ? 'collapsed' : 'expanded'}>
        <ScrollProgress />
        <CustomCursor />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Certificates />
          <Projects />
          <Contact />
        </main>
        <BackToTop />
        <Analytics />
      </div>
    </SmoothScroll>
  );
}

export default App;
