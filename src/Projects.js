const Project = ({ image, projectName, description, githubLink, deployedLink }) => {
    return ( 
        <div className="project">
                <img src {image} alt= {projectName} />
                <p> {description}</p>
                <div className="links">
                    <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Project</a>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
        </div>
     );
}
 
export default Project;