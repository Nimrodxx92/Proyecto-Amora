import { Ig, Email, Whats, Fb } from "../assets/icons/icons";

const Contacto = () => {
  const urlImage = "../src/assets/contacto";
  return (
    <>
      <section className="container__contacto">
        <div className="contact__firts">
          <div>
            <h1>Ponete en contacto con nosotras</h1>
            <p>
              Si tienes alguna consulta, deseas más información sobre nuestros
              productos o necesitas asistencia personalizada, no dudes en
              contactarnos.
            </p>
            <div className="icons">
              <div>
                <img src={Whats} />
                <a>+54 000 000 0000</a>
              </div>
              <div>
                <img src={Email} />
                <a>amora.aromaterapia@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="img-uno">
            <img src={`${urlImage}/contacto-1.png`} alt="" />
          </div>
        </div>
      </section>

      <section className="container__contacto background-change">
        <div className="contact__firts">
          <div className="img-uno">
            <img src={`${urlImage}/contacto-2.png`} alt="" />
          </div>
          <div>
            <h2>Seguinos en todas nuestras redes sociales</h2>

            <div className="icons">
              <div>
                <img src={Ig} />
                <a>@Amora.Aromaterapia</a>
              </div>
              <div>
                <img src={Fb} />
                <a>@Amora.Aromaterapia</a>
              </div>
            </div>

            <p>
              Así podrás enterarte de todas las novedades, ofertas y variedad de
              productos que elaboramos.
            </p>
          </div>
        </div>
      </section>

      <section className="container__contacto">
        <div className="contact__firts">
          <div>
            <h2>Nuestra casa en Luján</h2>
            <p>¡Vení a visitarnos!</p>
            <p>
              Dirección: Italia 821, B6700 Luján, Provincia de Buenos Aires.
            </p>
            <p>Horario de atención: lunes a viernes, de 8:30hrs a 17:30hrs.</p>
            <p>¡Te esperamos!</p>
          </div>

          <div className="img-uno">
            <img src={`${urlImage}/contacto-3.png`} alt="" />
          </div>
        </div>
      </section>

      <section>
        <img src={`${urlImage}/contacto-4.png`} alt="" />
      </section>
    </>
  );
};

export default Contacto;
