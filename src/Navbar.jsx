import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp, FaBars, FaTimes } from "react-icons/fa";
import MobileNav from "./components/mobileNav/MovileNav";
import Logo from "./assets/Logo.svg";
import Whsp from "./assets/Whatsapp.svg";
import Ig from "./assets/Instagram.svg";
import Email from "./assets/Email.svg";

const NavBar = () => {
  const [showProductos, setShowProductos] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleProductos = () => {
    setShowProductos(!showProductos);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "Productos",
      link: "/productos",
      submenu: [
        "Producto 1",
        "Producto 2",
        "Producto 3",
        "Producto 4",
        "Producto 5",
        "Producto 6",
      ],
    },
    { name: "Aromas", link: "/aromas" },
    { name: "Nosotras", link: "/nosotras" },
    { name: "Contacto", link: "/contacto" },
  ];

  return (
    <>
      <nav>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <button className="menu-btn" onClick={toggleMenu}>
          <span style={{ fontSize: "1.8rem" }}>
            {openMenu ? (
              <FaTimes className="x-icon" />
            ) : (
              <FaBars className="burguer-icon" />
            )}
          </span>
        </button>
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.link} activeClassName="active">
                {item.name}
              </NavLink>
              {item.name === "Productos" && (
                <>
                  <span className="arrow" onClick={toggleProductos}>
                    {showProductos ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                  {showProductos && (
                    <ul className="submenu">
                      {item.submenu.map((subitem, subindex) => (
                        <li key={subindex}>
                          <NavLink
                            to={`${item.link}/${subindex + 1}`}
                            activeClassName="active"
                          >
                            {subitem}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="icons-redes">
          <Link to="#">
            <img src={Whsp} alt="Whatsapp" />
          </Link>
          <Link to="#">
            <img src={Ig} alt="Instagram" />
          </Link>
          <Link to="#">
            <img src={Email} alt="Email" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
