import React from 'react';

const Education = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        <div className="education-item">
          <div className="education-border blue"></div>
          <div className="education-content">
            <h3 className="education-title">Ph.D. Candidate, Plant Science</h3>
            <p className="education-institution blue">University of Connecticut, Storrs, CT</p>
            <p className="education-date">Expected completion: May 2025</p>
            <p className="education-details">
              <strong>Dissertation:</strong> Remote sensing of Potato leafhopper infestation and nitrogen deficiency in beans
            </p>
            <p className="education-details">
              <strong>Focus:</strong> Remote sensing of crop stress using drone-based multispectral imaging
            </p>
          </div>
        </div>
        
        <div className="education-item">
          <div className="education-border green"></div>
          <div className="education-content">
            <h3 className="education-title">B.Sc. Agriculture</h3>
            <p className="education-institution green">Lamjung Campus, Institute of Agriculture and Animal Science</p>
            <p className="education-date">Tribhuvan University, Nepal • December 2017</p>
            <p className="education-details">Comprehensive agricultural education with focus on crop science and sustainable farming practices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;