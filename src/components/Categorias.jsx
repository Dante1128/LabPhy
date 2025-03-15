import React from "react";
import { Link } from "react-router-dom";


export default function Categories() {
  return (
    <div className="container">
      <h2>Categorías</h2>
      <ul>
        <li><Link to="/lab-items">Elementos de Laboratorio</Link></li>
        <li>Próximamente más...</li>
      </ul>
      <Link to="/" className="button">Volver al Inicio</Link>
    </div>
  );
}
