import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productosData from "../json/productos.json";
import DetalleProducto from "../components/DetalleProductos";

const Productos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productosPorCategoria, setProductosPorCategoria] = useState([]);

  const handleCategoriaClick = (categoria) => {
    setFiltroCategoria(categoria);
    setProductoSeleccionado(null);
  };

  const handleProductoClick = (producto) => {
    setProductoSeleccionado(producto);
  };

  const categorias = [
    "Velas",
    "Difusores",
    "Bruma Textil",
    "Jabón Líquido",
    "Flores arómaticas",
    "Esencias",
    "Accesorios",
    "Kit Personalizados",
  ];

  let productosFiltrados = productosData.productos;

  if (filtroCategoria) {
    productosFiltrados = productosData.productos.filter(
      (producto) => producto.categoria === filtroCategoria
    );
  }

  const subcategoriasUnicas = [
    ...new Set(productosFiltrados.map((producto) => producto.subcategoria)),
  ];

  const productosPorSubcategoria = subcategoriasUnicas.map((subcategoria) => {
    const productoSubcategoria = productosFiltrados.find(
      (producto) => producto.subcategoria === subcategoria
    );
    return productoSubcategoria;
  });

  useEffect(() => {
    const categorias = [
      "Velas",
      "Difusores",
      "Bruma Textil",
      "Jabón Líquido",
      "Flores arómaticas",
      "Esencias",
      "Accesorios",
      "Kit Personalizados",
    ];

    const productosPorCategoria = categorias.map((categoria) => {
      const productosCategoria = productosData.productos.find(
        (producto) => producto.categoria === categoria
      );
      return productosCategoria;
    });

    setProductosPorCategoria(productosPorCategoria);
  }, []);

  return (
    <section className="container__products">
      <div className="filter__container">
        <h2>Categorías</h2>
        <ul className="text__category">
          {categorias.map((categoria, index) => (
            <li key={index} onClick={() => handleCategoriaClick(categoria)}>
              {categoria}
            </li>
          ))}
        </ul>
      </div>
      {filtroCategoria && (
        <div className="container__cards">
          {productosPorSubcategoria.map((producto, index) => (
            <div
              className="products__items"
              key={index}
              onClick={() => handleProductoClick(producto)}
            >
              {producto && (
                <Link to={`/productos/${producto.id}`}>
                  <img src={producto.imagen} alt={producto.nombre} />
                  <p>{producto.nombre}</p>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
      {!filtroCategoria && productosPorCategoria.length > 0 && (
        <div className="container__cards">
          {productosPorCategoria.map((producto, index) => (
            <div
              className="products__items"
              key={index}
              onClick={() => handleProductoClick(producto)}
            >
              {producto && (
                <Link to={`/productos/${producto.id}`}>
                  <img src={producto.imagen} alt={producto.nombre} />
                  <p>{producto.categoria}</p>
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
      <div>
        {productoSeleccionado && (
          <DetalleProducto producto={productoSeleccionado} />
        )}
      </div>
    </section>
  );
};

export default Productos;
