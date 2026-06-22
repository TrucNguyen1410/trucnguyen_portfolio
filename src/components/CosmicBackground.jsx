import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSite } from '../context/SiteContext';
import './CosmicBackground.css';

const Ship = () => (
  <svg viewBox="0 0 120 60" width="100%" height="100%" fill="none">
    <defs>
      <linearGradient id="ship-body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#eaf2ff" />
        <stop offset="1" stopColor="#9fb6e0" />
      </linearGradient>
      <radialGradient id="ship-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#5cc6ee" stopOpacity="0.9" />
        <stop offset="1" stopColor="#5cc6ee" stopOpacity="0" />
      </radialGradient>
    </defs>
    {/* thruster glow */}
    <ellipse className="ship-thrust" cx="14" cy="30" rx="22" ry="9" fill="url(#ship-glow)" />
    {/* hull */}
    <path d="M30 30 C46 14, 74 12, 108 30 C74 48, 46 46, 30 30 Z" fill="url(#ship-body)" />
    {/* fins */}
    <path d="M44 22 L36 8 L58 20 Z" fill="#5cc6ee" />
    <path d="M44 38 L36 52 L58 40 Z" fill="#3b82d6" />
    {/* cockpit */}
    <ellipse cx="84" cy="30" rx="10" ry="6" fill="#0b1830" />
    <ellipse cx="84" cy="30" rx="10" ry="6" fill="#5cc6ee" fillOpacity="0.35" />
  </svg>
);

const CosmicBackground = () => {
  const { theme } = useSite();
  const canvasRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Planet parallax (hooks must be unconditional & fixed in count)
  const p1y = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const p2y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const p3y = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const p4y = useTransform(scrollYProgress, [0, 1], [0, 340]);

  // Spaceship fly-bys mapped to scroll progress
  const shipAx = useTransform(scrollYProgress, [0.08, 0.42], ['-18vw', '118vw']);
  const shipAy = useTransform(scrollYProgress, [0.08, 0.25, 0.42], ['14vh', '6vh', '18vh']);
  const shipBx = useTransform(scrollYProgress, [0.55, 0.92], ['118vw', '-18vw']);
  const shipBy = useTransform(scrollYProgress, [0.55, 0.75, 0.92], ['66vh', '74vh', '60vh']);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const starRGB = theme === 'light' ? '40, 70, 120' : '255, 255, 255';

    let W = 0;
    let H = 0;
    let dpr = 1;
    let stars = [];
    let shooting = [];
    let scrollY = window.scrollY;
    let lastShoot = 0;
    let raf = 0;

    const count = window.innerWidth < 768 ? 120 : 260;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.width = Math.floor(window.innerWidth * dpr);
      H = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const seed = () => {
      stars = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        z: Math.random(),
        r: Math.random() * 1.2 + 0.3,
        tw: Math.random() * Math.PI * 2,
      }));
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };
    const onResize = () => {
      resize();
      seed();
    };

    resize();
    seed();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    const draw = (t) => {
      ctx.clearRect(0, 0, W, H);

      for (const s of stars) {
        const depth = 0.2 + s.z * 0.8;
        let y = (s.y * H + scrollY * depth * 0.35 * dpr) % H;
        if (y < 0) y += H;
        const twinkle = reduce ? 0.85 : 0.55 + 0.45 * Math.sin(t * 0.001 + s.tw);
        ctx.globalAlpha = twinkle * (0.35 + s.z * 0.65);
        ctx.fillStyle = `rgb(${starRGB})`;
        ctx.beginPath();
        ctx.arc(s.x * W, y, s.r * dpr * (0.6 + s.z), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!reduce) {
        if (t - lastShoot > 2800 && Math.random() < 0.45 && shooting.length < 2) {
          lastShoot = t;
          shooting.push({
            x: Math.random() * W * 0.7,
            y: Math.random() * H * 0.4,
            vx: (6 + Math.random() * 4) * dpr,
            vy: (3 + Math.random() * 2) * dpr,
            life: 0,
            max: 55,
          });
        }
        shooting = shooting.filter((sh) => sh.life < sh.max);
        for (const sh of shooting) {
          sh.life += 1;
          sh.x += sh.vx;
          sh.y += sh.vy;
          const a = Math.sin((sh.life / sh.max) * Math.PI);
          const tx = sh.x - sh.vx * 6;
          const ty = sh.y - sh.vy * 6;
          const grad = ctx.createLinearGradient(sh.x, sh.y, tx, ty);
          grad.addColorStop(0, `rgba(${starRGB}, ${a})`);
          grad.addColorStop(1, `rgba(${starRGB}, 0)`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2 * dpr;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(sh.x, sh.y);
          ctx.lineTo(tx, ty);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [theme]);

  return (
    <div className="cosmic-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="cosmic-stars" />

      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />

      <motion.div className="planet planet-1" style={{ y: p1y }} />
      <motion.div className="planet planet-2" style={{ y: p2y }} />
      <motion.div className="planet planet-3" style={{ y: p3y }}>
        <span className="planet-ring" />
      </motion.div>
      <motion.div className="planet planet-4" style={{ y: p4y }} />

      <motion.div className="spaceship ship-a" style={{ x: shipAx, y: shipAy }}>
        <Ship />
      </motion.div>
      <motion.div className="spaceship ship-b" style={{ x: shipBx, y: shipBy }}>
        <Ship />
      </motion.div>
    </div>
  );
};

export default CosmicBackground;
