import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 22, stiffness: 320, mass: 0.4 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      'a, button, .project-card-v2, .skill-category, .contact-card'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`star-cursor ${isHovering ? 'hovering' : ''}`}
      style={{ x: cursorX, y: cursorY }}
      aria-hidden="true"
    >
      <svg className="star-cursor-svg" viewBox="0 0 32 32" width="32" height="32">
        <defs>
          <linearGradient id="star-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fffdf2" />
            <stop offset="0.35" stopColor="#ffe9a8" />
            <stop offset="0.7" stopColor="#e9b84e" />
            <stop offset="1" stopColor="#b9831f" />
          </linearGradient>
          <radialGradient id="star-core" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#fff3c4" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* 4-point sparkle */}
        <path
          className="star-shape"
          d="M16 1 C17.6 11.5, 20.5 14.4, 31 16 C20.5 17.6, 17.6 20.5, 16 31 C14.4 20.5, 11.5 17.6, 1 16 C11.5 14.4, 14.4 11.5, 16 1 Z"
          fill="url(#star-metal)"
        />
        <circle cx="16" cy="16" r="6" fill="url(#star-core)" />
      </svg>
    </motion.div>
  );
};

export default CustomCursor;
