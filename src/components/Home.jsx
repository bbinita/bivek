import React from "react";

const Home = () => {
  const educationData = [
    {
      title: "Ph.D. Candidate, Plant Science",
      institution: "University of Connecticut, CT, USA",
      date: "2019 - 2025",
      details:
        "Concentration: Remote sensing of biotic and abiotic stress in vegetation",
      color: "blue",
    },
    {
      title: "B.Sc. Agriculture",
      institution:
        "Lamjung Campus, Institute of Agriculture and Animal Science",
      date: "Tribhuvan University, Nepal • December 2017",
      details: [
        "Comprehensive agricultural education with focus on crop science and sustainable farming practices",
        "Thesis: Comparison of Interpolation techniques for mapping soil fertility parameters",
      ],
      color: "green",
    },
  ];

  return (
    <div className="home-container">
      {/* About Section */}
      <div className="section-container">
        <div className="hero-container">
          <h1 className="main-title">Bivek Bhusal</h1>
          <p className="subtitle">
            Ph.D. in Plant Science (Applied Remote Sensing Specialist and GIS)
          </p>
          <p className="description">
            I am a researcher specializing in remote sensing, precision
            agriculture, and plant stress detection, with a strong background in
            multispectral and hyperspectral imaging, GIS, and statistical
            modeling. My academic journey has spanned from agricultural sciences
            to advanced geospatial analytics, where I have developed expertise
            in integrating UAV-based sensing, image processing, and data science
            to address agricultural and environmental challenges. Through my
            Ph.D. research, I have led multi-year experiments to detect biotic
            and abiotic stress in crops, applying advanced statistical models
            and machine learning techniques to spectral data. My work bridges
            plant science, remote sensing, and digital agriculture, with
            applications extending to natural resource management, pest
            monitoring, and sustainable crop production. I am well equipped with
            skills in spectral image processing, spatial analysis, UAV
            operation, and statistical programming, enabling me to translate
            complex datasets into actionable insights. My portfolio highlights
            this interdisciplinary expertise, showcasing selected projects,
            publications, and technical outputs that reflect my commitment to
            sustainable agriculture and innovative geospatial solutions.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="section-container">
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
