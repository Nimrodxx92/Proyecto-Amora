import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productosData from "../json/productos.json";

const DetalleProducto = () => {
  const { id } = useParams();
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
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
    { color: "#D4ECDC", nombre: "Hierbas y flores" },
    { color: "#FFF9FA", nombre: "Flores blancas" },
    { color: "#FF7D7D", nombre: "Flores silvestre" },
  ];

  useEffect(() => {
    const producto = productosData.productos.find(
      (producto) => producto.id === id
    );
    setProductoSeleccionado(producto);
  }, [id]);

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
      const whatsappLink = `https://api.whatsapp.com/send?phone=541130596616&text=¡Hola!%20Me%20gustaría%20saber%20más%20sobre%20el%20producto%0A"${productoSeleccionado.nombre}".%20`;
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
          <img
            src={productoSeleccionado.imagen}
            alt={productoSeleccionado.nombre}
            className="detalle-imagen"
          />
          <div className="container__info">
            <div>
              <h2>{productoSeleccionado.nombre}</h2>
              <p className="id-txt">Ref: #{productoSeleccionado.id}</p>
            </div>
            {productoSeleccionado.descripcion && (
              <>
                <p>{productoSeleccionado.descripcion.split(".")[0]}.</p>
                <p>{productoSeleccionado.descripcion.split(".")[1]}</p>
                <p>{productoSeleccionado.descripcion.split(".")[2]}</p>
              </>
            )}
            {productoSeleccionado.subcategoria &&
            productosMismaSubcategoria.length > 0 ? (
              <div className="productos-miniatura">
                <h3>Modelos disponibles:</h3>
                <div className="productos-miniatura-imagenes">
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
                  {colores.map((color, index) => (
                    <div
                      key={index}
                      className="container__color"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "60px",
                        margin: "5px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: color.color,
                          width: "30px",
                          height: "30px",
                          border: "1px solid black",
                          marginBottom: "5px",
                        }}
                      ></div>
                      <p style={{ margin: "0" }}>
                        {color.nombre.split(" ")[0]}
                      </p>
                      <p style={{ margin: "0" }}>
                        {color.nombre.split(" ")[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <button className="btn-comprar" onClick={redirectToWhatsApp}>
              Comprar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetalleProducto;
