import { useState } from "react";
import { NavLink } from "react-router-dom";

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
    { name: "Nosotros", link: "/nosotros" },
    { name: "Contacto", link: "/contacto" },
  ];

  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.name === "Productos" ? (
              <>
                <NavLink to={item.link}>{item.name}</NavLink>
                <span onClick={toggleProductos}>
                  {showProductos ? "▲" : "▼"}
                </span>
                {showProductos && (
                  <ul>
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
            ) : (
              <li>
                <NavLink to={item.link} activeClassName="active">
                  {item.name}
                </NavLink>
              </li>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
