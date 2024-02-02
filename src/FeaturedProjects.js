import React from "react";
import FeaturedImage from "./images/featured-vintage-drip.png"

const FeaturedProjects = () => {
    return ( 
        <div className="featured-projects">
            <h1>Featured Project</h1>
            <div className="featured-project-container">
                <div className="featured-project-image">
                    <image src={FeaturedImage} alt="Screenshots of VintageDrip.store on laptop and mobile" />
                </div>
                <div className="featured-project-description">
                    <ul>
                        <li> list of items </li>
                        <li> list of items </li>
                        <li> list of items </li>
                    </ul>
                </div>

            </div>
        </div>
     );
}
 
export default FeaturedProjects;