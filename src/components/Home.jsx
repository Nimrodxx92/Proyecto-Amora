import data from "../json/productos.json";

const Home = () => {
  const desiredOrder = ["0018", "0100", "0046", "0072"];
  const additionalProducts = ["0036", "200", "0020", "0075"];

  const orderedProducts = desiredOrder.map((id) =>
    data.productos.find((producto) => producto.id === id)
  );

  const additionalFilteredProducts = data.productos.filter((producto) =>
    additionalProducts.includes(producto.id)
  );

  return (
    <>
      <main className="home__container">
        <section className="title__container">
          <div className="parrafo-txt">
            <h1>
              <span>El bienestar</span>
              <span>que necesitás</span>
            </h1>
            <p>Velas aromáticas, brumas textiles, difusores</p>
            <p>y mucho más, todo en un mismo lugar</p>
            <button>Ver más</button>
          </div>
        </section>
        <section className="card__products">
          {orderedProducts.map((producto) => (
            <div key={producto.id} className="card">
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="txt__container">
                <h4>{producto.nombre}</h4>
                <p className="p-category">{producto.categoria}</p>
                <p>Ref. #{producto.id}</p>
              </div>
            </div>
          ))}
        </section>
        <div className="subparrafo-txt">
          <h2>
            <span>El bienestar</span>
            <span>que necesitás</span>
          </h2>
          <p>Velas aromáticas, brumas textiles, difusores</p>
          <p>y mucho más, todo en un mismo lugar</p>
        </div>
        <section className="card__products">
          {additionalFilteredProducts.map((producto) => (
            <div key={producto.id} className="card">
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="txt__container">
                <h4>{producto.nombre}</h4>
                <p className="p-category">{producto.categoria}</p>
                <p>Ref. #{producto.id}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
