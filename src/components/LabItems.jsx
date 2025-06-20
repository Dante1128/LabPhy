import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Labitems.css";

const labItems = [
  { name: "Balanza Digital", route: "balanza-digital", category: "categoria-1", image: "/image/balanza-digital.png" },
  { name: "Fuente de poder", route: "fuente-de-energia", category: "categoria-1", image: "/assets/images/pendulo.jpg" },
  { name: "Péndulo", route: "pendulo", category: "categoria-2", image: "/assets/images/pendulo.jpg" },
  { name: "Sensor Ultrasonico", route: "sensor-ultrasonico", category: "categoria-3", image: "/assets/images/balanza.jpg" },
  { name: "Vernier", route: "vernier", category: "categoria-3", image: "/assets/images/tubo_venturi.jpg" },
  { name: "Vernier Digital", route: "vernier-digital", category: "categoria-3", image: "/assets/images/tubo_venturi.jpg" },
];

const LabItems = () => {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  const filteredItems = labItems.filter(
    (item) =>
      item.category === category &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="contenidoitem">
      <div className="partearriba">
        <div className="volver"><a href="" className="flecha"><i class="material-icons icon" title="Izquierda">arrow_back</i></a></div>
        <div className="image"><img src="/image/logo.png" alt="" /></div>
      </div>
      
      <div className="barrabuscador">
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="buscador"
        />
      </div>
      <div className="titulo">

      
        <h2 className="letras">Elementos de laboratorio - {category}</h2>
      </div>
      <div className="labcontainer">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Link to={`/lab/${item.route}`} key={index} className="labitem">


              <div className="labcard">
                <img src={item.image} alt={item.name} className="labimage" />
                <button className="botone">{item.name} ➝</button>
              </div>
            </Link>
          ))
        ) : (
          <p className="parrafo">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default LabItems;
