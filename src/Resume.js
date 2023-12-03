// Resume.js

import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <iframe
        title="Resume"
        width="100%"
        height="600px"
        src="https://docs.google.com/document/d/e/2PACX-1vRI5IcSXY0OZqQIfMw7y-xU4f1uzqkny94A7AijUAgXz9qd3efbLDS-1ZmT_T5GahLND5xhQ54hMuyB/pub?embedded=true"
      ></iframe>
      <a
        href="https://docs.google.com/document/d/1nlYF-_zyzL2Oy8IUf7QsHsGjK_v6I4nHaYWA_H0jGj8/edit?usp=sharing"
        download="Chris Valada Dev Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
