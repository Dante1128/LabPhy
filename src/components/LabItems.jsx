import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

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
    <div>
      <h2>Elementos de laboratorio - {category}</h2>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="lab-container">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Link to={`/lab/${item.route}`} key={index} className="lab-item">


              <div className="lab-card">
                <img src={item.image} alt={item.name} className="lab-image" />
                <button>{item.name} ➝</button>
              </div>
            </Link>
          ))
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default LabItems;
