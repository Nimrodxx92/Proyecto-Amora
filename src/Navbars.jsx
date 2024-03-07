import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Ig, Fb, Email, Whats, Logo } from "./assets/icons/icons";

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

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar__container">
      <Container className="custom-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo Amora" />
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/productos">
              Productos
            </Nav.Link>
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
  );
}

export default BasicExample;
