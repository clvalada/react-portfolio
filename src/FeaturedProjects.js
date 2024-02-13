import React from "react";
import FeaturedImage1 from "./images/featured-vintage-drip.png"
import FeaturedImage2 from "./images/featured_flantastic.png"
import Calendly from "./Calendly";

const FeaturedProjects = () => {
    return ( 
        <div className="featured-projects">
            <h1>Featured Projects</h1>
            <div className="featured-project-container">
                <div className="featured-project-image">
                <a href="https://vintagedrip.store" target="_blank" rel="noopener noreferrer">
                        <img src={FeaturedImage1} alt="Screenshots of VintageDrip.store on laptop and mobile" />
                </a>
                </div>
                <div className="featured-project-description">
                    <h2>VintageDrip.Store</h2>
                    <br></br>
                    <ul>
                        <h3> Vintage Drip is an online retailer of clothing & accessories from the 1980s & 90s. I developed this site frontend using HTML, CSS, and ReactJS, to ensure a seamless and visually engaging user experience.</h3>
                        <br></br>
                        <h3>The site boasts a responsive mobile design, prioritizing a fun and convenient user experience. Noteworthy features include a custom MailChimp integration for email capture and marketing newsletters. Shopify Buy-Button integration handles secure payment processing and inventory management  </h3>
                        <br></br>
                        <h3>Vintage Drip exemplifies my proficiency in front-end technologies and commitment to user-centric design with a blend of nostalgia and modern functionality.</h3>
                    </ul>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div className="featured-project-links">
                        <a href="https://github.com/clvalada/vintagedrip" target="_blank" rel="noopener noreferrer">GitHub Repo </a>
                        <a href="https://vintagedrip.store" target="_blank" rel="noopener noreferrer">Deployed Project</a>
                    </div>
                </div>
            </div>
            <div className="featured-project-container">
                <div className="featured-project-description">
                    <h2><i>Coming Soon</i></h2>
                    <h2>¡Flantastic Treats!</h2>
                    <br></br>
                    <ul>
                        <h3>¡Flantastic Treats! is an online storefront for a local baker of Cuban desserts. The site is a Single Page Application (SPA,) written in HTML/CSS and ReactJS. It is fully responsive on mobile devices to ensure convenient user experience.</h3>
                        <br></br>
                        <h3>¡Flantastic Treats! is another example of my proficiency in front-end technologies and commitment to user-centric design.</h3>
                    </ul>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div className="featured-project-links">
                        <a href="https://github.com/clvalada/flantastic" target="_blank" rel="noopener noreferrer">GitHub Repo </a>
                        <a href="https://flantastic.netlify.com" target="_blank" rel="noopener noreferrer">Deployed Project</a>
                    </div>
                </div>
                <div className="featured-project-image">
                <a href="https://flantastic.netlify.com" target="_blank" rel="noopener noreferrer">
                    <img src={FeaturedImage2} alt="Screenshots of Flantastic Treats on laptop and mobile" />
                </a>
                </div>
            </div>
            <Calendly />
        </div>
     );
}
 
export default FeaturedProjects;