//Home.js

import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Hero from './Hero';
import FeaturedProjects from './FeaturedProjects';
import Calendly from './Calendly';

const Home = () => {
    return (  
        <div className="home">
            <div>
                <Hero />
            </div>
            <div>
                <Calendly />
            </div>
            <div>
                <FeaturedProjects />
            </div>
            <div>
                <Portfolio />
            </div>
            <div>
                <About />
            </div>
        </div>
    );
}
 
export default Home;