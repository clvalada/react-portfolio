// Portfolio.js

import React from 'react';
import projectData from './ProjectData';

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
