// src/components/Laboratorios.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Laboratorios.css";

const laboratorios = [
  {
    name: "Colesión inelastica",
    route: "/laboratorio/1",
    description: "Física I",
    componentes: [
      "banco-dinamica",
      "lf-sensor-fotopuerta", 
      "interface-computadora-pasco"
    ],
    color: "from-blue-500 to-blue-700",
    icon: ""
  },
  {
    name: "Movimiento rectilineo uniforme", 
    route: "/laboratorio/2",
    description: "Fisica I",
    componentes: [
      "banco-dinamica",
      "interface-computadora-pasco"
    ],
    color: "from-green-500 to-green-700",
    icon: ""
  },
  {
    name: "Colesión lastica",
    route: "/laboratorio/3", 
    description: "Física I",
    componentes: [
      "distanciometro-laser",
      "calorimetro-mezcla",
      "lf-sensor-luz"
    ],
    color: "from-purple-500 to-purple-700",
    icon: ""
  }
];

const Laboratorios = () => {
  return (
    <div className="lab-container">
      {/* Header */}
      <div className="lab-header">
        <Link to="/lab-items" className="back-button" aria-label="Volver">
          <i className="material-icons">arrow_back</i>
        </Link>
        <div className="logo-container">
          <img src="/image/logo.png" alt="Logo LabPhy" className="logo" />
        </div>
      </div>

      {/* Title Section */}
      <div className="title-section">
        <h1 className="main-title">Laboratorios</h1>
        <p className="subtitle">Selecciona un laboratorio para explorar sus equipos</p>
      </div>

      {/* Labs Grid */}
      <div className="labs-grid">
        {laboratorios.map((lab, idx) => (
          <Link to={lab.route} key={idx} className="lab-link">
            <div className={`lab-card bg-gradient-to-br ${lab.color}`}>
              <div className="card-header">
                <span className="lab-icon">{lab.icon}</span>
                <div className="card-arrow">
                  <i className="material-icons">arrow_forward</i>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{lab.name}</h3>
                <p className="card-description">{lab.description}</p>
                
                <div className="equipment-count">
                  <i className="material-icons">science</i>
                  <span>{lab.componentes.length} equipos disponibles</span>
                </div>
              </div>

              <div className="card-shine"></div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Laboratorios;