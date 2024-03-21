import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productosData from "../json/productos.json";

const DetalleProducto = () => {
  const { id } = useParams();
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productoInicial, setProductoInicial] = useState(null);
  const [productosMismaSubcategoria, setProductosMismaSubcategoria] = useState(
    []
  );

  const colores = [
    { color: "#C799DC", nombre: "Lavanda" },
    { color: "#E3EC82", nombre: "Limón" },
    { color: "#BF9C7C", nombre: "Bambú" },
    { color: "#EFBDD9", nombre: "Rosas" },
    { color: "#FCF3A2", nombre: "Cítrico" },
    { color: "#C2F7FE", nombre: "Oriental" },
    { color: "#F2BA94", nombre: "Coco vainilla" },
    { color: "#9C7193", nombre: "Violeta verbena" },
    { color: "#D4ECDC", nombre: "Hierbas flores" },
    { color: "#FFF9FA", nombre: "Flores blancas" },
    { color: "#FF7D7D", nombre: "Flores silvestre" },
  ];

  useEffect(() => {
    const producto = productosData.productos.find(
      (producto) => producto.id === id
    );

    if (!productoInicial) {
      setProductoInicial(producto);
    }

    setProductoSeleccionado(producto);
  }, [id, productoInicial]);

  useEffect(() => {
    if (productoSeleccionado && productoSeleccionado.subcategoria) {
      const productosSubcategoria = productosData.productos.filter(
        (producto) =>
          producto.subcategoria === productoSeleccionado.subcategoria &&
          producto.id !== id
      );

      setProductosMismaSubcategoria(productosSubcategoria);
    }
  }, [productoSeleccionado, id]);

  const redirectToWhatsApp = () => {
    if (productoSeleccionado) {
      const whatsappLink = `https://api.whatsapp.com/send?phone=5492323617071&text=¡Hola!%20Me%20gustaría%20saber%20más%20sobre%20el%20producto%0A"${productoSeleccionado.nombre}".%20`;
      window.open(whatsappLink, "_blank");
    }
  };

  return (
    <div className="detalle-container">
      <div className="volver-productos">
        <Link to="/productos">Volver a Productos</Link>
      </div>
      {productoSeleccionado && (
        <div className="container__detalle">
          <div className="detalle-info">
            <img
              src={productoSeleccionado.imagen}
              alt={productoSeleccionado.nombre}
              className="detalle-imagen"
            />
            <div className="container__info">
              <h2>{productoSeleccionado.nombre}</h2>
              <p className="id-txt">Ref: #{productoSeleccionado.id}</p>
              {productoSeleccionado.descripcion && (
                <div className="descripcion">
                  <p>{productoSeleccionado.descripcion.split(".")[0]}.</p>
                  <p>{productoSeleccionado.descripcion.split(".")[1]}</p>
                  <p>{productoSeleccionado.descripcion.split(".")[2]}</p>
                </div>
              )}
              {productoSeleccionado.subcategoria &&
              productosMismaSubcategoria.length > 0 ? (
                <div className="productos-miniatura">
                  <h3>Modelos disponibles:</h3>
                  <div className="productos-miniatura-imagenes">
                    {productoInicial && (
                      <div
                        className="init"
                        onClick={() => setProductoSeleccionado(productoInicial)}
                      >
                        <img
                          src={productoInicial.imagen}
                          alt={productoInicial.nombre}
                        />
                      </div>
                    )}
                    {productosMismaSubcategoria.map((producto) => (
                      <div
                        key={producto.id}
                        className="container__img"
                        onClick={() => setProductoSeleccionado(producto)}
                      >
                        <img src={producto.imagen} alt={producto.nombre} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="colores-miniatura">
                  <h3>Aromas disponibles:</h3>
                  <div className="colores-miniatura-imagenes">
                    <div
                      className="cflex"
                      style={{
                        display: "flex",
                      }}
                    >
                      {colores.map((color, index) => (
                        <div
                          key={index}
                          className="container__color"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            margin: "0.5vw",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: color.color,
                            }}
                          ></div>
                          <p>{color.nombre.split(" ")[0]}</p>
                          <p>{color.nombre.split(" ")[1]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <button className="btn-comprar" onClick={redirectToWhatsApp}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetalleProducto;
