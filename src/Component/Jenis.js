import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarPeng.PNG";

const Jenis =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Jenis - Jenis Virus</h1>
                <ul>
                    <li>Virus DNA</li>
                    <p>Virus DNA adalah virus yang materi genetiknya berupa asam nukleat yang berbentuk rantai ganda berpilin. Di dalam sel inangnya, DNA pada virus akan mengalami replikasi menjadi beberapa DNA dan juga akan mengalami transkripsi menjadi mRNA. mRNA kemudian mengalami translasi untuk menghasilkan protein selubung virus. Masih di dalam sel inang, DNA dan protein virus mengkonstruksikan diri menjadi virus–virus baru. mRNA juga akan membentuk enzim penghancur (Lisozim) sehingga sel inang lisis (hancur) dan virus–virus keluar untuk menginfeksi sel inang lainnya. Contoh virus ini antara lain: Papiloma, Poliloma, Parvovirus B19, Adenovirus, Vaccinia</p>
                    <li>Virus RNA</li>
                    <p>Virus RNA adalah virus yang materi genetiknya berupa asam nukleat yang berbentuk rantai tunggal atau ganda tidak berpilin. Di dalam sel inangnya, RNA pada virus akan mengalami transkripsi balik menjadi Hibrid RNA-DNA dan akhirnya membentuk DNA. Selanjutnya DNA virus akan masuk ke inti sel inangnya, menyisip ke dalam DNA inangnya. DNA virus akan merusak DNA inangnya dan membentuk mRNA. mRNA akan mengalami translasi untuk menghasilkan protein selubung virus untuk menbentuk virus–virus baru. Contoh virus ini: HIV AIDS, Influenza, Virus Hepatitis E, Poliovirus, Paramyxovirus Paramyxovirus</p>
                </ul>

            </div>
        </div>
    )
}

export default Jenis