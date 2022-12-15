import React from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import Home from "../Asset/Home.png";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";


const Video =()=> {
    return(
        <div className="VideoContainer">
            <h1>Video</h1>
            <div className="ContainerList" >
                <iframe width="350" height="320" src="https://www.youtube.com/embed/TmMS-UM4QBA" frameBorder="0" allowFullScreen>
                    
                </iframe>
            </div>
            <div className="Arrow" >
                <Link to="/Materi">
                <img src={arrowL}  />
                </Link>
                <Link to="/">
                <img src={Home} />
                </Link>
                <Link to="/Animasi">
                <img src={arrowR}  />
                </Link>
            </div>
        </div>
    )
}

export default Video