import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Categorias from "./components/Categorias";  // Nombre consistente
import LabItems from "./components/LabItems";
import LabDetail from "./components/LabDetail";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categorias />} />
        <Route path="/lab-items/:category" element={<LabItems />} />

        <Route path="/lab/:itemId" element={<LabDetail />} />
      </Routes>
    </Router>
  );
}
