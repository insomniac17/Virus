import React, { useState } from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import Musik from "../Asset/musik.png";
import Home from "../Asset/Home.png";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Pengertian from "./Pengertian";
import Ciri from "./Ciri";
import Struktur from "./Struktur";
import Jenis from "./Jenis";
import Dp from "./Dp";
import Dn from "./Dn";

const Materi =()=> {

    const [openPengertian, setOpenPengertian] = useState (false)
    const [openCiri, setOpenCiri] = useState (false)
    const [OpenStruktur, setOpenStruktur] = useState (false)
    const [OpenJenis, setOpenJenis] = useState (false)
    const [OpenDp, setOpenDp] = useState (false)
    const [OpenDn, setOpenDn] = useState (false)

    return(
        <div className="MenuContainer">
            <h1>MATERI</h1>
            <div className="ContainerMateri" >
                <button onClick={()=> setOpenPengertian (true)} >Definisi Virus</button>
                <button onClick={()=> setOpenCiri (true)} >Ciri-Ciri Virus</button>
                <button onClick={()=> setOpenStruktur (true)} >Struktur Tubuh Virus</button>
                <button onClick={()=> setOpenJenis (true)} >Jenis-Jenis Virus</button>
                <button onClick={()=> setOpenDp (true)} >Dampak Positif Virus</button>
                <button onClick={()=> setOpenDn (true)} >Dampak Negatif Virus</button>
            </div>
            <div className="Arrow" >
                <Link to="/Menu">
                <img src={arrowL}  />
                </Link>
                <Link to="/">
                <img src={Home} />
                </Link>
                <Link to="/Video">
                <img src={arrowR}  />
                </Link>
            </div>

            <Pengertian open={openPengertian} onClose={()=>setOpenPengertian(false)} />
            <Ciri open={openCiri} onClose={()=>setOpenCiri(false)} />
            <Struktur open={OpenStruktur} onClose={()=>setOpenStruktur(false)} />
            <Jenis open={OpenJenis} onClose={()=>setOpenJenis(false)} />
            <Dp open={OpenDp} onClose={()=>setOpenDp(false)} />
            <Dn open={OpenDn} onClose={()=>setOpenDn(false)} />
        </div>

    )
}

export default Materi;