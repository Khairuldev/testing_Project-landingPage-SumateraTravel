import React from "react";
import "./transport.css";
import { Mobil1, Mobil2, Mobil3, Mobil4, Mobil5, Mobil6 } from "../../Assets/tranpostasi/index";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const Transport = () => {
  return (
    <div>
      <div className="transcontent">
        <div>
          <h2 style={{ textAlign: "center", margin: "10px", paddingTop: "50px" }}> Transport Service</h2>
        </div>
        <div>
          <p style={{ textAlign: "center", paddingTop: "20px" }}>
            ingin liburan lebih hemat, sewa mobil aja.. <br />
            Tersedia berbagai armada yang kami tawarkan untuk anda, harga sudah termasuk BBM dan Driver
          </p>
        </div>
        <Container>
          <div className="scroller">
            <div>
              <Card className="box">
                <Card.Img variant="top" src={Mobil1} style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>TOYOTA ALPHARD</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary" style={{ fontSize: "12px", marginLeft: "20px" }}>
                    SILAHKAN BOOKING
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="box">
                <Card.Img variant="top" src={Mobil2} style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>TOYOTA AVANZA</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary" style={{ fontSize: "12px", marginLeft: "20px" }}>
                    SILAHKAN BOOKING
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="box">
                <Card.Img variant="top" src={Mobil3} style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>SUZUKI ERTIGA</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary" style={{ fontSize: "12px", marginLeft: "20px" }}>
                    SILAHKAN BOOKING
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="box">
                <Card.Img variant="top" src={Mobil4} style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>ALL NEW FORTUNER</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary" style={{ fontSize: "12px", marginLeft: "20px" }}>
                    SILAHKAN BOOKING
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="box">
                <Card.Img variant="top" src={Mobil5} style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>INNOVA REBORN</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary" style={{ fontSize: "12px", marginLeft: "20px" }}>
                    SILAHKAN BOOKING
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="box">
                <Card.Img variant="top" src={Mobil6} style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>TOYOTA INNOVA</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary" style={{ fontSize: "12px", marginLeft: "20px" }}>
                    SILAHKAN BOOKING
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="box">
                <Card.Img variant="top" src={Mobil2} style={{ paddingBottom: "15px", width: "100%", height: "167px" }} />
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>TOYOTA RUSH</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary" style={{ fontSize: "12px", marginLeft: "20px" }}>
                    SILAHKAN BOOKING
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
        <hr />
      </div>
    </div>
  );
};

export default Transport;
