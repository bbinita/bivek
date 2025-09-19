import React from "react";

const SkillsAndAwards = () => {
  const skillCategories = [
    {
      title: "Spectral and Spatial Analysis",
      skills: [
        "ArcGIS Pro & ArcGIS Online",
        "Image processing (ENVI, Agisoft Metashape Pro, Pix4D)",
        "Scripting for automated spectral image analysis",
        "Geospatial interpolation techniques",
      ],
      className: "skill-card-green",
    },
    {
      title: "Hardware Platforms",
      skills: [
        "UAVs (DJI Inspire 2, Matric 300 RTK, Mavic)",
        "Drone-based multispectral imaging",
        "Hyperspectral data analysis",
        "Hyperspectral devices (Ci-710s SpectraVue leafspectrometer)",
        "GPS (Leica Viva GS14 GNSS)",
        "FAA Part 107 UAS Certificate",
      ],
      className: "skill-card-blue",
    },
    {
      title: "Programming & Data Analysis",
      skills: [
        "Parametric & non-parametric approaches for preprocessing, visualization, and analysis",
        "Statistical Modeling: Non-linear models, GLM/GLMM, GAM, multivariate analysis",
        "Machine Learning: Random Forest, feature selection, classification & regression modeling",
        "Dimension Reduction: PCA, sPLS-DA, discriminant analysis",
        "Programming: R, SAS, Python",
      ],
      className: "skill-card-purple",
    },
    {
      title: "Experimental Skills",
      skills: [
        "Design and execution of outdoor and indoor experiments",
        "Insect Biology: Colony maintenance, stress & damage assessments",
        "Plant & Soil Analysis: Spectral reflectance, vegetation indices, nutrient/stress diagnostics",
      ],
      className: "skill-card-orange",
    },
    {
      title: "Training",
      skills: [
        "Environmental Risk Assessment",
        "Science Communication Training",
        "Human Subjects Safety Training",
        "Online GIS & Open-Source Remote Sensing Workshop (Ohio View, 2024)",
        "Remote Sensing Methods Workshop (UV-VIS-NIR Spectroradiometry)",
        "MAPTHON: OpenStreetMap Training (ICIMOD, 2017)",
      ],
      className: "skill-card-pink",
    },
    {
      title: "Certifications",
      skills: ["FAA Part 107 UAS Certificate"],
      className: "skill-card-teal",
    },
  ];

  const awards = [
    {
      title: "NSF Research Traineeship Program",
      subtitle: "Team-TERRA Fellowship • 2023-2024",
      description:
        "Interdisciplinary research training with focus on environmental risk assessment and stakeholder engagement.",
      color: "#f59e0b",
    },
    {
      title: "Clifford R. Burr Memorial Scholarship",
      subtitle: "University of Connecticut • Multiple Years",
      description:
        "Academic excellence scholarship for outstanding graduate students.",
      color: "#3b82f6",
    },
    {
      title: "Conference Travel Awards",
      subtitle: "Multiple Conferences",
      description:
        "Travel funding for research presentations at national and international conferences.",
      color: "#10b981",
    },
    {
      title: "Graduate Assistantship",
      subtitle: "University of Connecticut • Full PhD Duration",
      description:
        "Research and teaching assistantship with full tuition waiver throughout PhD studies.",
      color: "#8b5cf6",
    },
  ];

  return (
    <>
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skill-card">
              <h3 className="skill-title">{cat.title}</h3>
              <ul className="skill-list">
                {cat.skills.map((s, j) => (
                  <li key={j}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="awards-container">
        <h2 className="section-title">Awards</h2>
        {awards.map((a, i) => (
          <div key={i} className="award-item">
            <h3 className="award-title">{a.title}</h3>
            <p className="award-subtitle">{a.subtitle}</p>
            <p className="award-description">{a.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsAndAwards;
