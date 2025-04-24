import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ManagerModelProps {
  modelPath: string;
}

const ManagerModel = ({ modelPath }: ManagerModelProps) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  return (
    <group position={[0, -1, 0]}>
      <primitive object={gltf.scene} scale={[0.4, 0.4, 0.4]} />
    </group>
  );
};

const Manager = () => {
  const modelPath = '/manager.glb'; // note: /public prefix not needed

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Canvas style={{ width: '400px', height: '400px' }} camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <ManagerModel modelPath={modelPath} />
        <OrbitControls   enableZoom={false} />

      </Canvas>
    </div>
  );
};

export default Manager;
