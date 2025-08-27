import React from 'react';
import { researchProjects } from '../data/portfolioData';

const Research = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Research Activities</h2>
      <div className="research-container">
        {researchProjects.map((project, index) => (
          <div key={index} className="research-card">
            <h3 className="research-title">{project.title}</h3>
            <p className="research-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;