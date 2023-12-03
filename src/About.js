import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <div className="about">
        <div className="left-content">
          <img src='./public/images/avatar.jpg' alt="avatar" />
        </div>
        <div className="right-content">
          <p>
            Full Stack Developer with 17 years experience in Education
            Technology sales, customer success, operations, and leadership. I
            enjoy working with small, passionate teams where I can make a big
            impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
