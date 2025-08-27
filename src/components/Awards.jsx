import React from 'react';
import { Award } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "NSF Research Traineeship Program",
      subtitle: "Team-TERRA Fellowship • 2023-2024 • $38,500",
      description: "Interdisciplinary research training with focus on environmental risk assessment and stakeholder engagement.",
      color: "#f59e0b"
    },
    {
      title: "Clifford R. Burr Memorial Scholarship",
      subtitle: "University of Connecticut • Multiple Years • $45,000",
      description: "Academic excellence scholarship for outstanding graduate students.",
      color: "#3b82f6"
    },
    {
      title: "Conference Travel Awards",
      subtitle: "Multiple Conferences • $7,000 Total",
      description: "Travel funding for research presentations at national and international conferences.",
      color: "#10b981"
    },
    {
      title: "Graduate Assistantship",
      subtitle: "University of Connecticut • Full PhD Duration",
      description: "Research and teaching assistantship with full tuition waiver throughout PhD studies.",
      color: "#8b5cf6"
    }
  ];

  return (
    <div className="section-container">
      <h2 className="section-title">Awards & Fellowships</h2>
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

export default Awards;