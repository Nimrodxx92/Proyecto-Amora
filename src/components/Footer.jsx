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
    name: "Whatsapp",
    image: Whats,
    numbers: [
      {
        number: "+541130596616",
        message: "¡Hola! Te escribo por los productos de Amora. 🌸",
      },
      {
        number: "+542323617071",
        message:
          "¡Hola! Quisiera más información sobre los productos de Amora. 🌿",
      },
    ],
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
          {icon.numbers && (
            <div>
              {icon.numbers.map((whatsapp, idx) => (
                <Link
                  key={idx}
                  to={`https://api.whatsapp.com/send?phone=${
                    whatsapp.number
                  }&text=${encodeURIComponent(whatsapp.message)}`}
                  className={icon.className}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {whatsapp.number}
                </Link>
              ))}
            </div>
          )}
          {icon.text && (
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
          )}
        </section>
      ))}
      <section className="geo">
        <img src={GeoL} alt="Location" />
        <p>Lujan, Provincia de Buenos Aires</p>
      </section>
    </footer>
  );
};

export default Footer;
