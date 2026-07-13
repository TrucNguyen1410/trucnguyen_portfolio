import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useSite } from '../context/SiteContext';
import './Contact.css';

const Contact = () => {
  const { t } = useSite();
  const contactInfo = [
    { icon: <Mail />, label: t.contact.labelEmail, value: "truc141004@gmail.com", link: "mailto:truc141004@gmail.com" },
    { icon: <Phone />, label: t.contact.labelPhone, value: "0338493544", link: "tel:0338493544" },
    { icon: <FaLinkedin />, label: t.contact.labelLinkedIn, value: "Anh Trúc Nguyễn Lê", link: "https://www.linkedin.com/in/tr%C3%BAc-nguy%E1%BB%85n-l%C3%AA-anh-912ab9285/" },
    { icon: <FaGithub />, label: t.contact.labelGitHub, value: "TrucNguyen1410", link: "https://github.com/TrucNguyen1410" },
    { icon: <FaFacebook />, label: t.contact.labelFacebook, value: "Trúc Nguyễn", link: "https://www.facebook.com/trucnguyenneee1410" },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <span className="subheading">{t.contact.subheading}</span>
        <h2 className="section-title">{t.contact.titleLine} <span className="highlight">{t.contact.titleHighlight}</span></h2>

        <div className="contact-grid-single">
          <motion.div 
            className="contact-info-cards-horizontal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} className="contact-card" target="_blank" rel="noreferrer">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <span className="c-label">{info.label}</span>
                  <span className="c-value">{info.value}</span>
                </div>
                <div className="status-dot"></div>
                <div className="card-shine"></div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <footer className="footer">
        <p>{t.contact.footer}</p>
      </footer>
    </section>
  );
};

export default Contact;
