import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html, useProgress } from "@react-three/drei";

// ==========================================
// 1. Fallback Loading Spinner & Progress
// ==========================================
const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            border: "4px solid rgba(255, 255, 255, 0.1)",
            borderTop: "4px solid #915EFF",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 16,
            letterSpacing: "1px",
          }}
        >
          {progress.toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

// ==========================================
// 2. 3D Computer Model & Lighting
// ==========================================
interface ComputersProps {
  isMobile: boolean;
}

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  // Loads from public/desktop_pc/scene.gltf
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Ambient / Hemisphere Lighting */}
      <hemisphereLight intensity={0.4} groundColor="#111111" />
      {/* Directional Key Light */}
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      {/* Point Light */}
      <pointLight intensity={1.5} position={[0, 1, 0]} />
      {/* Spotlight for directional shadows */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      {/* 3D Model Scene */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.8 : 0.9}
        position={isMobile ? [0, -0.25, -2.0] : [0, -0.2, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Preload the gltf asset
useGLTF.preload("/desktop_pc/scene.gltf");

// ==========================================
// 3. Canvas Container Component
// ==========================================
export const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, -0.2, 0]}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
