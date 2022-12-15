import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarPeng.PNG";

const Dp =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Dampak Positif Virus</h1>
                <ul>
                    <li>Bidang Kesehatan</li>
                    <p>Virus berperan dalam pembuatan beberapa vaksin. Seperti vaksin polio, campak, cacar, kanker, dan lain-lain. Kandungan yang terdapat di dalam manfaat vaksin adalah virus yang sudah mati ataupun dilemahkan dan mengakibatkan demam bagi orang yang disuntik vaksin. Kemudian, sistem imun akan merekamnya dan membentuk anti bodi dalam tubuh. Sehingga jika penyakit-penyakit tersebut datang menyerang maka sistem imun tubuh mencegahnya masuk.</p>
                    <li>Bidang Pertanian</li>
                    <p>Manfaat Virus di bidang pertanian dapat dilihat dari penggunaan organisme biologis dalam mengendalikan kerusakan oleh hama atau yang biasa disebut dengan pengendalian biologis. Kegiatan ini sudah banyak digunakan pada sistem-sistem pertanian, salah satunya yaitu pengendalian hama serangga melalui Baculoviruses, atau sekelompok virus yang dapat menginfeksi serangga dan artropoda lainnya. Baculoviruse ditanamkan pada gen tanaman pertanian. Kemudian larva serangga memakan tumbuhan tersebut. Virus kemudian menginfeksi sel dan tumbuh di dalam tubuh larva tersebut dan lama kelaman merusak jaringan tubuh tubuhnya.</p>
                    <li>Bidang Science</li>
                    <p>Pengembangan ilmu virus telah digunakan secara luas pada studi molekuler dan seluler yang dapat digunakan untuk memanipulasi dan mengetahui fungsi-fungsi dari sel. Selain itu, Virus juga dapat digunakan sebagai penelitian genetik, seperti replikasi DNA, transkipsi, formasi RNA, formasi protein, DNA dasar dari ketahanan tubuh.</p>
                    </ul>

            </div>
        </div>
    )
}

export default Dp