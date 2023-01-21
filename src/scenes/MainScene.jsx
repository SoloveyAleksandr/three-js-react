import { Cloud, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import Particles from '../components/Particles';
import Plane from '../components/Plane';
import Interface from '../interface/Interface';
import { AnimSkin } from '../models/AnimSkin';

const MainScene = () => {
  const mouse = useRef([0, 0])
  return (
    <>
      <Canvas shadows>
        <PerspectiveCamera
          makeDefault
          position={[0.9, 1, 3.5]}
          fov={50}
          rotation={[-0.3, 0.3, 0]}
          castShadow={true} />

        {/* <OrbitControls /> */}

        {/* <ambientLight intensity={0.3} color={'rgb(253, 255, 225)'} /> */}

        <directionalLight color={'rgb(230, 230, 230)'} intensity={2} position={[1, 5, 2]} castShadow shadow-mapSize={1024} />

        <color attach="background" args={['#101010']} />
        <fog attach="fog" args={['#101010', 10, 20]} />

        <group position={[-1.5, -1, 0.4]} rotation={[0, 1, 0]}>
          <Suspense fallback={null}>
            <AnimSkin />
            <group position={[2, 0, 2]}>
              <Particles count={500} mouse={mouse} />
            </group>
          </Suspense>
        </group>

        <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} />

      </Canvas>

      <Interface />
    </>
  )
};

export default MainScene;
