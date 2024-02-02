//Home.js

import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Hero from './Hero';

const Home = () => {
    return (  
        <div className="home">
            <div>
                <Hero />
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