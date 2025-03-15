import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categorias";
import LabItems from "./components/LabItems";
import LabDetail from "./components/LabDetail";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/lab-items" element={<LabItems />} />
        <Route path="/lab/:itemId" element={<LabDetail />} />

      </Routes>
    </Router>
  );
}
