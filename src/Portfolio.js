// Portfolio.js

import React from 'react';
import projectData from './ProjectData';
import PropTypes from 'prop-types';




function ProjectCard({ image, description, githubLink, deployedLink }) {
  console.log('Image Path:, image');
  return (
    <>
    <div className="custom-card">
      <img src={image} alt="Project" />
      <div>
        <h4>{description}</h4>
        <hr></hr>
        <div className="container">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo 
            </a>
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            Deployed Project
          </a>
        </div>
      </div>
    </div>
    </>
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
      <h1>Portfolio</h1>
      <br></br>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
