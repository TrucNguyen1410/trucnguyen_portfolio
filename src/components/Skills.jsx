import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Database, BrainCircuit } from 'lucide-react';
import { FaFigma } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile & Desktop",
      icon: <Smartphone size={32} />,
      skills: ["Flutter & Dart", "WinForms (C#)", "Mobile Development", "Desktop App Architecture"]
    },
    {
      title: "Web & Backend",
      icon: <Database size={32} />,
      skills: ["Web Fullstack", "RESTful API", "Python Development", "JavaScript & HTML/CSS"]
    },
    {
      title: "Systems & Data",
      icon: <BrainCircuit size={32} />,
      skills: ["OOAD & UML", "Relational Database", "SQL Server & MongoDB", "Software Design Patterns"]
    },
    {
      title: "AI & Quality",
      icon: <BrainCircuit size={32} />,
      skills: ["Machine Learning", "DSS (AHP Model)", "SQA (Software Testing)", "AI Integration"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <span className="subheading">CHUYÊN MÔN</span>
        <h2 className="section-title">Kỹ Năng <span className="highlight">Công Nghệ</span></h2>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} className="skill-category" variants={itemVariants}>
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex}>
                    <span className="dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="card-accent"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
