import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productosData from "../json/productos.json";
import DetalleProducto from "../components/DetalleProductos";

const Productos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productosPorCategoria, setProductosPorCategoria] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleCategoriaClick = (categoria) => {
    setFiltroCategoria(categoria);
    setProductoSeleccionado(null);
    setCategoriaSeleccionada(categoria);
  };

  const handleProductoClick = (categoria) => {
    setFiltroCategoria(categoria);
  };

  const categorias = [
    "Velas",
    "Difusores",
    "Bruma Textil",
    "Jabón Líquido",
    "Flores aromáticas",
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
      "Flores aromáticas",
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
            <li
              key={index}
              onClick={() => handleCategoriaClick(categoria)}
              className={categoria === categoriaSeleccionada ? "selected" : ""}
            >
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
              onClick={() => handleProductoClick(producto.categoria)}
            >
              {producto && (
                <Link to={`/productos/${producto.id}`}>
                  <img src={producto.imagen} alt={producto.nombre} />
                  <p>{producto.subcategoria}</p>
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
              onClick={() => handleProductoClick(producto.categoria)}
            >
              {producto && (
                <div>
                  <img src={producto.imagen} alt={producto.nombre} />
                  <p>{producto.categoria}</p>
                </div>
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
