import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="container">
      <h1>Bienvenido a LabPhy</h1>
      <p>Explora los elementos de laboratorio.</p>
      <Link to="/lab-items" className="button">
        Ir a Categorías
      </Link>
    </div>
  );
}
