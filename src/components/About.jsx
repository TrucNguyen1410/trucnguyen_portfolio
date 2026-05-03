import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
              <span className="years">HCMUNRE</span>
              <span className="text">Khóa 11</span>
            </div>
            <div className="about-img-wrapper">
              <img
                src="/assets/hcmunre.jpg"
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
            <span className="subheading">GIỚI THIỆU</span>
            <h2 className="section-title">
              Nghiên Cứu & <br />
              <span className="highlight">Phát Triển</span>
            </h2>
            <p className="about-text">
              Tôi là một Software Engineer trẻ đam mê sự kết hợp giữa Mobile, Web và AI Integration.
            </p>
            <p className="about-text">
              Dự án của tôi thường xoay quanh việc biến các thuật toán AI phức tạp thành những ứng dụng gần gũi thông qua giao diện Flutter hoặc hệ thống Web Full-stack. Từ những Chatbot thông minh đến các hệ thống quản lý chuyên sâu, tôi tin rằng công nghệ chỉ thực sự có giá trị khi nó mang lại trải nghiệm tiện lợi và thông minh cho người dùng.
            </p>

            <div className="info-list">
              <div className="info-item">
                <span className="label">Học vấn:</span>
                <span className="val">Kỹ thuật Phần mềm</span>
              </div>
              <div className="info-item">
                <span className="label">Đam mê:</span>
                <span className="val">Web, Mobile & AI</span>
              </div>
              <div className="info-item">
                <span className="label">Email:</span>
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
