import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/menu/Navbar";
import TopNavbar from "../src/components/menu/TopNavbar";
import CalendarDashboard from "../src/components/dashboard/CalendarDashboard";
import UsersPage from "./pages/UsersPage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarWidth = 250;

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
  <Navbar isOpen={isSidebarOpen} sidebarWidth={sidebarWidth} />
  <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
    <TopNavbar
      sidebarWidth={sidebarWidth}
      isSidebarOpen={isSidebarOpen}
      toggleSidebar={toggleSidebar}
    />
    <div
      style={{
        flex: 1,
        overflow: "auto", 
        marginTop: "40px",
        padding: "16px",
      }}
    >
      <Routes>
        <Route path="/" element={<CalendarDashboard />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </div>
  </div>
</div>

    </Router>
  );
}

export default App;
