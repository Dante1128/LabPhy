import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LabItems from "./components/LabItems";
import LabDetail from "./components/LabDetail";
import Laboratorios from "./components/Laboratorios";
import LabComponentes from "./components/LabComponentes";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab-items" element={<LabItems />} />
        <Route path="/laboratorios" element={<Laboratorios />} />
        <Route path="/laboratorio/:id" element={<LabComponentes />} />
        <Route path="/lab/:itemId" element={<LabDetail />} />
      </Routes>
    </Router>
  );
}