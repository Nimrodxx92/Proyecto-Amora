import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from "./Navbars";
import Home from "./components/Home";
import Productos from "./components/Productos";
import Aromas from "./components/Aromas";
import Nosotras from "./components/Nosotras";
import Contacto from "./components/Contacto";
import DetalleProducto from "./components/DetalleProductos";
import "./scss/index.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
        <Route path="/aromas" element={<Aromas />} />
        <Route path="/nosotras" element={<Nosotras />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
