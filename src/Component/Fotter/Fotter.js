import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { gmail, lokasi, whatsap } from "../../Assets/gambaricon";
import "./fotter.css";

const Fotter = () => {
  return (
    <div className="fotter">
      <Container>
        <Row className="justify-content-center p-5">
          <Col lg={4} md={4} sm={4} xs={6}>
            <div className="contact">
              <div>
                <div>
                  <h4 style={{ paddingBottom: "25px", paddingLeft: "50px" }}>Contact</h4>
                </div>
                <ul>
                  <li style={{ paddingBottom: "15px" }}>
                    <img style={{ paddingLeft: "10px" }} src={lokasi} />
                    <span style={{ marginLeft: "25px" }}>
                      JL. ISMALIYAH, KOTA MAKSUM <br />
                      &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; MEDAN,SUMATERA UTARA
                    </span>
                  </li>
                  <li style={{ paddingBottom: "10px" }}>
                    <img style={{ paddingLeft: "10px" }} src={gmail} />
                    <span style={{ marginLeft: "25px" }}> sumateratravel@gmail.com</span>
                  </li>
                  <li>
                    <img src={whatsap} />
                    <span style={{ marginLeft: "10px" }}> +62 823 - 8383 - 2389</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <div className="mainmenu1">
              <div>
                <h4 style={{ paddingBottom: "25px", paddingLeft: "50px" }}>Main Menu</h4>
              </div>
              <div style={{ paddingLeft: "15px" }}>
                <ul>
                  <li>
                    <span>Home</span>
                  </li>
                  <li>
                    <span>Profil</span>
                  </li>
                  <li>
                    <span>Galery</span>
                  </li>
                  <li>
                    <span>artikel</span>
                  </li>
                  <li>
                    <span>Kontak</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <div className="socialmedia">
              <div>
                <h4 style={{ paddingBottom: "25px", paddingLeft: "30px" }}>Social Media</h4>
              </div>
              <div>
                <ul>
                  <li>
                    <img style={{ paddingLeft: "10px" }} src={lokasi} />
                    <img style={{ paddingLeft: "10px" }} src={lokasi} />
                    <img style={{ paddingLeft: "10px" }} src={lokasi} />
                  </li>
                  <br />
                  <li>
                    <h4>Pembayaran</h4>
                    <br />
                    <pre>
                      <span>
                        <p>BCA : 123456789</p>
                        <p>An : BCA_SumateraTravel</p>
                      </span>
                      <br />
                      <span>
                        <p>BNI : 123456789</p>
                        <p>An : BNI_SumateraTravel</p>
                      </span>
                      <br />
                      <span>
                        <p>BRI : 123456789</p>
                        <p>An : BRI_SumateraTravel</p>
                      </span>
                    </pre>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fotter;
