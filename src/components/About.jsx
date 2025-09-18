import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="section-container">
      <div className="hero-container">
        {/* <div className="profile-circle">BB</div> */}
        <h1 className="main-title">Bivek Bhusal</h1>
        <p className="subtitle">
          Ph.D. in Plant Science - Remote Sensing Specialist
        </p>
        <p className="description">
          I am a researcher specializing in remote sensing, precision
          agriculture, and plant stress detection, with a strong background in
          multispectral and hyperspectral imaging, GIS, and statistical
          modeling. My academic journey has spanned from agricultural sciences
          to advanced geospatial analytics, where I have developed expertise in
          integrating UAV-based sensing, image processing, and data science to
          address agricultural and environmental challenges. Through my Ph.D.
          research, I have led multi-year experiments to detect biotic and
          abiotic stress in crops, applying advanced statistical models and
          machine learning techniques to spectral data. My work bridges plant
          science, remote sensing, and digital agriculture, with applications
          extending to natural resource management, pest monitoring, and
          sustainable crop production. Beyond research, I bring strong skills in
          programming (R, Python, SAS), GIS (ArcGIS Pro, QGIS, ENVI), UAV
          operation (FAA Part 107 certified), and data visualization, enabling
          me to translate complex datasets into actionable insights. My
          portfolio highlights this interdisciplinary expertise, showcasing
          selected projects, publications, and technical outputs that reflect my
          commitment to sustainable agriculture and innovative geospatial
          solutions.
        </p>
      </div>
    </div>
    // </div>
  );
};

export default About;
