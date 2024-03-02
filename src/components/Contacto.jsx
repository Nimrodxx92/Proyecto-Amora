import { Ig, Email, Whats, Fb } from "../assets/icons/icons";
import img1 from "../assets/contacto/contac01.jpg";
/* import img2 from "../assets/contacto/contact02.jpg"; */

const Contacto = () => {
  return (
    <>
      <section className="container__contacto">
        <div className="contact__firts">
          <h1>Ponete en contacto con nosotras</h1>
          <p>
            Si tienes alguna consulta, deseas más información sobre nuestros
            productos
          </p>
          <p>o necesitas asistencia personalizada, no dudes en contactarnos.</p>
          <div className="icons">
            <div>
              <img src={Whats} />
              <a>+54 000 000 0000</a>
            </div>
            <div>
              <img src={Email} />
              <a>+54 000 000 0000</a>
            </div>
          </div>
        </div>
        <div className="img-uno">
          <img src={img1} alt="" />
        </div>
      </section>
    </>
  );
};

export default Contacto;
