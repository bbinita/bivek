import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="section-container">
      <div className="hero-container">
        {/* <div className="profile-circle">BB</div> */}
        <h1 className="main-title">Bivek Bhusal</h1>
        <p className="subtitle">Ph.D. in Plant Science - Remote Sensing Specialist</p>
        <p className="description">
          I'm a PhD in Plant Science at the University of Connecticut, specializing in remote sensing of crop stress. My research focuses on integrating drone-based technologies to detect and quantify stress factors affecting crop health, specifically studying Potato leafhopper infestation and nitrogen deficiency in beans using multispectral and hyperspectral imaging.
        </p>
        <h2 className="contact-section">CONTACT US</h2>

      <div className="icons">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/bivekbhusal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} />
        </a>
{/* 
        {/* GitHub */}
        {/* <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} />
        </a>  */}

        {/* Email */}
        <a href="mailto: bivek.bhusal.iaas@gmail.com">
          <FaEnvelope size={40} />
        </a>
      </div>
        </div>
      
      </div>
    // </div>

      

  );
};

export default About;