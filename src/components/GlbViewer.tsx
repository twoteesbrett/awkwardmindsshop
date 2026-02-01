import { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Html, useProgress } from "@react-three/drei";
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

function LoadingOverlay({ label = "Loading 3D model…" }: { label?: string }) {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          minWidth: 220,
          padding: "14px 14px 12px",
          borderRadius: 14,
          background: "rgba(0,0,0,0.65)",
          color: "white",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 10 }}>{label}</div>

        <div
          style={{
            height: 8,
            borderRadius: 999,
            background: "rgba(255,255,255,0.18)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${Math.min(100, Math.max(0, progress)).toFixed(0)}%`,
              background: "rgba(255,255,255,0.85)",
              transition: "width 200ms ease",
            }}
          />
        </div>

        <div style={{ marginTop: 10, fontSize: 12, opacity: 0.85 }}>
          {Math.round(progress)}%
        </div>
      </div>
    </Html>
  );
}

type GlbViewerProps = {
  src: string;
  height?: number; // px
  scale?: number;
  className?: string;
};

export default function GlbViewer({ src, height = 500, scale = 1, className }: GlbViewerProps) {
  // Optional: preload when src changes (helps if user revisits or you show same model elsewhere)
  useEffect(() => {
    if (src) useGLTF.preload(src);
  }, [src]);

  // Optional: fade the overlay out smoothly once loaded (without popping)
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={className} style={{ height, width: "100%", position: "relative" }}>
      <Canvas shadows camera={{ position: [0, 1.2, 3], fov: 35 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[3, 5, 2]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense
          fallback={<LoadingOverlay />}
        >
          <Environment preset="city" />
          <Model url={src} scale={scale} />
          {/* When Model finishes loading, Suspense resolves; we can flip a flag via a tiny effect component */}
          <LoadComplete onDone={() => setLoaded(true)} />
        </Suspense>

        <OrbitControls enableDamping autoRotate autoRotateSpeed={0.5} enableZoom={false} />
      </Canvas>

      {/* If you want a *DOM* overlay too (eg to cover the canvas while it compiles), you can keep this.
          It fades out once loaded, but the Html overlay already covers the in-canvas loading state.
      */}
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: "transparent",
          }}
        />
      )}
    </div>
  );
}

function LoadComplete({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    onDone();
  }, [onDone]);
  return null;
}
