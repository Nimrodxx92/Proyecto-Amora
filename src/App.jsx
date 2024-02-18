import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Productos from "./components/Productos";
import Aromas from "./components/Aromas";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/aromas" element={<Aromas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
