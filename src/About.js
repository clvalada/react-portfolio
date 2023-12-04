import React from 'react';
import profilePic from "./145150623.jpeg";

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
        <br></br>
      <div className="about">
        <div className="left-content">
          <img src={ profilePic} />
        </div>
        <div className="right-content">
          <p>
            Full Stack Developer with 17 years experience in Education
            Technology sales, customer success, operations, and leadership
           </p>  
           <p>
           I enjoy working with small, passionate teams where I can make a big impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
