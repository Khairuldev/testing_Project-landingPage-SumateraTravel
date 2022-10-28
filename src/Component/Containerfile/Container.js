import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Container.css";

function Navbard() {
  return (
    <Navbar className="header" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#" id="navbarScrollingDropdown">
          SumateraTravel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px", margin: "55px" }} navbarScroll>
            <NavDropdown title="Atraksi" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Destinasi</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Atraksi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Event</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Inspirasi Seru" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">5 Wonders</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Ide Liburan</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Cerita Perjalanan</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Jelajahi #IndonesiaAja</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Rencanakan Perjalanan" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Informasi Umum</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Promosi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">#DiIndonseiaAja</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" id="navbarScrollingDropdown" active>
              Go Explore
            </Nav.Link>
            <NavDropdown title="Panduan Dasar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Kesempatan Bekerja</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Panduan Brand</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">E-Brochure</NavDropdown.Item>
              <NavDropdown.Item href="#action6">E-Booklet</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbard;
