import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type ModelProps = {
  url: string;
  scale?: number;
};

function Model({ url, scale = 1 }: ModelProps) {
  const gltf = useGLTF(url);

  // Create a fresh copy for THIS canvas instance
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);

  // Apply mesh settings on the clone (not the cached original)
  useMemo(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} scale={scale} />;
}

type GlbViewerProps = {
  src: string;
  height?: number; // px
  scale?: number;
  className?: string;
};

export default function GlbViewer({ src, height = 500, scale = 1, className }: GlbViewerProps) {
  return (
    <div className={className} style={{ height, width: "100%" }}>
      <Canvas shadows camera={{ position: [0, 1.2, 3], fov: 35 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[3, 5, 2]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={null}>
          <Environment preset="city" />
          <Model url={src} scale={scale} />
        </Suspense>

        <OrbitControls enableDamping autoRotate autoRotateSpeed={0.5} enableZoom={false} />
      </Canvas>
    </div>
  );
}
