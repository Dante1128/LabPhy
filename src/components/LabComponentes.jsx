// src/components/LabComponentes.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import labDetails from "../data/labDetails.json";
import "./Labitems.css";

const laboratorios = [
  {
    name: "Colesión inelastica",
    route: "/laboratorio/1",
    componentes: [
      "banco-dinamica",
      "lf-sensor-fotopuerta", 
      "interface-computadora-pasco"
    ]
  },
  {
    name: "Movimiento rectilineo uniforme",
    route: "/laboratorio/2",
    componentes: [
      "banco-dinamica",
      "interface-computadora-pasco"
    ]
    },
  {
    name: "Colesión lastica",
    route: "/laboratorio/3",
    componentes: [
       "banco-dinamica",
      "lf-sensor-fotopuerta", 
      "interface-computadora-pasco",
      "distanciometro-laser"
    ]
  }
];

const LabComponentes = () => {
  const { id } = useParams();
  const lab = laboratorios[parseInt(id, 10) - 1];

  if (!lab) return <h2>Laboratorio no encontrado</h2>;

  return (
    <div className="contenidoitem">
      <div className="partearriba">
        <Link to="/laboratorios" className="flecha" aria-label="Volver">
          <i className="material-icons icon">arrow_back</i>
        </Link>
        <div className="image">
          <img src="/image/logo.png" alt="Logo LabPhy" />
        </div>
      </div>
      <h2 className="letras">{lab.name}</h2>
      <div className="labcontainer">
        {lab.componentes.map((comp, idx) => {
          const detail = labDetails[comp];
          return (
            <Link to={`/lab/${comp}`} key={idx} className="labitem">
              <div className="labcard">
                {detail && detail.model ? (
                  <img
                    src={
                      // Buscar imagen igual que en LabItems
                      comp === "balanza-digital" ? "/image/balanza-digital.png" :
                      comp === "sensor-campo-magnetico" ? "/image/2-Sensor-de-campo-magnetico.jpg" :
                      comp === "interface-computadora-pasco" ? "/image/3-Interfaz-de-computadora-PASCO.png" :
                      comp === "capacitor-placas-paralelas" ? "/image/4-Capacitor-de-placas-paralelas.jpg" :
                      comp === "dilatometro-reloj" ? "/image/9-Dilatometro-de-reloj.jpg" :
                      comp === "termometro-digital" ? "/image/10-Termometro-digital.png" :
                      comp === "distanciometro-laser" ? "/image/11-Distaciometro-laser.jpg" :
                      comp === "calorimetro-mezcla" ? "/image/12-Calorimetro-de-mezcla.jpeg" :
                      comp === "lf-sensor-luz" ? "/image/15-LF-Sensor-de-luz.jpg" :
                      undefined
                    }
                    alt={detail.title}
                    className="labimage"
                  />
                ) : null}
                <div className="cardcontent">
                  <h3 className="cardtitle">{detail ? detail.title : comp.replace(/-/g, ' ')}</h3>
                  <span className="cardarrow">➝</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LabComponentes;
