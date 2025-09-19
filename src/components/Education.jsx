import React from "react";

const Education = () => {
  const educationData = [
    {
      title: "Ph.D. Candidate, Plant Science",
      institution: "University of Connecticut, CT, USA",
      date: "2019 - 2025",
      details:
        "Concentration: Remote sensing of biotic and abiotic stress in vegetation",
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
    },
  ];

  return (
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
  );
};

export default Education;
