import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Mail, Menu, X, Award } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('home');

  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: 'Home' },
    { id: 'about', icon: <User size={20} />, label: 'About' },
    { id: 'skills', icon: <Code size={20} />, label: 'Skills' },
    { id: 'certificates', icon: <Award size={20} />, label: 'Certs' },
    { id: 'projects', icon: <Briefcase size={20} />, label: 'Projects' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'certificates', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSegment(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X color="white" /> : <Menu color="white" />}
      </button>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="nav-backdrop" onClick={() => setIsOpen(false)}></div>
        <div className="nav-logo">
          <div className="logo-circle">T</div>
          <span className="logo-text">TRUC</span>
        </div>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={activeSegment === item.id ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-footer">
          <div className="social-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
