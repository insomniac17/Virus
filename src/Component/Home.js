import React from "react";
import "../ComponentStyle/HomeStyle.css";
import Judul from "../Asset/Judul.png";
import Play from "../Asset/Play.png";
import { Link } from 'react-router-dom';
import sound from "../Asset/sound.png";
import soundMute from "../Asset/soundMute.png";
import info from "../Asset/info.png";
import judul from "../Asset/Judul.png";

const Home =({mute, unmute})=> {

    return(
    <div className="HomeContainer">
        <div className="Audio">
            <img onClick={unmute} src={sound} />
            <img onClick={mute} src={soundMute} />
            <Link to="/Info">
            <img src={info} />
            </Link>
        </div>
        <div className="TittleContainer">
            <img src={judul} />
            <Link to="/Menu">
             <button>START</button>
            </Link>
        </div>
    </div>   
    )
}

export default Home;