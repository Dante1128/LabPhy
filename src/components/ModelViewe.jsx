import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ModelViewer = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  return (
    <Canvas style={{ height: "400px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <OrbitControls />
      <primitive object={scene} scale={1.5} />
    </Canvas>
  );
};

export default ModelViewer;
