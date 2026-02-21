import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function DummyScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#7c6af7" wireframe={false} />
      </mesh>
      <OrbitControls enableZoom={false} />
    </>
  );
}

export default function GamePage() {
  return (
    <div className="w-full h-full relative bg-[#0a0b10]">
      <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
        <DummyScene />
      </Canvas>
      <div className="absolute top-4 right-4 pointer-events-none">
        <span className="bg-primary/85 text-white text-[12px] font-bold tracking-widest px-[10px] py-1 rounded-[20px] backdrop-blur-[4px]">
          FLOOR 1
        </span>
      </div>
    </div>
  );
}
