import React from "react";
import Story from "./Component/story/Story";
import Jumbotron from "./Component/Jumbotron/Carousels";
import Langganan from "./Component/Berlanganan/Langganan";
import Navbar from "./Component/navbar/Navbar";
import Deskripsi from "./Component/Deskripsi/Deskripsi";
import Destipilihan from "./Component/Jumbotron2/Dspilihan";
import Destinasi_populer from "./Component/destinasi/Destipopuler";
import "./style/App.css";
import Destinasipilihan from "./Component/Pilihandestinasi/Destinasipilihan";
import Transportasi from "./Component/Transport/Transport";
// import Containers from "./Component/Containerfile/Container";
// import Kalender from "./Component/Kalender/Kalender";

function App() {
  return (
    <div className="BodyContent">
      {/* awal container */}
      <div className="continer">
        <div>
          <Navbar />
        </div>
        <div>
          <Jumbotron />
        </div>
      </div>
      {/* akhir container */}

      {/* Awal conten deskrpsi */}
      <section className="contentdeskripsi">
        <div className="elementor-heading-title">
          <h2>
            <hr />
            Kenapa Memilih Sumatera Travel
            <br />
            Sebagai Partner Liburan Anda
            <hr />
          </h2>
        </div>
      </section>
      <div>
        <Deskripsi />
      </div>
      <hr />
      {/* Akhir Deskripsi */}

      {/* Awal Destinasi Pilihan */}
      <div>
        <div>
          <div className="ContentDestinasi">
            <div className="destinasi">
              <h2> Paket Tour Destiasi Populer </h2>
              <p>Berikut Paket Tour Destinasi Populer Yang Kami tawarkan Untuk Anda </p>
              <div>
                <Destinasi_populer />
              </div>
            </div>
          </div>
        </div>
        <div className="dspilihan">
          <Destipilihan />
        </div>
        <div>
          <Destinasipilihan />
        </div>
      </div>

      {/* Akhir Destinasi */}

      {/* Awal Stori Petualangan */}
      <div>
        <div>
          <div className="Title">
            <h2>Cerita Petualangan</h2>
          </div>
          <div className="stori">
            <Story />
          </div>
        </div>
        <div className="emailContent">
          <Langganan />
        </div>
      </div>
      {/* akhir stori petualangan */}
      <div>
        <Transportasi />
      </div>
    </div>
  );
}

export default App;
