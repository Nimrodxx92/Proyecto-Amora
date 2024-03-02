import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productosData from "../json/productos.json";

const DetalleProducto = () => {
  const { id } = useParams();
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productosMismaSubcategoria, setProductosMismaSubcategoria] = useState(
    []
  );

  useEffect(() => {
    const producto = productosData.productos.find(
      (producto) => producto.id === id
    );
    setProductoSeleccionado(producto);
  }, [id]);

  useEffect(() => {
    if (productoSeleccionado) {
      const productosSubcategoria = productosData.productos.filter(
        (producto) =>
          producto.subcategoria === productoSeleccionado.subcategoria &&
          producto.id !== id
      );
      setProductosMismaSubcategoria(productosSubcategoria);
    }
  }, [productoSeleccionado, id]);

  const cambiarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  return (
    <div className="detalle-container">
      {productoSeleccionado && (
        <div className="container__detalle">
          <img
            src={productoSeleccionado.imagen}
            alt={productoSeleccionado.nombre}
            className="detalle-imagen"
          />
          <div className="container__info">
            <h2>{productoSeleccionado.nombre}</h2>
            <p>Ref: {productoSeleccionado.id}</p>
            <p>Subcategoría: {productoSeleccionado.subcategoria}</p>
            {productoSeleccionado.descripcion && (
              <>
                <p>{productoSeleccionado.descripcion.split(".")[0]}.</p>
                <p>{productoSeleccionado.descripcion.split(".")[1]}</p>
                <p>{productoSeleccionado.descripcion.split(".")[2]}</p>
              </>
            )}
            <button>Comprar</button>
            <div className="productos-miniatura">
              <h3>Modelos disponibles:</h3>
              <div className="productos-miniatura-imagenes">
                {productosMismaSubcategoria.map((producto) => (
                  <div
                    key={producto.id}
                    className="container__img"
                    onClick={() => cambiarProducto(producto)}
                  >
                    <img src={producto.imagen} alt={producto.nombre} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetalleProducto;
