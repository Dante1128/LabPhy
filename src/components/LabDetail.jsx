import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react"; 

const labDetails = {
  "fuente-poder": {
    title: "Fuente de poder",
    description: "Proporciona voltaje y corriente controlados...",
    model: "/models/modelo.glb",
    video: "https://www.youtube.com/watch?v=XXXXXX",
  },
};

const ModelViewer = ({ modelPath }) => {
    const { scene } = useGLTF(modelPath);
    
    return (
      <primitive 
        object={scene} 
        scale={0.9}      // Ajusta la escala
        position={[0, -1, 0]}  // Baja el modelo para centrarlo
        rotation={[0, -Math.PI / 2, 0]}
        // Rota el modelo 180° si es necesario
      />
    );
  };

const LabDetail = () => {
    console.log("🚀 LabDetail se está renderizando");
    
    const { itemId } = useParams();
    console.log("🔹 itemId recibido:", itemId);
  
    const item = labDetails[itemId];
    console.log("🔸 item encontrado en labDetails:", item);
  
  if (!item) {
    return <h2>Elemento no encontrado</h2>;
  }

  return (
    <div>
      <h2>{item.title}</h2>
     

      {/* Visor 3D */}
      <Canvas style={{ height: "300px" }}>
        <ambientLight intensity={0.5} />  {/* Luz ambiental */}
        <directionalLight position={[5, 5, 5]} intensity={1} />  {/* Luz direccional */}
            <ModelViewer modelPath={item.model} />
            <OrbitControls />
       
        </Canvas>


      {/* Video tutorial */}
      <p>{item.description}</p>
      <a href={item.video} target="_blank" rel="noopener noreferrer">
        <img src="/public/image/image.png" alt="" /> Ver Video en YouTube
      </a>
    </div>
  );
};

export default LabDetail;
