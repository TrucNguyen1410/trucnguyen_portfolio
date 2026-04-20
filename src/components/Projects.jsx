import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectList = [
  {
    id: 1,
    title: "Shopee Recommender System",
    category: "Machine Learning & Data",
    desc: "Hệ thống gợi ý sản phẩm thông minh ứng dụng Machine Learning để tối ưu hóa trải nghiệm người dùng dựa trên dữ liệu từ Shopee.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/TrucNguyen1410/Shopee-Recommender-System",
    images: ["1.1.png", "1.2.png", "1.3.png", "1.4.png", "1.5.png", "1.6.png", "1.7.png"]
  },
  {
    id: 2,
    title: "Art Shop Fullstack",
    category: "Web Development",
    desc: "Nền tảng thương mại điện tử chuyên biệt dành cho các sản phẩm văn hóa, nghệ thuật (tranh, tượng, v.v.).",
    tech: ["Web Fullstack", "RESTful API", "Database Management"],
    github: "https://github.com/TrucNguyen1410/art-shop-fullstack",
    images: ["2.1.png", "2.2.png", "2.3.png", "2.4.png", "2.5.png", "2.6.png", "2.7.png", "2.12.png", "2.13.png", "2.14.png"]
  },
  {
    id: 3,
    title: "Health Handbook App",
    category: "Mobile App",
    desc: "Ứng dụng di động giúp người dùng dễ dàng quản lý thông tin và hồ sơ sức khỏe y tế.",
    tech: ["Flutter", "MongoDB"],
    github: "https://github.com/TrucNguyen1410/health_handbook_app",
    images: ["3.1.png", "3.2.png", "3.3.png", "3.4.png"]
  },
  {
    id: 4,
    title: "Cinema Ticket Software",
    category: "Desktop Software",
    desc: "Phần mềm quản lý đặt vé xem phim thiết kế chuẩn mực, tối ưu hóa thao tác nghiệp vụ tại chỗ.",
    tech: ["C#", "WinForms", "SQL Server"],
    github: "https://github.com/TrucNguyen1410/Cinema_Ticket_Software",
    images: ["4.2.png", "4.3.png", "4.4.png", "4.5.png", "4.6.png", "4.7.png"]
  },
  {
    id: 5,
    title: "Course Management System",
    category: "System Design & OOAD",
    desc: "Hệ thống quản lý giáo dục toàn diện hỗ trợ đa luồng người dùng (Quản trị viên, Giảng viên, Sinh viên).",
    tech: ["OOAD", "UML", "Relational Database"],
    github: "https://github.com/TrucNguyen1410/course-management-system",
    images: ["5.1.png", "5.6.png", "5.7.png", "5.8.png", "5.9.png", "5.10.png", "5.11.png", "5.12.png"]
  }
];

const TiltCard = ({ project, onClick, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }
    }
  };

  return (
    <motion.div
      className="project-card-v2"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="card-accent-top"></div>
      <div className="card-image" style={{ transform: "translateZ(40px)" }}>
        <img
          src={`/assets/${project.images[0]}`}
          alt={project.title}
          onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=" + project.title }}
        />
        <div className="card-overlay">
          <span>XEM CHI TIẾT</span>
        </div>
      </div>
      <div className="card-info" style={{ transform: "translateZ(25px)" }}>
        <h3>{project.title}</h3>
        <span className="card-cat">{project.category}</span>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Hiệu ứng đổi màu nền nhẹ nhàng theo Obsidian Style
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#a1def5", "#bde8f8", "#a1def5"]
  );

  const titleVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <motion.section 
      id="projects" 
      className="projects-section" 
      ref={containerRef}
      style={{ backgroundColor: bgColor }}
    >
      <div className="container">
        <div style={{ overflow: "hidden" }}>
          <motion.span 
            className="subheading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
          >
            DANH MỤC SẢN PHẨM
          </motion.span>
        </div>
        <div style={{ overflow: "hidden", marginTop: "-5px" }}>
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={titleVariants}
          >
            Dự Án <span className="highlight">Nổi Bật</span>
          </motion.h2>
        </div>

        {/* Project Grid with Staggered Reveal */}
        <div className="projects-grid">
          {projectList.map((project, idx) => (
            <TiltCard 
              key={project.id} 
              project={project} 
              index={idx}
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      {/* Modal Detail View */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const ProjectModal = ({ project, onClose }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setImgIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = project.images.length - 1;
      if (next >= project.images.length) next = 0;
      return next;
    });
  };

  // Improved slide logic
  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <motion.div 
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}><X size={32} /></button>

        <div className="modal-body">
          {/* Gallery Slider */}
          <div className="modal-gallery">
            <div className="modal-slider">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={imgIndex}
                  src={`/assets/${project.images[imgIndex]}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  onError={(e) => { e.target.src = "https://via.placeholder.com/800?text=Image+Not+Found" }}
                />
              </AnimatePresence>

              <button className="modal-nav prev" onClick={() => paginate(-1)}><ChevronLeft size={24} /></button>
              <button className="modal-nav next" onClick={() => paginate(1)}><ChevronRight size={24} /></button>
            </div>
            
            <div className="modal-thumbnails">
              {project.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`modal-thumb-item ${idx === imgIndex ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(idx > imgIndex ? 1 : -1);
                    setImgIndex(idx);
                  }}
                >
                  <img src={`/assets/${img}`} alt="" onError={(e) => e.target.style.display = 'none'} />
                </div>
              ))}
            </div>
          </div>

          {/* Project Content */}
          <div className="modal-text">
            <span className="p-cat">{project.category}</span>
            <h2>{project.title}</h2>
            <p className="p-desc">{project.desc}</p>
            
            <div className="p-tech-labels">
              {project.tech.map((t, idx) => <span key={idx} className="tech-tag">{t}</span>)}
            </div>

            <div className="modal-footer">
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary">
                <FaGithub size={20} /> XEM REPOSITORY
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
