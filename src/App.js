import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/components/login/Login';
import Navbar from '../src/components/menu/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para Login */}
        <Route path="/" element={<Login />} />

        {/* Rota para o Menu Principal */}
        <Route path="/menu" element={<Navbar />} />

        {/* Exemplo de rota não encontrada (404) */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
