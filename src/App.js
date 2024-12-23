import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/menu/Navbar";
import CalendarDashboard from "../src/components/dashboard/CalendarDashboard";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Menu Lateral e Barra de Topo */}
        <Navbar />
        {/* Conteúdo Principal */}
        <div style={{ flex: 1, overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<CalendarDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
