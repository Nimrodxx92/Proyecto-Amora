import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

const NavLinks = [
  { to: "/", label: "Home" },
  { to: "/productos", label: "Productos" },
  { to: "/aromas", label: "Aromas" },
  { to: "/nosotras", label: "Nosotras" },
  { to: "/contacto", label: "Contacto" },
];

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="space-above-menu"></div>
        <div className="mobile-menu-container">
          <ul className="nav__links">
            {NavLinks.map((link, index) => (
              <li className="navlinks__li" key={index}>
                <Link to={link.to} className="links">
                  {link.label}
                </Link>
              </li>
            ))}
            <div className="logo">
              <NavLink to="/">
                <img src={Logo} alt="Logo" />
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.string.isRequired,
  toggleMenu: PropTypes.string.isRequired,
};

export default MobileNav;
