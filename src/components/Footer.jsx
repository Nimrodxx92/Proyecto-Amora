import { Ig, Whats, GeoL } from "../assets/icons/icons";
import { Link } from "react-router-dom";

const socialIcons = [
  {
    name: "Instagram",
    image: Ig,
    link: "https://www.instagram.com/amora.aromaterapia/",
    className: "ig-icon",
    text: "@amora.aromaterapia",
  },
  {
    name: "Whatsapp1",
    image: Whats,
    number: "+541130596616",
    message: "¡Hola! Te escribo por los productos de Amora. 🌸",
    className: "whatsapp-icon",
  },
  {
    name: "Whatsapp2",
    image: Whats,
    number: "+542323617071",
    message: "¡Hola! Quisiera más información sobre los productos de Amora. 🌿",
    className: "whatsapp-icon",
  },
];

const Footer = () => {
  return (
    <footer>
      {socialIcons.map((icon, index) => (
        <section key={index}>
          <Link
            to={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className={icon.className}
          >
            <img src={icon.image} alt={icon.name} />
          </Link>
          {icon.number && (
            <div>
              <Link
                to={`https://api.whatsapp.com/send?phone=${
                  icon.number
                }&text=${encodeURIComponent(icon.message)}`}
                className={icon.className}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon.number}
              </Link>
            </div>
          )}
          <p>
            <Link
              to={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className={icon.className}
            >
              {icon.text}
            </Link>
          </p>
        </section>
      ))}
      <section>
        <img src={GeoL} alt="Location" />
        <p>Lujan, Provincia de Buenos Aires</p>
      </section>
    </footer>
  );
};

export default Footer;
