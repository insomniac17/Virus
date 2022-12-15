import React from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import Musik from "../Asset/musik.png";
import Home from "../Asset/Home.png";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Virus from "../Asset/Virus.json";
import Lottie from "lottie-react";

const Menu =()=> {
    return(
        <div className="MenuContainer">
            <Lottie className="virusR" animationData={Virus} />
            <Lottie className="virusL" animationData={Virus} />
            <h1>Menu</h1>
            <div className="ContainerList" >
                <Link to="/Materi">
                    <button>Materi</button>
                </Link>
                <Link to="/Video">
                    <button>Video</button>
                </Link>
                <Link to="/Quizz">
                    <button>Quiz</button>
                </Link>
            </div>
        </div>

    )
}

export default Menu