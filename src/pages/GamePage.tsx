import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import styles from './GamePage.module.css'

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
    )
}

export default function GamePage() {
    return (
        <div className={styles.page}>
            <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
                <DummyScene />
            </Canvas>
            <div className={styles.hud}>
                <span className={styles.badge}>FLOOR 1</span>
            </div>
        </div>
    )
}
