import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
  <body>
    <img src="/image/pantallalogo.png" className="imagefondo" />
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
      <Link to="/categories" className="btnsigui">
        Ir a Categorías <i class="material-icons" >arrow_forward</i>
      </Link>
    </div>
  </body>  
  );
}
