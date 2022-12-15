import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarPeng.PNG";

const Dn =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Dampak Negatif Virus</h1>
                <ul> 
                    <li>Penyakit Pada Hewan</li>
                    <p>Virus Rabies atau virus Rhabdhovirus merupakan virus yang dapat menyerang sistem saraf pusat manusia dan otak. Akibatnya tubuh tidak akan mampu untuk bergerak dan menimbulkan hydrophobia. Virus ini ditularkan kepada manusia melalui gigitan hewan berdarah panas yang telah terjangkit virus rabies ini seperti gigitan anjing, kera, kelelawar hingga rakun. Oleh karena itu, ada baiknya untuk selalu berhati hati dengan hewan liar dan melakukan vaksinasi untuk hewan peliharaan di rumah. Selain itu ada juga Virus Avian influenza tipe A (H5N1) yang sempat terkenal di Indonesia karena penyebaran wabahnya saat itu. Virus ini rupanya menyerang hewan unggas, seperti burung dan ayam. Hal berbahayanya ialah virus ini mampu menular kepada manusia.</p>
                    <li>Penyakit Pada Tumbuhan</li>
                    <p>Virus Tobacco Mozaic merupakan penyebab penyakit mosaik pada tumbuhan tembakau. Faktanya, virus ini merupakan cikal bakal penamaan kata ‘virus’ dan cabang ilmu mempelajari tentang virus (virologi). Virus ini mampu mengkerdilkan tanaman karena adanya infeksi pada daun tumbuhan. Gejala virus ini terdiri dari warna hijau muda di daun tumbuhan menyerupai pola ‘mosaik’ atau belang-belang warna hijau terang dan hijau gelap pada daun. Adanya mutasi yang terjadi pada virus ini, rupanya mampu menyerang tumbuhan lain selain tembakau. Misalnya, labu, buncis, mentimun, kentang dan sebagainya.</p>
                    <li>Penyakit Pada Manusia</li>
                    <p>Beberapa penyakit yang diderita manusia umumnya disebabkan adanya serangan virus dalam tubuh. Virus memiliki ukuran mikroskopis yang berkisar antara 20-300 milimikron. Virus bersifat aseluler atau tidak mempunyai sel, sehingga virus hanya akan berkembangbiak di dalam sel hidup. Virus akan menyerang kekebalan atau imunitas ketika sistem imun lemah. Salah satunya yaitu virus HIV. Virus HIV adalah virus yang akan memperlemah kekebalan tubuh manusia. Hal tersebut akan menyebabkan tubuh rentan terhadap infeksi atau penyakit lainnya. HIV memiliki arti Human Immunodeficiency Virus. Penyebab virus ini ialah adanya proses kontak fisik dengan penderita HIV melalui hubungan seksual yang tidak sehat, pemakaian jarum suntik bekas dengan penderita HIV, penggunaan alat pembuat tato dan body piercing.</p>
                    </ul>

            </div>
        </div>
    )
}

export default Dn