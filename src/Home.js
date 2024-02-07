//Home.js

import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Hero from './Hero';
import FeaturedProjects from './FeaturedProjects';
import Calendly from './Calendly';
//import Footer from './Footer';

const Home = () => {
    return (  
        <div>
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
        </div>
    );
}
 
export default Home;