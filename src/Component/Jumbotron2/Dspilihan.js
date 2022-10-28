import { Gambar1, Gambar2, Gambar3, Gambar4, Gambar5, Gambar6 } from "../../Assets/TempatWisata";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import "./dspilihan.css";

function Destipilihan() {
  return (
    <div className="bggambar">
      <div className="cari">
        <div>
          <h2 className="title1">Temukan Liburan Terbaikmu</h2>
          <h2 className="title2">Bersama Sumatera Travel</h2>
        </div>
        <div className="contentform">
          <Container className="kotak p-3 m-1" style={{ marginBottom: "5px" }}>
            <Row gap={3}>
              <Col xs={12} sm={12} lg={3} md={3}>
                <div className="mb-2">
                  <Form.Select aria-label="Default select example">
                    <option>Select Tour Categories</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </Col>
              <Col xs={12} sm={12} lg={3} md={3}>
                <div className="mb-2">
                  <Form.Select aria-label="Default select example">
                    <option>Select Destination</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </Col>
              <Col xs={12} sm={12} lg={3} md={3}>
                <div className="mb-2">
                  <Form.Select aria-label="Default select example">
                    <option>Select Tour Type </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </div>
              </Col>
              <Col>
                <div className=" bttn">
                  <button class="btn btn-block btn-primary " type="Submit" placeholder="Search" style={{ width: "100%" }}>
                    Search
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Destipilihan;
