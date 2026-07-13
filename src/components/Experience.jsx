import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Briefcase, ExternalLink } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import './Experience.css';

const LOGOS = {
  'Athena Studio': '/assets/logo-athena.webp',
  'Automation Land': '/assets/logo-automationland.webp',
};

const Experience = () => {
  const { t } = useSite();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <span className="subheading">{t.experience.subheading}</span>
        <h2 className="section-title">
          {t.experience.titleLine} <span className="highlight">{t.experience.titleHighlight}</span>
        </h2>

        <motion.div
          className="exp-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {t.experience.items.map((item, i) => (
            <motion.article key={i} className="exp-card" variants={itemVariants}>
              <div className="exp-card-top">
                {LOGOS[item.company] ? (
                  <div className="exp-logo-chip">
                    <img src={LOGOS[item.company]} alt={`${item.company} logo`} />
                  </div>
                ) : (
                  <div className="exp-icon">
                    <Building2 size={26} />
                  </div>
                )}
                {item.current && <span className="exp-current">{t.experience.currentLabel}</span>}
              </div>

              <h3 className="exp-company">{item.company}</h3>
              <div className="exp-role-row">
                <Briefcase size={15} />
                <span className="exp-role">{item.role}</span>
              </div>
              <span className="exp-period">{item.period}</span>

              <ul className="exp-points">
                {item.points.map((p, j) => (
                  <li key={j}>
                    {p.label && <strong className="exp-point-label">{p.label}: </strong>}
                    {p.text}
                  </li>
                ))}
              </ul>

              {item.link && (
                <a className="exp-link" href={item.link.url} target="_blank" rel="noreferrer">
                  <ExternalLink size={14} />
                  {item.link.label}
                </a>
              )}

              <div className="exp-tech">
                {item.tech.map((tech, k) => (
                  <span key={k} className="exp-tag">{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
