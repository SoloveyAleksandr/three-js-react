import { OrbitControls, PerspectiveCamera, Scroll, ScrollControls, SpotLight, useDepthBuffer } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useRef, useEffect, useState } from 'react';
import Plane from '../components/Plane';
import Interface from '../interface/Interface';
import { AnimSkin } from '../models/AnimSkin';
import { useControls } from 'leva';
import { useCharacterAnimations } from '../contexts/CharacterAnimations';
import { gsap } from 'gsap';
import TableModel from '../models/Table';
import { useLayoutEffect } from 'react';
import { Vector3 } from 'three';
import { Lamp } from '../components/Lamp';

const MainScene = () => {
  gsap.registerPlugin();

  const computerRef = useRef();
  const skinRef = useRef();
  const computerTL = useRef();

  const [mainIntensiti, setMainIntensity] = useState(2);

  const { animations, animationIndex } = useCharacterAnimations();

  const { rotationX, rotationY, rotationZ, positionX, positionY, positionZ, intensity, penumbra, angle, range, range2 } = useControls({
    rotationX: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.01,
    },
    rotationY: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.01,
    },
    rotationZ: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.01,
    },
    positionX: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.01,
    },
    positionY: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.01,
    },
    positionZ: {
      value: 0,
      min: -10,
      max: 10,
      step: 0.01,
    },
    intensity: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
    penumbra: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
    angle: {
      value: 0.1,
      min: 0,
      max: 1,
      step: 0.01,
    },
    range: {
      value: 10,
      min: 0,
      max: 100,
      step: 0.01,
    },
    range2: {
      value: 10,
      min: 0,
      max: 100,
      step: 0.01,
    }
  })

  useLayoutEffect(() => {

  }, [])

  return (
    <>
      <Canvas shadows>
        <ScrollControls pages={10} damping={0.25}>
          <PerspectiveCamera
            makeDefault
            position={[1.1, 1.2, 4.5]}
            fov={50}
            rotation={[-0.25, 0.2, 0]}
            castShadow={true} />

          {/* <OrbitControls enableZoom={false} /> */}

          <ambientLight intensity={0.2} />

          <color attach="background" args={['#101010']} />
          <fog attach="fog" args={['#101010', 4, 10]} />

          <Lamp position={[-1.6, 1.5, 0.4]} scale={[0.2, 0.2, 0.2]} />

          <group>
            <Suspense fallback={null}>

              <group ref={skinRef} position={[-1.5, -1, 0.4]} rotation={[0, 1, 0]}>
                <AnimSkin />
              </group>
              {/* компьютерный стол */}
              {/* <group ref={computerRef} position={[-1.31, -0.40, 0.75]} rotation={[0, -2.07, 0]} visible={true || animationIndex === 2}>
              <TableModel />
              <pointLight position={[-0.18, 0.45, -0.37]} distance={3} intensity={0.91} color="rgb(255, 225, 130)" />
            </group> */}
            </Suspense>
          </group>

          <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} />

          {/* <Scroll html>
            <Interface />
          </Scroll> */}

        </ScrollControls>
      </Canvas>

      <Interface />
    </>
  )
};

export default MainScene;
