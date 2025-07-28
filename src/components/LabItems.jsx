import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Labitems.css";

const labItems = [
  { name: "Balanza Digital", route: "balanza-digital", image: "/image/balanza-digital.png" },
  //{ name: "Fuente de poder", route: "fuente-de-energia", image: "/image/pendulo.jpg" },
  { name: "Sensor de Campo magnético", route: "sensor-campo-magnetico", image: "/image/2-Sensor-de-campo-magnetico.jpg" },
  { name: "Interface de computadora PASCO", route: "interface-computadora-pasco", image: "/image/3-Interfaz-de-computadora-PASCO.png" },
  { name: "Capacitor de placas paralelas", route: "capacitor-placas-paralelas", image: "/image/4-Capacitor-de-placas-paralelas.jpg" },
  //{ name: "Generador de Vapor", route: "generador-vapor", image: "/image/8-Generador -de-vapor.png" },
  { name: "Dilatómetro de reloj", route: "dilatometro-reloj", image: "/image/9-Dilatometro-de-reloj.jpg" },
  { name: "Termómetro digital", route: "termometro-digital", image: "/image/10-Termometro-digital.png" },
  { name: "Distanciómetro láser", route: "distanciometro-laser", image: "/image/11-Distaciometro-laser.jpg" },
  { name: "Calorímetro de mezcla", route: "calorimetro-mezcla", image: "/image/12-Calorimetro-de-mezcla.jpeg" },
  { name: "Sensor de luz L.F.", route: "lf-sensor-luz", image: "/image/15-LF-Sensor-de-luz.jpg" },
  { name: "Sensor de aceleración L.F.", route: "lf-sensor-aceleracion", image: "/image/16-LF-Sensor-de-aceleracion.jpg" },
  { name: "Sensor de carga L.F.", route: "lf-sensor-carga", image: "/image/18-Sensor-de-carga.jpg" },
  { name: "Sensor de fotopuerta ME", route: "lf-sensor-fotopuerta", image: "/image/19-LF-Sensor-de-fotopuerta-ME.jpg" },
  { name: "Sensor de voltaje L.F.", route: "lf-sensor-voltaje", image: "/image/20-LF-Sensor-de-voltaje.jpg" },
  { name: "Sensor de campo magnético L.F.", route: "lf-sensor-campo-magnetico", image: "/image/21-Sensor-magnetico.jpg" },
  { name: "Escala 64B L.F.", route: "lf-escala-64b", image: "/image/24-LF-Escala-64B.jpg" },
  { name: "Escala ME L.F.", route: "lf-escala-me", image: "/image/25-LF-Escala-ME.jpg" },
  { name: "Sensor de temperatura L.F.", route: "lf-sensor-temperatura", image: "/image/27-Sensor-de-Temperatura.png" },
  { name: "Amplificador de potencia 1", route: "amplificador-potencia1", image: "/image/29-amplificador-de-potencia_1.png" },
  { name: "Amplificador de potencia 2", route: "amplificador-potencia2", image: "/image/30-amplificador_de_protencia_2.png" },
  { name: "Amplificador de potencia 3", route: "amplificador-potencia3", image: "/image/31-amplificador-de-potencia_3.png" },
  { name: "Minilaboratorio solar metálico", route: "minilaboratorio-solar-metal", image: "/image/33-Minilaboratorio-Solar-de-metal.jpg" },
  //{ name: "Equipo de electricidad", route: "equipo-electricidad", image: "/image/34-multimetro-de-marca-MCP.webp" },
  { name: "Dinamómetro de 300KG", route: "dinamometro", image: "/image/36-Dinamometro-de-300Kg.webp" },
  { name: "Basic Electrometer", route: "basic-electrometer", image: "/image/37-Basic-Electrometer.jpeg" },
  { name: "Tacómetro Láser", route: "tacometro-laser", image: "/image/40-Tacometro-laser.jpg" },
  { name: "Lanzadores de Esferas PASCO ME6625", route: "lanzadores-esfereas", image: "/image/41-Lanzadores-de-Esferas-PASCO-ME6625.jpg" },
  { name: "Banco de Dinámica", route: "banco-dinamica", image: "/image/42-Banco-de-dinamica.jpg" },
  { name: "Balanza de precisión Marca AND", route: "balanza-precision-marca", image: "/image/43-Balanza-de-precision.jpg" },
  { name: "Reloj cronómetro blanco", route: "reloj-cronometro-blanco", image: "/image/45-Reloj-cronometro-blanco.webp" },
  { name: "Interfaz para sensores", route: "interfaz-sensores", image: "/image/46-Interfaz-para-sensores.jpeg" },
  { name: "Cronómetro de tiempo plástico blanco", route: "cronometro-tiempo-plastico", image: "/image/47-Cronometro-de-tiempo-plastico-blanco.jpg" },
  //{ name: "Sensor de movimiento L.F.", route: "lf-sensor-movimiento", image: "/images/sensor-movimiento.jpg" },
 // { name: "Balanza de platillo", route: "balanza-platillo", image: "/image/48-Balanza-de-platillo.jpg" }
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