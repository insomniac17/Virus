import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarPeng.PNG";

const Pengertian =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Definisi Virus</h1>
                <p>Kata “virus” ini berasal dari bahasa Latin, yaitu virion yang artinya adalah racun. Virus itu sendiri selalu mengalami perkembangan dari waktu ke waktu, sehingga bisa dibilang sulit sekali mati atau hilang. Bahkan, tak menutup kemungkinan akan muncul virus-virus baru yang terkadang bisa saja membuat manusia atau makhluk hidup lainnya sakit.</p>
                <p>Virus termasuk bagian dari mikroorganisme. Dinamakan bagian dari mikroorganisme karena merupakan makhluk hidup dengan ukuran hanya beberapa mikro atau mungkin lebih kecil dari itu, karena 1 mikron sama dengan 0,001 mm. Berdasarkan pengertian virus di atas, maka dapat dikatakan bahwa virus adalah organisme parasit, yang mana ia membutuhkan inang untuk bertahan hidup. mikroorganisme ini harus menemukan inang untuk bereproduksi, termasuk melalui sel tubuh manusia. Tanpa menumpang ke tubuh inangnya, ia tidak bisa mereplikasi diri. Beberapa spesies organisme ini bahkan dapat membunuh sel inangnya untuk dapat berkembang biak. Jika ia tidak menemukan inang, virus tidak bisa hidup dalam waktu yang lama.</p>

            </div>
        </div>
    )
}

export default Pengertian