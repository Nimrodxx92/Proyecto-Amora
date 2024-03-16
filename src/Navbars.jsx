import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Ig, Fb, Email, Whats, Logo } from "./assets/icons/icons";
import Offcanvas from "react-bootstrap/Offcanvas";

const socialIcons = [
  {
    name: "Instagram",
    image: Ig,
    link: "https://www.instagram.com/amora.aromaterapia/",
    className: "ig-icon",
  },
  {
    name: "Facebook",
    image: Fb,
    link: "https://www.facebook.com/Amora.aromaterapia/",
    className: "facebook-icon",
  },
  {
    name: "Whatsapp",
    image: Whats,
    link: "https://api.whatsapp.com/send?phone=541130596616&text=%C2%A1Hola!%20te%20escribo%20por%20los%20producto%20de%20Amora.%20%F0%9F%8C%B8",
    className: "whatsapp-icon",
  },
  {
    name: "Email",
    image: Email,
    link: "mailto:amora.aromaterapia@gmail.com",
    className: "email-icon",
  },
];

function OffcanvasExample() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleToggleOffcanvas = () => setShowOffcanvas((prev) => !prev);

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="navbar__container"
          variant="dark"
        >
          <Container fluid className="custom-container">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Logo Amora" />
              </Link>
            </div>
            <Nav className="navbar-nav">
              <Nav.Link as={Link} to="/" onClick={handleCloseOffcanvas}>
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/productos"
                onClick={handleCloseOffcanvas}
              >
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/aromas" onClick={handleCloseOffcanvas}>
                Aromas
              </Nav.Link>
              <Nav.Link as={Link} to="/nosotras" onClick={handleCloseOffcanvas}>
                Nosotras
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto" onClick={handleCloseOffcanvas}>
                Contacto
              </Nav.Link>
            </Nav>
            <Navbar.Toggle
              onClick={handleToggleOffcanvas}
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="navbar-toggler-custom"
            />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{ width: "100%", maxWidth: "280px" }}
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <div className="logo-mobile">
                  <img src={Logo} alt="Logo Amora" />
                </div>
                <Nav className="flex-column">
                  <Nav.Link as={Link} to="/" onClick={handleCloseOffcanvas}>
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/productos"
                    onClick={handleCloseOffcanvas}
                  >
                    Productos
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/aromas"
                    onClick={handleCloseOffcanvas}
                  >
                    Aromas
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/nosotras"
                    onClick={handleCloseOffcanvas}
                  >
                    Nosotras
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/contacto"
                    onClick={handleCloseOffcanvas}
                  >
                    Contacto
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="icons-redes">
              {socialIcons.map((icon, index) => (
                <Link
                  key={index}
                  to={icon.link}
                  target="_blank"
                  className={icon.className}
                >
                  <img src={icon.image} alt={icon.name} />
                </Link>
              ))}
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
