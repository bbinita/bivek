import React from "react";
import { Award } from "lucide-react";

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
        "Parametric & non-parametric approaches for data preprocessing, visualization, and analysis",
        "Statistical Modeling: Non-linear models, GLM/GLMM, GAM, multivariate analysis",
        "Machine Learning & Data Mining: Random Forest, feature selection, classification & regression modeling",
        "Multivariate & Dimension Reduction: PCA, sPLS-DA, discriminant analysis",
        "Programming Languages: R, SAS, Python",
      ],
      className: "skill-card-purple",
    },
    {
      title: "Experimental Skills",
      skills: [
        "Design and execution of outdoor and indoor experiments",
        "Insect Biology: Maintenance of insect colonies, insect stress and damage assessments",
        "Plant & Soil Analysis: Spectral reflectance measurements, vegetation indices, nutrient and stress diagnostics in lab",
      ],
      className: "skill-card-orange",
    },
    {
      title: "Training",
      skills: [
        "Environmental Risk Assessment",
        "Science Communication Training",
        "Human Subjects Safety Training",
        "Online GIS & Open-Source Remote Sensing Workshop- Ohio View, 2024",
        "Remote Sensing Methods Workshop- UV-VIS-NIR Spectroradiometry",
        "MAPTHON: OpenStreetMap Training- ICIMOD, 2017",
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
      subtitle: "Team-TERRA Fellowship • 2023-2024 • $38,500",
      description:
        "Interdisciplinary research training with focus on environmental risk assessment and stakeholder engagement.",
      color: "#f59e0b",
    },
    {
      title: "Clifford R. Burr Memorial Scholarship",
      subtitle: "University of Connecticut • Multiple Years • $45,000",
      description:
        "Academic excellence scholarship for outstanding graduate students.",
      color: "#3b82f6",
    },
    {
      title: "Conference Travel Awards",
      subtitle: "Multiple Conferences • $7,000 Total",
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
    <div className="section-container">
      <h2 className="section-title">Skills & Awards</h2>

      {/* Skills Grid */}
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

      {/* Awards Grid */}
      <div className="awards-grid">
        {awards.map((award, index) => (
          <div key={index} className="award-card">
            <div className="award-header">
              <Award size={24} color={award.color} />
              <div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-subtitle">{award.subtitle}</p>
                <p className="award-description">{award.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsAndAwards;
