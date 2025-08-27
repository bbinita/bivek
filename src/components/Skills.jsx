import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Remote Sensing",
      skills: [
        "Drone-based multispectral imaging",
        "Hyperspectral data analysis",
        "Image processing (ENVI, Agisoft Metashape Pro, Pix4D)",
        "FAA Part 107 UAS Certificate"
      ],
      className: "skill-card-blue"
    },
    {
      title: "Spatial Analysis",
      skills: [
        "ArcGIS Pro & ArcGIS Online",
        "GPS (Leica Viva GS14 GNSS)",
        "Spatial modeling & analysis",
        "Geospatial interpolation techniques"
      ],
      className: "skill-card-green"
    },
    {
      title: "Programming & Analysis",
      skills: [
        "R, SAS, Python",
        "Statistical modeling",
        "Parametric & non-parametric approaches",
        "Data preprocessing & visualization"
      ],
      className: "skill-card-purple"
    },
    {
      title: "Laboratory Skills",
      skills: [
        "Insect colony rearing",
        "Greenhouse experimentation",
        "Spectroradiometer operation",
        "Plant & soil analysis"
      ],
      className: "skill-card-orange"
    },
    {
      title: "Languages",
      skills: [
        "English (Fluent)",
        "Nepali (Native)",
        "Hindi (Conversational)"
      ],
      className: "skill-card-teal"
    },
    {
      title: "Certifications",
      skills: [
        "FAA Part 107 UAS (Remote Pilot)",
        "Environmental Risk Assessment",
        "Science Communication Training",
        "Human Subjects Safety Training"
      ],
      className: "skill-card-pink"
    }
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className={`skill-card ${category.className}`}>
            <h3 className="skill-title">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;