import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";

const NavBar = () => {
  const [showProductos, setShowProductos] = useState(false);

  const toggleProductos = () => {
    setShowProductos(!showProductos);
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
    <nav>
      <div className="logo">
        <NavLink to="/">
          <span>LOGO</span>
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
          <FaInstagram />
        </Link>
        <Link to="#">
          <FaWhatsapp />
        </Link>
        <Link to="#">
          <FaEnvelope />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
