import React from 'react';
import About from "./About";
import Portfolio from './Portfolio';

const Home = () => {
    return (  
        <div className="home">
            <div>
                <About />
            </div>
            <div>
                <Portfolio />
            </div>
        </div>
    );
}
 
export default Home;