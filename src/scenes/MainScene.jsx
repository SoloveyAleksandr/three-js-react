import { OrbitControls, PerspectiveCamera, Sky, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Plane from '../components/Plane';
import { MySkin } from '../models/MySkin';

const MainScene = () => {
  return (
    <Canvas shadows>
      <PerspectiveCamera
        makeDefault
        position={[0.9, 1, 3.5]}
        fov={50}
        rotation={[-0.3, 0.3, 0]}
        castShadow={true} />

      <ambientLight />
      <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />

      <group position={[0, -1, 0]}>
        <Suspense fallback={null}>
          <MySkin />
        </Suspense>
      </group>

      <Plane rotation={[-0.5 * Math.PI, 0, 0]}  position={[0, -1, 0]} />
    </Canvas>
  )
};

export default MainScene;
