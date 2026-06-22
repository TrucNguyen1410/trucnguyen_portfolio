import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, BrainCircuit, Globe, Cloud, Cpu, Zap, BookOpen } from 'lucide-react';
import { SiGooglecloud, SiAnthropic, SiGoogle } from 'react-icons/si';
import { useSite } from '../context/SiteContext';
import './Certificates.css';

const certificateData = [
  {
    category: "Artificial Intelligence",
    items: [
      {
        title: "Google AI Essentials",
        issuer: "Google",
        icon: <SiGoogle size={24} />,
        link: "https://www.credly.com/badges/e9a7f478-4062-4be3-9521-fe3fb3447f8a/public_url"
      },
      {
        title: "AI Fluency: Framework & Foundations",
        issuer: "Anthropic",
        icon: <SiAnthropic size={24} />,
        link: "https://verify.skilljar.com/c/rh435yfapgv2"
      },
      {
        title: "ChatGPT Prompt Engineering for Developers",
        issuer: "DeepLearning.AI",
        icon: <BrainCircuit size={24} />,
        link: "https://learn.deeplearning.ai/accomplishments/36707629-9dc4-47d5-a7ee-685c293766b5?usp=sharing"
      },
      {
        title: "Prompt Design in Vertex AI",
        issuer: "Google Cloud",
        icon: <SiGooglecloud size={24} />,
        link: "https://www.credly.com/badges/06502b7f-61f3-4bf0-902a-ec18a1a36240/public_url"
      },
      {
        title: "How Transformer LLMs Work",
        issuer: "DeepLearning.AI",
        icon: <Zap size={24} />,
        link: "https://learn.deeplearning.ai/accomplishments/98b1df02-4e25-492f-8f2c-514b43d4f686?usp=sharing"
      },
      {
        title: "Finetuning Large Language Models",
        issuer: "DeepLearning.AI",
        icon: <Cpu size={24} />,
        link: "https://learn.deeplearning.ai/accomplishments/0d9b3bd5-91c3-4d7d-a246-daa6cd6ccf64?usp=sharing"
      },
      {
        title: "Building with the Claude API",
        issuer: "Anthropic",
        icon: <SiAnthropic size={24} />,
        link: "https://verify.skilljar.com/c/guzzbvbsakxq"
      }
    ]
  },
  {
    category: "Languages & Others",
    items: [
      {
        title: "TOEIC Listening & Reading (660)",
        issuer: "IIG Việt Nam / ETS",
        icon: <Globe size={24} />,
        link: "https://drive.google.com/file/d/1KYrXqg7AZGRVa8aQpc_P4kBNvGfZYDPy/view?usp=sharing"
      }
    ]
  }
];

const Certificates = () => {
  const { t } = useSite();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="certificates" className="certificates-section section">
      <div className="container">
        <motion.span 
          className="subheading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t.certificates.subheading}
        </motion.span>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {t.certificates.titleLine} <span className="highlight">{t.certificates.titleHighlight}</span>
        </motion.h2>

        {certificateData.map((group, gIndex) => (
          <div key={gIndex} className="cert-group">
            <motion.h3 
              className="group-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {t.certificates.groups[group.category] || group.category}
            </motion.h3>
            
            <motion.div 
              className="cert-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {group.items.map((cert, index) => (
                <motion.div key={index} className="cert-card" variants={itemVariants}>
                  <div className="cert-header">
                    <div className="cert-icon-wrapper">
                      {cert.icon}
                    </div>
                    <div className="cert-issuer">{cert.issuer}</div>
                  </div>
                  
                  <h4 className="cert-name">{cert.title}</h4>
                  
                  <div className="cert-footer">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="verify-btn"
                    >
                      <span>{t.certificates.verify}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <div className="status-dot"></div>
                  <div className="card-shine"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
