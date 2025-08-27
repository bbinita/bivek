import React from 'react';
import { publications } from '../data/portfolioData';

const Publications = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Publications & Presentations</h2>
      <div className="publications-container">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item">
            <div className="publication-header">
              <span className={`publication-type ${pub.type === 'Oral Presentation' ? 'oral' : 'paper'}`}>
                {pub.type}
              </span>
              <span className="publication-date">{pub.date}</span>
            </div>
            <h3 className="publication-title">{pub.title}</h3>
            <p className="publication-venue">{pub.venue}</p>
            {pub.location && <p className="publication-location">{pub.location}</p>}
            {/* {pub.doi && (
              <p className="publication-doi">
                DOI: <a href={`https://doi.org/${pub.doi}`} className="link">{pub.doi}</a>
              </p>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;