import { useParams, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import labDetails from "../data/labDetails.json";
import styles from "./LabDetail.module.css";

const ModelViewer = ({ modelPath, setIsLoading }) => {
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    if (scene) setIsLoading(false);
  }, [scene, setIsLoading]);

  return <primitive object={scene} scale={7} position={[-1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />;
};

const LabDetail = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  if (!itemId) return <h2>Elemento no encontrado</h2>;

  const itemIdLower = itemId.toLowerCase();
  const item = labDetails[itemIdLower];
  const [isLoading, setIsLoading] = useState(true);

  if (!item) {
    return <h2 className="parrafo">Elemento no encontrado</h2>;
  }

  return (
    <div className={styles.contenido}>
      <div className={styles.partearriba}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          <i className="material-icons icon" title="Volver">arrow_back</i>
        </button>
        <div className={styles.logoContainer}>
          <img src="/image/logo.png" alt="Logo" className={styles.logo} />
        </div>
      </div>

      <h2 className={styles.titulo}>{item.title}</h2>

      <div className={styles.mainContent}>
        <div className={styles.canvasContainer}>
          {/* Mensaje de carga */}
          {isLoading && (
            <div className={styles.loadingOverlay}>
              <p className={styles.loadingMessage}>Cargando componente...</p>
              <div className={styles.loader}></div>
            </div>
          )}

          <Canvas className={styles.canvas}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <Suspense fallback={null}>
              <ModelViewer modelPath={item.model} setIsLoading={setIsLoading} />
            </Suspense>

            <OrbitControls />
          </Canvas>
        </div>

        <div className={styles.contentSide}>
          <p className={styles.description}>{item.description}</p>

          <div className={styles.videoLinkContainer}>
            <a 
              href={item.video} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.videoLink}
            >
              <img src="/image/image.png" alt="Ver video" className={styles.videoIcon} />
              <span>Ver Video en YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDetail;