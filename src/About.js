import React from 'react';
import profilePic from "./images/145150623.jpeg";
import Calendly from './Calendly';

const About = () => {
  return (
    <div>
        <br></br>
      <div className="about">
        <div className="left-content">
          <img src={ profilePic} />
        </div>
        <div className="right-content">
          <h1>About Me</h1>
          <p>
            Full Stack Developer, life-long learner, and whiteboard enthusiast with extensive customer-facing experience in the Education Technology industry.
           </p>  
           <p>
           I enjoy working with small, passionate teams where I can make a big impact.
          </p>
          <p>
          HTML | CSS | Bootstrap | Tailwind | JavaScript | MySQL | Responsive Design | ReactJS | Handlebars.js | Node.js | Express | Heroku | MongoDB | e-Commerce
          </p>
            <br></br>
            <hr></hr>
            <br></br>
          <div className="social-links">
                        <a href="https://github.com/clvalada" target="_blank" rel="noopener noreferrer">GitHub </a>
                        <a href="https://www.linkedin.com/in/chrisvalada/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:clvalada@gmail.com">Email</a>
            </div>
        </div>
        
      </div>
      <Calendly />
    </div>
  );
};

export default About;
