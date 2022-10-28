import { Container, Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Gambar7 } from "../../Assets/TempatWisata";
import "./Destinasi.css";

const Destinasi_populer = () => {
  return (
    <div>
      <Container className="kategori">
        <Row>
          <Col className="mx-auto" lg={12} md={12} sm={12} xs={12}>
            <button class="btn btn-primary m-2 " type="button" width="auto">
              Paket Bulan Madu
            </button>
            <button class="btn btn-primary m-2" type="button" width="auto">
              Paket Liburan Keluarga
            </button>
            <button class="btn btn-primary m-2" type="button" width="auto">
              Paket Wisata
            </button>
            <button class="btn btn-primary m-2" type="button" width="auto">
              Tour Harian
            </button>
          </Col>
        </Row>
      </Container>
      <div className="paket">
        <Row style={{ justifyContent: "center" }}>
          <Col className="colom m-2" xs={12} sm={12} md={3} lg={2}>
            <a a href="#">
              <Card.Img src={Gambar7} alt="Card image" Title="Pulau Propo" style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
            </a>
            <a href="#">PAKET TOUR GRUP 3 HARI 2 MALAM</a>
            <hr />
            <p>Danau Toba</p>
          </Col>
          <Col className="colom m-2" xs={12} sm={12} md={3} lg={2}>
            <a href="#">
              <Card.Img src={Gambar7} alt="Card image" Title="Pulau Propo" style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
            </a>
            <a href="#">Card title</a>
            <hr />
            <p>Danau Toba</p>
          </Col>
          <Col className="colom m-2" xs={12} sm={12} md={3} lg={2}>
            <a href="#">
              <Card.Img src={Gambar7} alt="Card image" Title="Pulau Propo" style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
            </a>
            <a href="#">Card title</a>
            <hr />
            <p>Danau Toba</p>
          </Col>
          <Col className="colom m-2" xs={12} sm={12} md={3} lg={2}>
            <a href="#">
              <Card.Img src={Gambar7} alt="Card image" Title="Pulau Propo" style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
            </a>
            <a href="#">Card title</a>
            <hr />
            <p>Danau Toba</p>
          </Col>
          <Col className="colom m-2" xs={12} sm={12} md={3} lg={2}>
            <a href="#">
              <Card.Img src={Gambar7} alt="Card image" Title="Pulau Propo" style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
            </a>
            <a href="#">Card title</a>
            <hr />
            <p>Danau Toba</p>
          </Col>
          <Col className="colom m-2" xs={12} sm={12} md={3} lg={2}>
            <a href="#">
              <Card.Img src={Gambar7} alt="Card image" Title="Pulau Propo" style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
            </a>
            <a href="#">Card title</a>
            <hr />
            <p>Danau Toba</p>
          </Col>
          <Col className="colom m-2" xs={12} sm={12} md={3} lg={2}>
            <a href="#">
              <Card.Img src={Gambar7} alt="Card image" Title="Pulau Propo" style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
            </a>
            <a href="#">Card title</a>
            <hr />
            <p>Danau Toba</p>
          </Col>
          <Col className="colom m-2" xs={12} sm={12} md={3} lg={2}>
            <a href="#">
              <Card.Img src={Gambar7} alt="Card image" Title="Pulau Propo" style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
            </a>
            <a href="#">Card title</a>
            <hr />
            <p>Danau Toba</p>
          </Col>
          <Col className="colom m-2" xs={12} sm={12} md={3} lg={2}>
            <a href="#">
              <Card.Img src={Gambar7} alt="Card image" Title="Pulau Propo" style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
            </a>
            <a href="#">Card title</a>
            <hr />
            <p>Danau Toba</p>
          </Col>
          <Col className="colom m-2" xs={12} sm={12} md={3} lg={2}>
            <a href="#">
              <Card.Img src={Gambar7} alt="Card image" Title="Pulau Propo" style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
            </a>
            <a href="#">Card title</a>
            <hr />
            <p>Danau Toba</p>
          </Col>
        </Row>
        <hr />
      </div>
    </div>
  );
};

export default Destinasi_populer;
