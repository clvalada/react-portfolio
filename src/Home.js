import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Footer from './Footer';

const Home = () => {
    return (  
        <div className="home">
            <div>
                <About />
            </div>
            <div>
                <Portfolio />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
 
export default Home;