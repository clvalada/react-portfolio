import React from 'react';
import { Card, Button } from 'react-bootstrap';
import projectData from './ProjectData';

const ProjectCard = ({ image, description, githubLink, deployedLink }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt="Project" />
      <Card.Body>
        <Card.Title>{description}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </Button>
        <Button variant="success" href={deployedLink} target="_blank" rel="noopener noreferrer">
          Deployed Project
        </Button>
      </Card.Body>
    </Card>
  );
};

const Projects = ({ projects }) => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
