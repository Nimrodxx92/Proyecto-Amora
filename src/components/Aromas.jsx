import { useState } from "react";
import aromasDescription from "../json/aromas.json";
import AromasDescription from "./AromasDescription";

const Aromas = () => {
  const [arrayAromas, setArrayAromas] = useState([...aromasDescription.aromas]);

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
          </div>
          <button>Hacé click acá</button>
        </div>
        <div>
          <img src="../src/assets/aromas/banner.png" alt="banner de aromas" />
        </div>
      </section>
      <section className="section__container">
        {arrayAromas.map((info, id) => (
          <AromasDescription item={info} key={id} />
        ))}
      </section>
    </>
  );
};

export default Aromas;
