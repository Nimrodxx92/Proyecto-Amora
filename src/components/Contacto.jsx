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
              <div className="container-icons">
                <img src={Whats} alt="Whatsapp" />
                <p>+54 000 000 0000</p>
              </div>
              <div className="container-icons">
                <img src={Email} alt="Email" />
                <p>amora.aromaterapia@gmail.com</p>
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
              <div className="container-icons">
                <img src={Ig} alt="Instagram" />
                <p>@Amora.Aromaterapia</p>
              </div>
              <div className="container-icons">
                <img src={Fb} alt="Facebook" />
                <p>@Amora.Aromaterapia</p>
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.258963896771!2d-59.106431184212!3d-34.57214768046121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca672f3ea381%3A0x89fcb15a24339a8!2sItalia%20821%2C%20B6700%20Luj%C3%A1n%2C%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1646581162301!5m2!1sen!2sar"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default Contacto;
