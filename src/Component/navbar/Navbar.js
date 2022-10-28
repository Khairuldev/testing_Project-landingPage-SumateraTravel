import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function Navigasibar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Navbar className={navbar ? "navbaractive" : "navbar"} collapseOnSelect expand="lg" fixed="top">
      <Container className="navbar">
        <div className="navbar-brand" style={{}}>
          <Navbar.Brand href="#home" style={{ marginLeft: "10px", color: "orange" }}>
            Sumatera Travel
          </Navbar.Brand>
        </div>
        <div className="navbar-toggle">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ marginRight: "10px", color: "orange" }} />
        </div>
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav bg-primary">
            <Nav className="ms-auto" direction="horizontal m-1">
              <Nav.Link id="features" href="#features">
                Home
              </Nav.Link>
              <Nav.Link id="features" href="#pricing">
                Profil
              </Nav.Link>
              <NavDropdown title="Tour" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Paket Bulan Madu</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Paket Wisata</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Paket Keluarga</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link id="features" href="#pricing">
                Galery
              </Nav.Link>
              <Nav.Link id="features" href="#pricing">
                Artikel
              </Nav.Link>
              <Nav.Link id="features" href="#pricing">
                Kontak
              </Nav.Link>
            </Nav>
            <Nav>
              <a href="#" class="btn btn-outline-success m-2">
                Login
              </a>
              <a href="#" class="btn btn-outline-danger m-2">
                Daftar
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
}

export default Navigasibar;
