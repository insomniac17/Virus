import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarVirus.svg";

const Struktur =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Struktur Tubuh Virus</h1>
                <img src={Gambar1} />
                <p>Pada umumnya struktur tubuh yang dimiliki oleh virus terdiri dari asam nukleat dan kapsid. Selain itu, mikroorganisme ini juga memiliki struktur tambahan, seperti asam nukleat ini terdiri dari DNA atau deoxyribo nucleid acid atau RNA atau ribonucleid acid. Secara umum, struktur tubuh virus terdiri atas 4 bagian utama, yaitu kepala, isi tubuh, ekor, dan kapsid.</p>
                <ul>
                    <li>Kepala</li>
                    <p>Struktur Virus Kepala Virus memiliki kepala berisi DNA atau RNA yang menjadi bahan genetik kehidupannya. Isi kepala ini dilindungi oleh kapsid, yaitu selubung protein yang tersusun oleh protein. Bentuk kapsid sangat bergantung pada jenis virusnya. Kapsid bisa berbentuk bulat, polihedral, heliks, atau bentuk lain yang lebih kompleks. Kapsid tersusun atas banyak kapsomer atau sub-unit protein.</p>
                    <li>Isi Tubuh</li>
                    <p>Isi Tubuh virus atau biasa disebut virion adalah bahan genetik yang berupa salah satu tipe asam nukleat (DNA atau RNA). Tipe asam nukleat yang dimiliki akan mempengaruhi bentuk tubuh virus. Isi tubuh biasanya berupa RNA yang berbentuk menyerupai kubus, bulat, atau polihedral, contohnya pada virus-virus penyebab penyakit polyomyelitis, influenza, dan radang mulut dan kuku.</p>
                    <li>Ekor</li>
                    <p>Ekor adalah bagian dalam struktur tubuh virus yang berfungsi sebagai alat untuk menempelkan diri pada sel inang. Ekor yang melekat di kepala ini umumnya terdiri atas beberapa tabung tersumbat yang berisi benang dan serat halus.</p>
                    <li>Kapsid</li>
                    <p>Kapsid adalah lapisan berupa rangkaian kapsomer pada tubuh virus yang berfungsi sebagai pembungkus DNA atau RNA. Fungsi kapsid ini adalah sebagai pembentuk tubuh dan pelindung bagi virus dari kondisi lingkungan luar.</p>
                </ul>
                <p>Struktur virus kapsid adalah struktur virus yang letaknya berada di luar virus dan memiliki kandungan subunit berupa protein yang cukup banyak. Kandungan tersebut lebih dikenal dengan sebutan kapsomer. Bentuk kapsid bisa dibilang cukup beragam, sehinga bisa memengaruhi bentuk virus itu sendiri.</p>

            </div>
        </div>
    )
}

export default Struktur