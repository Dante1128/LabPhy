import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <article className="contenedor">
      <img src="/image/Ellipse2.png" alt="" className="elipseuno" />
      <div className="central">
        <img src="/image/logoprincipal.png" alt="" className="imagencentral" />
        <h1 className="letralogo">LabPhy</h1>
        <p className="parrafologo">
          Accede fácilmente a la información de 
          los equipos del laboratorio de física. 
          Aprende su funcionamiento, uso 
          correcto y disponibilidad para 
          optimizar tus prácticas y mejorar tu 
          comprensión de la física.
        </p>
        <Link to="/categories" className="button">
          Ir a Categorías
        </Link>
      </div>
      <img src="/image/Ellipse1.png" alt="" className="elipsedos" />
    </article>
  );
}
