import { OrbitControls, Sky, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Box from '../components/Box';
import Plane from '../components/Plane';
import { Car } from '../models/Car';

const MainScene = () => {
  return (
    <Canvas camera={{ position: [0, 3, 9], rotation: [0, 0, 0] }}>
      {/* <OrbitControls /> */}
      <color attach={'background'} args={['rgb(119, 227, 248)']} />
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow />
      <Suspense fallback={null}>
        <Car position={[1, -1, 0]} />
      </Suspense>

      <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} />

      <Text
        color={'red'}
        fontSize={1.5}
        font={'https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap'}
        position={[1, -0.8, 4]}>
        HELLO
      </Text>
    </Canvas>
  )
};

export default MainScene;
