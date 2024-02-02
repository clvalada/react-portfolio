import React from 'react';
import profilePic from "./images/145150623.jpeg";

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
        </div>
      </div>
    </div>
  );
};

export default About;
