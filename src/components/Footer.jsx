import React from "react";
import Whsp from "../assets/Whatsapp.svg";
import Ig from "../assets/Instagram.svg";
import Email from "../assets/Email.svg";
import Geo from "../assets/GeoLocation.svg";

const Footer = () => {
  return (
    <footer>
      <section>
        <img src={Ig} />
        <a>@amora.aromaterapia</a>
      </section>
      <section>
        <img src={Whsp} />
        <a>+54 000 000 0000</a>
      </section>
      <section>
        <img src={Email} />
        <a>amora.aromaterapia@gmail.com</a>
      </section>
      <section>
        <img src={Geo} />
        <a>Lujan, Provincia de Buenos Aires</a>
      </section>
    </footer>
  );
};

export default Footer;
