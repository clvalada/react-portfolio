/* App.js*/
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
/*import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';*/
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Navbar  />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
