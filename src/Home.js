import React from 'react';
import avatar from "./avatar.jpg";

const Home = () => {
    return (  
        <div className="home">
            <img src={avatar} style={{ marginTop: '0' }} />
        </div>
    );
}
 
export default Home;