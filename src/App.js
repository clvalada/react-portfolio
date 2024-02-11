// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Navbar from './Navbar';
import FeaturedProjects from './FeaturedProjects';
//import Resume from './Resume';
//import Contact from './Contact';

const App = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FeaturedProjects" element={<FeaturedProjects />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/About" element={<About />} />
          {/*<Route path="/Resume" element={<Resume />} />*/}
          {/*<Route path="/Contact" element={<Contact />} />*/}
          
        </Routes>
      </div>
    </>
  );
}

export default App;