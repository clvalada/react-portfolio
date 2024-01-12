import React from 'react';
import profilePic from "./145150623.jpeg";

const About = () => {
  return (
    <div>
      
        <br></br>
      <div className="about">
        <div className="left-content">
          <img src={ profilePic} />
        </div>
        <div className="right-content">
          <p>
            Full Stack Developer, life-long learner, and whiteboard enthusiast with extensive customer-facing experience. 
            Over 15 years in Education Technology SaaS sales, customer success, and leadership roles.
           </p>  
           <p>
           I enjoy working with small, passionate teams where I can make a big impact.
          </p>
          <p>
          HTML | CSS | Bootstrap | Tailwind | JavaScript | MySQL | Responsive Design | ReactJS | Handlebars.js | Node.js | Express | Heroku | MongoDB
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
