import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useSite } from '../context/SiteContext';
import './Hero.css';

const Hero = () => {
  const { t } = useSite();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Subtle parallax transforms
  const textX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10px", "10px"]);
  const textY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10px", "10px"]);
  const imgX = useTransform(mouseXSpring, [-0.5, 0.5], ["15px", "-15px"]);
  const imgY = useTransform(mouseYSpring, [-0.5, 0.5], ["15px", "-15px"]);

  const handleMouseMove = (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const mouseX = e.clientX / width - 0.5;
    const mouseY = e.clientY / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const titleVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <section id="home" className="hero-section" onMouseMove={handleMouseMove}>
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            style={{ x: textX, y: textY }}
          >
            <div style={{ overflow: "hidden" }}>
              <motion.span 
                className="subheading"
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                {t.hero.role}
              </motion.span>
            </div>
            
            <div style={{ overflow: "hidden", padding: "0.5rem 0" }}>
              <motion.h1 
                className="hero-name"
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                {t.hero.nameFirst}<span className="highlight">{t.hero.nameHighlight}</span>
              </motion.h1>
            </div>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t.hero.description}
            </motion.p>
            <motion.div 
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a href="#projects" className="btn btn-primary">{t.hero.btnProjects}</a>
              <a href="#contact" className="btn btn-outline">{t.hero.btnConnect}</a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image-container"
            style={{ x: imgX, y: imgY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="image-frame">
              <img 
                src="/assets/profile.webp"
                alt="Nguyễn Lê Anh Trúc"
                className="profile-img" 
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x800/050505/ffffff?text=NGUYEN+LE+ANH+TRUC";
                }}
              />
              <div className="accent-border"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>{t.hero.scroll}</span>
      </div>
    </section>
  );
};

export default Hero;
