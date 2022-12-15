import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarPeng.PNG";

const Ciri =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Ciri - Ciri Virus</h1>
                <p>Apa saja ciri- ciri yang dimiliki oleh virus? 
                Berikut beberapa diantaranya:</p>
                <ul>
                    <li>Hanya memiliki satu jenis asam nukleat yang diselubungi oleh kapsid atau selubung protein. Asam nukleat ini yaitu DNA atau RNA</li>
                    <li>Ukurannya sangat kecil yaitu antara 25 – 300 nm. Untuk 1 nm sama dengan 10-9 m</li>
                    <li>Tubuh virus tidak berbentuk sel. Sehingga virustidak memiliki inti sel, membran plasma, dan sitoplasma</li>
                    <li>Hanya dapat hidup dan berkembang biak pada sel hidup atau dikenal juga sebagai parasit intraseluler obligat</li>
                    <li>Merupakan suatu makhluk metaorganisme. Makhluk metaorganisme merupakan suatu bentuk peralihan antara benda mati atau memiliki sifat yang dapat dikristalkan dan makhluk hidup atau dapat berkembang biak</li>
                    <li>Memiliki beberapa bentuk tubuh. Bentuk tubuh virus yaitu bulat, batang, bentuk T, dan silindris.</li>
                </ul>

            </div>
        </div>
    )
}

export default Ciri