import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, Menu, X, Award, Sun, Moon, Download, ChevronDown, PanelLeftClose, PanelLeftOpen, Building2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('home');
  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef(null);
  const { lang, setLang, theme, toggleTheme, navCollapsed, toggleNav, t } = useSite();

  useEffect(() => {
    if (!cvOpen) return;
    const handleClick = (e) => {
      if (cvRef.current && !cvRef.current.contains(e.target)) setCvOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [cvOpen]);

  const navItems = [
    { id: 'home', icon: <Home size={20} />, label: t.nav.home },
    { id: 'about', icon: <User size={20} />, label: t.nav.about },
    { id: 'experience', icon: <Building2 size={20} />, label: t.nav.experience },
    { id: 'skills', icon: <Code size={20} />, label: t.nav.skills },
    { id: 'certificates', icon: <Award size={20} />, label: t.nav.certificates },
    { id: 'projects', icon: <Briefcase size={20} />, label: t.nav.projects },
    { id: 'contact', icon: <Mail size={20} />, label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'certificates', 'projects', 'contact'];
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
      <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
        {isOpen ? <X color="white" /> : <Menu color="white" />}
      </button>

      <button
        className="nav-collapse-toggle"
        onClick={toggleNav}
        aria-label={navCollapsed ? t.actions.expandNav : t.actions.collapseNav}
        title={navCollapsed ? t.actions.expandNav : t.actions.collapseNav}
      >
        {navCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
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
          <div className="nav-controls">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.actions.themeLight : t.actions.themeDark}
              title={theme === 'dark' ? t.actions.themeLight : t.actions.themeDark}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="lang-switch" role="group" aria-label="Language">
              <button
                className={lang === 'vi' ? 'active' : ''}
                onClick={() => setLang('vi')}
                aria-pressed={lang === 'vi'}
              >
                VI
              </button>
              <button
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            <div className="cv-dropdown" ref={cvRef}>
              <button
                className={`cv-trigger ${cvOpen ? 'open' : ''}`}
                onClick={() => setCvOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={cvOpen}
                title={t.actions.downloadCV}
              >
                <Download size={14} />
                <span>CV</span>
                <ChevronDown className="cv-caret" size={14} />
              </button>

              <AnimatePresence>
                {cvOpen && (
                  <motion.div
                    className="cv-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                  >
                    <a
                      href="/cv-vi.pdf"
                      download="Nguyen_Le_Anh_Truc_CV_VI.pdf"
                      onClick={() => setCvOpen(false)}
                    >
                      <span className="cv-flag">VI</span>
                      {t.actions.cvVI}
                    </a>
                    <a
                      href="/cv-en.pdf"
                      download="Nguyen_Le_Anh_Truc_CV_EN.pdf"
                      onClick={() => setCvOpen(false)}
                    >
                      <span className="cv-flag">EN</span>
                      {t.actions.cvEN}
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
