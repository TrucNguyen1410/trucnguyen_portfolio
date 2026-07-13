import React from 'react';
import { motion } from 'framer-motion';
import { useSite } from '../context/SiteContext';
import './About.css';

const About = () => {
  const { t } = useSite();
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="experience-badge">
              <span className="years">{t.about.badgeYears}</span>
              <span className="text">{t.about.badgeText}</span>
            </div>
            <div className="about-img-wrapper">
              <img
                src="/assets/hcmunre.webp"
                alt="HCMUNRE Official"
                className="about-main-img"
              />
            </div>
          </motion.div>

          <motion.div
            className="about-info"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="subheading">{t.about.subheading}</span>
            <h2 className="section-title">
              {t.about.titleLine1} <br />
              <span className="highlight">{t.about.titleHighlight}</span>
            </h2>
            <p className="about-objective">
              {t.about.objective}
            </p>

            <div className="info-list">
              <div className="info-item">
                <span className="label">{t.about.infoEducationLabel}</span>
                <span className="val">{t.about.infoEducationValue}</span>
              </div>
              <div className="info-item">
                <span className="label">{t.about.infoPassionLabel}</span>
                <span className="val">{t.about.infoPassionValue}</span>
              </div>
              <div className="info-item">
                <span className="label">{t.about.infoEmailLabel}</span>
                <span className="val">truc141004@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
