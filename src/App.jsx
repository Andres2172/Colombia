import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from "./Componentes/Home";
import Favoritos from "./Componentes/Favoritos";
import Mapa from "./Componentes/Mapa";
import Informativa from "./Componentes/Informativa";
import Detalles from "./Componentes/Detalles";

function App() {

  return (
    <>
      <Router>
        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/mapa">Mapa</Link>
          <Link to="/favoritos">Favoritos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informativa" element={<Informativa />} />
          <Route path="/mapa" element={<Mapa />} /> {/* Cambié a minúsculas */}
          <Route path="/favoritos" element={<Favoritos />} /> {/* Cambié a minúsculas */}
          <Route path="/detalles/:depto/:municipio" element={<Detalles />} /> {/* Cambié "Detalles" a minúsculas para ser consistente */}
          
          {/* Redirección en caso de ruta no encontrada (opcional) */}
          <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirección a la página de inicio */}
        </Routes>
      </Router>
    </>
  )
}

export default App;
