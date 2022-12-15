import React from "react";
import "../ComponentStyle/Info.css";
import { Link } from "react-router-dom";
import Musik from "../Asset/musik.png";
import Home from "../Asset/Home.png";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Virus from "../Asset/Virus.json";
import Lottie from "lottie-react";
import foto from "../Asset/foto.jpg";
import X from "../Asset/X.png"

const Info =()=> {
    return(
        <div className="fotoContainer">
            <div className="ContainerInfo">
                <div className="XContainer">
                <Link to="/">
                <img className="X" src={X} />
                
                </Link>

                </div>
                <div className="ContainerBio">
                     <h1>Profil</h1>
            
                    <div className="foto">
                        <img  src={foto}/>
                    </div>
                    <div className="bio">
                        <p>Nama : Azhar Rahadian Nashrulloh</p>
                        <p>Prodi : Teknologi Pendidikanh</p>
                        <p>NIM : 21105244004</p>
                        <p>E-mail: azharrahadian03@gmail.com</p>
                    </div>
                   <h1>Credit</h1>
                   <div className="ContainerBio">
                        <div className="bio">
                            <p>Materi: www.gramedia.com/literasi/virus/</p>
                            <p>Gambar: www.ruangguru.com</p>
                            <p>Video: www.youtu.be/TmMS-UM4QBA</p>
                            <p>Animasi: www.youtu.be/8glI_X1XoBE</p>
                            <p>Backsound: www.youtu.be/3sWg0mD8RLs</p>
                            <p>Background: www.freepik.com/free-photo/coronavirus-cells-floating-blurred-background_8722214.htm</p>
                        </div>
                    </div> 
                </div>
    
                
            </div>

        </div>

    )
}

export default Info