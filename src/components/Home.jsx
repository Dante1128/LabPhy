import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

export default function Home() {
  return (
    
    <article class="contenedor">
      <img src="/image/Ellipse2.png" alt="" class="elipseuno"></img>
      <div class="central">
        <img src="/image/logoprincipal.png" alt="" class="imagencentral"/>
        <h1 class="letralogo">LabPhy</h1>
        <p class="parrafologo">
          Accede facilmente a la informacion de 
          los equipos del laboratorio de fisica. 
          Aprende su funcionamiento, uso 
          correcto y disponibilidad para 
          optimizar tus practicas y mejorar tu 
          comprension de la fisica.
        </p>
        <Link to="/lab-items" className="button" >
          Ir a Categorías
        </Link>
      </div>
      <img src="/image/Ellipse1.png" alt="" class="elipsedos"></img>

    </article>
  );
}
