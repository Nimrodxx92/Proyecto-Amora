import { Ig, Email, Whats, GeoL } from "../assets/icons/icons";

const Footer = () => {
  return (
    <footer>
      <section>
        <img src={Ig} />
        <a>@amora.aromaterapia</a>
      </section>
      <section>
        <img src={Whats} />
        <a>+54 000 000 0000</a>
      </section>
      <section>
        <img src={Email} />
        <a>amora.aromaterapia@gmail.com</a>
      </section>
      <section>
        <img src={GeoL} />
        <a>Lujan, Provincia de Buenos Aires</a>
      </section>
    </footer>
  );
};

export default Footer;
