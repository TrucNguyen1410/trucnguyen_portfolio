import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';

import Certificates from './components/Certificates';

function App() {
  return (
    <SmoothScroll>
      <div className="app">
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
      </div>
    </SmoothScroll>
  );
}

export default App;
