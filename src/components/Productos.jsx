import { useState } from "react";
import productosData from "../json/productos.json";

const Productos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [mostrarCategorias, setMostrarCategorias] = useState(true);

  const categorias = [
    ...new Set(productosData.productos.map((producto) => producto.categoria)),
  ];

  const handleCategoriaChange = (categoria) => {
    setFiltroCategoria(categoria);
  };

  const handleToggleCategorias = () => {
    setMostrarCategorias(!mostrarCategorias);
  };

  const productosFiltrados = filtroCategoria
    ? productosData.productos.filter(
        (producto) => producto.categoria === filtroCategoria
      )
    : productosData.productos;

  return (
    <>
      <section className="container__products">
        <div className="filter__container">
          <h2 onClick={handleToggleCategorias}>
            Categorías {mostrarCategorias ? "▲" : "▼"}
          </h2>
          {mostrarCategorias && (
            <ul className="text__category">
              <li key="todos" onClick={() => handleCategoriaChange("")}>
                Todos
              </li>
              {categorias.map((categoria, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoriaChange(categoria)}
                >
                  {categoria}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="container__cards">
          {productosFiltrados.map((producto) => (
            <div key={producto.id} className="products__items">
              {producto.imagen && (
                <img src={producto.imagen} alt={producto.nombre} />
              )}
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Productos;
