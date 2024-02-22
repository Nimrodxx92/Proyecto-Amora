import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Ig, Fb, Email, Whats, Logo } from "./assets/icons/icons";

const socialIcons = [
  { name: "Instagram", image: Ig, link: "#", className: "ig-icon" },
  { name: "Facebook", image: Fb, link: "#", className: "facebook-icon" },
  { name: "Whatsapp", image: Whats, link: "#", className: "whatsapp-icon" },
  { name: "Email", image: Email, link: "#", className: "email-icon" },
];

function BasicExample() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" className="navbar__container">
      <Container className="custom-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo Amora" />
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" expanded={expanded.toString()}>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/productos">
              Productos
            </Nav.Link>
            <NavDropdown
              title={expanded ? <FaAngleUp /> : <FaAngleDown />}
              onClick={handleToggle}
              className="dropdown-without-caret"
            >
              <NavDropdown.Item as={Link} to="/velas">
                Velas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/difusores">
                Difusores
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bruma-textil">
                Bruma textil
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jabon-liquido">
                Jabón líquido
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/flores-aromaticas">
                Flores aromáticas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/esencias">
                Esencias
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/accesorios">
                Accesorios
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kit-personalizados">
                Kit personalizados
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/aromas">
              Aromas
            </Nav.Link>
            <Nav.Link as={Link} to="/nosotras">
              Nosotras
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="icons-redes">
          {socialIcons.map((icon, index) => (
            <Link key={index} to={icon.link} className={icon.className}>
              <img src={icon.image} alt={icon.name} />
            </Link>
          ))}
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
