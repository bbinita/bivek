import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const educationData = [
    {
      title: "Ph.D., Plant Science",
      institution: "University of Connecticut, CT, USA",
      date: "2019 - 2025",
      details:
        "Concentration: Remote sensing of biotic and abiotic stress in vegetation",
      color: "blue",
    },
    {
      title: "B.Sc. Agriculture",
      institution:
        "Tribhuvan University, Institute of Agriculture and Animal Science, Nepal",
      date: "2017",
      details: [
        "Thesis: Comparison of Interpolation techniques for mapping soil fertility parameters",
      ],
      color: "green",
    },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src="/bivek/bivek.jpg" alt="Profile" className="profile-picture" />
        <div className="hero-text">
          <h1 className="main-title">Bivek Bhusal</h1>
          <p className="subtitle">
            Ph.D. in Plant Science (Applied Remote Sensing and GIS)
          </p>
        </div>
      </div>

      {/* <div className="contact-section">
        <h3>Contact Me</h3>
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bivek.bhusal.iaas@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a> */}
      {/* </div> */}
      {/* </div> */}

      {/* About Section */}
      <div className="about-section">
        <h2 className="section-title">About Me</h2>
        <p className="description">
          I am passionate about remote sensing, GIS, and plant science research.
          My work focuses on detecting biotic and abiotic stress in vegetation
          using advanced technologies.
        </p>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2 className="section-title">Education</h2>
        <div className="education-container">
          {educationData.map((edu, i) => (
            <div key={i} className="education-item">
              <h3>{edu.title}</h3>
              <p style={{ color: edu.color }}>{edu.institution}</p>
              <p>{edu.date}</p>
              {Array.isArray(edu.details) ? (
                edu.details.map((d, idx) => <p key={idx}>{d}</p>)
              ) : (
                <p>{edu.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
