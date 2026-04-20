import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    { icon: <Mail />, label: "Email", value: "truc141004@gmail.com", link: "mailto:truc141004@gmail.com" },
    { icon: <Phone />, label: "Số điện thoại", value: "0338493544", link: "tel:0338493544" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "Anh Trúc Nguyễn Lê", link: "https://www.linkedin.com/in/tr%C3%BAc-nguy%E1%BB%85n-l%C3%AA-anh-912ab9285/" },
    { icon: <FaGithub />, label: "GitHub", value: "TrucNguyen1410", link: "https://github.com/TrucNguyen1410" },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <span className="subheading">LIÊN HỆ</span>
        <h2 className="section-title">Kết Nối Với <span className="highlight">Tôi</span></h2>

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
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 Nguyễn Lê Anh Trúc. Built with Passion & React.</p>
      </footer>
    </section>
  );
};

export default Contact;
