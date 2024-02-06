import React from "react";
import FeaturedImage from "./images/featured-vintage-drip.png"

const FeaturedProjects = () => {
    return ( 
        <div className="featured-projects">
            <h1>Featured Project</h1>
            <div className="featured-project-container">
                <div className="featured-project-image">
                <a href="https://vintagedrip.store" target="_blank" rel="noopener noreferrer">
                        <img src={FeaturedImage} alt="Screenshots of VintageDrip.store on laptop and mobile" />
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
        </div>
     );
}
 
export default FeaturedProjects;