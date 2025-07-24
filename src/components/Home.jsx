import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <img src="/image/pantallalogo.png" className="imagefondo" alt="Fondo" />
      <div className="central">
        <img src="/image/logoprincipal.png" alt="Logo LabPhy" className="imagencentral" />
        <h1 className="letralogo">LabPhy</h1>
        <p className="parrafologo">
          Accede fácilmente a la información de 
          los equipos del laboratorio de física. 
          Aprende su funcionamiento, uso 
          correcto y disponibilidad para 
          optimizar tus prácticas y mejorar tu 
          comprensión de la física.
        </p>
        <Link to="/lab-items" className="btnsigui">
          Buscar Equipos <i className="material-icons">search</i>
        </Link>
      </div>
    </div>
  );
}