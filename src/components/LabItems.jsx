import { useState } from "react";
import { Link } from "react-router-dom";

const labItems = [
  { name: "Fuente de poder", route: "fuente-poder", image: "/assets/images/fuente_poder.jpg" },
  { name: "Péndulo", route: "pendulo", image: "/assets/images/pendulo.jpg" },
  { name: "Balanza Analítica", route: "balanza-analitica", image: "/assets/images/balanza.jpg" },
  { name: "Tubo de Venturi", route: "tubo-venturi", image: "/assets/images/tubo_venturi.jpg" },
  
  
];

const LabItems = () => {
  const [search, setSearch] = useState("");

  // Filtrar elementos según la búsqueda
  const filteredItems = labItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>ELEMENTOS DE LABORATORIO</h2>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="lab-container"> {/* Contenedor sin scroll visible */}
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
