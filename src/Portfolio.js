// Portfolio.js

import React from 'react';
import projectData from './ProjectData';
import PropTypes from 'prop-types';


function ProjectCard({ image, description, githubLink, deployedLink }) {
  return (
    <div className="custom-card">
      {/* Your custom card styling goes here */}
      <img src={image} alt="Project" />
      <div className="card-content">
        <h3>{description}</h3>
        {/* Other card content */}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Project
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
};


function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
