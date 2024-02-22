import { img1, img2, img3 } from "../assets/nosotras/nosotras";

const Nosotras = () => {
  return (
    <section className="section__container">
      <div className="layout__container">
        <div className="layout__text">
          <h2>¿Quienés somos?</h2>
          <p>
            Somos Gabriela, Silvina y Adriana, tres mujeres, amigas y
            emprendedoras, que hacemos posible la tienda de fragancias, y
            quienes le ponemos todo nuestro amor para que Amora siga difundiendo
            el bienestar en todos nuestros clientes. Todo lo que hacemos viene
            desde el corazón, y siempre estamos pensando en lo que queremos que
            te lleves cuando tengas un producto de nuestra marca. La conexión
            con vos mismo, la felicidad de sentir un aroma lindo y la serenidad
            que te dan los mismos.
          </p>
        </div>
        <div className="layout__image">
          <img src={img1} alt="Imagen 1" />
        </div>
      </div>
      <div className="layout__container__center">
        <div className="layout__image">
          <img src={img2} alt="Imagen 2" />
        </div>
        <div className="layout__text">
          <h2>Elaboración artesanal</h2>
          <p>
            Todos los productos que vendemos en Amora los hacemos con nuestras
            propias manos, de forma artesanal. Volcamos nuestro coocimiento en
            aromaterapia para hacer que vos y los que más querés tengan una
            experiencia increíble, en cualquier lugar al que vayan.
          </p>
          <p>
            Nuestros productos están pensados para cualquier persona que
            disfrute de sus aromas, y preparados especialmente para cada uno de
            ellos, tenemos en cuenta los detalles y la presentación de todo lo
            que vendemos al público.
          </p>
        </div>
      </div>
      <div className="layout__container">
        <div className="layout__text">
          <h2 className="layout__title">Productos ecológicos</h2>
          <p>
            Sumergite en la luz y el aroma de nuestras velas ecológicas,
            elaboradas con cera de soja renovable y biodegradable. Cada llama es
            más que una simple luz; es un eco de compromiso con nuestro planeta.
            Nuestras velas, moldeadas con cuidado artesanal, encarnan la fusión
            perfecta entre la elegancia y la sostenibilidad.
          </p>
          <p>
            Con nuestros aromas característicos, que te transportan a lugares
            que dan paz, estas velas no solo embellecen tu hogar, sino que
            también honran nuestro compromiso con un mundo más sostenible y
            lleno de armonía con la naturaleza.
          </p>
        </div>
        <div className="layout__image">
          <img src={img3} alt="Imagen 3" />
        </div>
      </div>
    </section>
  );
};

export default Nosotras;
