import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Labitems.css";

const labItems = [
  { name: "Balanza Digital", route: "balanza-digital", image: "/image/balanza-digital.png" },
  { name: "Fuente de poder", route: "fuente-de-energia", image: "/assets/images/pendulo.jpg" },
  { name: "Péndulo", route: "pendulo", image: "/assets/images/pendulo.jpg" },
  { name: "Sensor Ultrasonico", route: "sensor-ultrasonico", image: "/assets/images/balanza.jpg" },
  { name: "Vernier", route: "vernier", image: "/assets/images/tubo_venturi.jpg" },
  { name: "Vernier Digital", route: "vernier-digital", image: "/assets/images/tubo_venturi.jpg" },
];

const LabItems = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Filtrar solo por búsqueda, sin categorías
  const filteredItems = labItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="contenidoitem">
      <div className="partearriba">
        <button onClick={() => navigate(-1)} className="flecha" aria-label="Volver">
          <i className="material-icons icon">arrow_back</i>
        </button>
        <div className="image">
          <img src="/image/logo.png" alt="Logo LabPhy" />
        </div>
        <div className="spacer"></div> {/* Para centrar el logo */}
      </div>
      
      <div className="barrabuscador">
        <input
          type="text"
          placeholder="Buscar equipo de laboratorio..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="buscador"
        />
      </div>
      
      <div className="titulo">
        <h2 className="letras">
          {search ? `Resultados para "${search}"` : "Equipos de Laboratorio"}
        </h2>
      </div>
      
      <div className="labcontainer">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Link to={`/lab/${item.route}`} key={index} className="labitem">
              <div className="labcard">
                <img src={item.image} alt={item.name} className="labimage" />
                <div className="cardcontent">
                  <h3 className="cardtitle">{item.name}</h3>
                  <span className="cardarrow">➝</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="noresults">
            <p className="parrafo">
              {search ? "No se encontraron equipos con ese nombre." : "Cargando equipos..."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LabItems;