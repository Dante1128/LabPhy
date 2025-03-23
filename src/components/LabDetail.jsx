import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";
import labDetails from "../data/labDetails.json";
import styles from "./LabDetail.module.css";

const ModelViewer = ({ modelPath, setIsLoading }) => {
  const { scene } = useGLTF(modelPath, true);

  // Ocultar "Cargando" cuando el modelo se ha cargado
  useState(() => {
    setIsLoading(false);
  }, []);

  return <primitive object={scene} scale={0.9} position={[0, -1, 0]} rotation={[0, -Math.PI / 2, 0]} />;
};

const LabDetail = () => {
  const { itemId } = useParams();
  const itemIdLower = itemId.toLowerCase();
  const item = labDetails[itemIdLower];

  const [isLoading, setIsLoading] = useState(true);

  if (!item) {
    return <h2>Elemento no encontrado</h2>;
  }

  return (
    <div>
      <h2>{item.title}</h2>

      <div style={{ position: "relative" }}>
        {isLoading && <p className={styles.loader}>Cargando el componente...</p>}

        <Canvas style={{ height: "300px" }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />

          <Suspense fallback={<p className={styles.loader}>Cargando modelo 3D...</p>}>
            <ModelViewer modelPath={item.model} setIsLoading={setIsLoading} />
          </Suspense>

          <OrbitControls />
        </Canvas>
      </div>

      <p className={styles["centered-text"]}>{item.description}</p>

      <a href={item.video} target="_blank" rel="noopener noreferrer">
        <img src="/image/image.png" alt="Ver video" /> Ver Video en YouTube
      </a>
    </div>
  );
};

export default LabDetail;
