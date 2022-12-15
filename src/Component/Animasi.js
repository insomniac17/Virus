import React from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import Home from "../Asset/Home.png";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";


const Animasi =()=> {
    return(
        <div className="VideoContainer">
            <h1>Animasi</h1>
            <div className="ContainerList" >
                <iframe width="350" height="320" src="https://www.youtube.com/embed/8glI_X1XoBE" frameBorder="0" allowFullScreen>
                    
                </iframe>
            </div>
            <div className="Arrow" >
                <Link to="/Video">
                <img src={arrowL}  />
                </Link>
                <Link to="/">
                <img src={Home} />
                </Link>
                <Link to="/Quizz">
                <img src={arrowR}  />
                </Link>
            </div>
        </div>
    )
}

export default Animasi