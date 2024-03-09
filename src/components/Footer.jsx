import { Ig, Email, Whats, GeoL } from "../assets/icons/icons";
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
    links: [
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
  {
    name: "Email",
    image: Email,
    link: "mailto:amora.aromaterapia@gmail.com",
    className: "email-icon",
    text: "amora.aromaterapia@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer>
      {socialIcons.map((icon, index) => (
        <section key={index}>
          <Link to={icon.link} className={icon.className}>
            <img src={icon.image} alt={icon.name} />
          </Link>
          {icon.links && (
            <div>
              {icon.links.map((link, idx) => (
                <div key={idx}>
                  <Link
                    to={`https://api.whatsapp.com/send?phone=${
                      link.number
                    }&text=${encodeURIComponent(link.message)}`}
                    className={icon.className}
                  >
                    {link.number}
                  </Link>
                </div>
              ))}
            </div>
          )}
          <p>{icon.text}</p>
        </section>
      ))}
      <section>
        <img src={GeoL} />
        <p>Lujan, Provincia de Buenos Aires</p>
      </section>
    </footer>
  );
};

export default Footer;
