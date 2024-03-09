import { Link } from "react-router-dom";
import aromasDescription from "../json/aromas.json";
import AromasDescription from "./AromasDescription";

const Aromas = () => {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=541130596616&text=%C2%A1Hola!%20Te%20escribo%20por%20los%20producto%20de%20Amora.%20%F0%9F%8C%B8";

  return (
    <>
      <section className="banner__container">
        <div className="banner__container__left">
          <div className="banner__container__left__text">
            <h1>¿Es tu primera compra?</h1>
            <p>
              Recibí asesoramiento personalizado en tu compra para poder
              descubrir y elegir la fragancia que mejor se ajusta a vos y a tus
              necesidades.
            </p>
            <Link to={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button>Hacé click acá</button>
            </Link>
          </div>
        </div>
        <div className="img-banner">
          <img src="../../../aromas/banner.png" alt="banner de aromas" />
        </div>
      </section>
      <section className="section__container">
        {aromasDescription.aromas.map((info, id) => (
          <AromasDescription item={info} key={id} />
        ))}
      </section>
    </>
  );
};

export default Aromas;
