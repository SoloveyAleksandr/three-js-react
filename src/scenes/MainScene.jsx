import { OrbitControls, PerspectiveCamera, SpotLight } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useEffect, useState } from 'react';
import Plane from '../components/Plane';
import Interface from '../interface/Interface';
import { AnimSkin } from '../models/AnimSkin';
import { useControls } from 'leva';
import { useCharacterAnimations } from '../contexts/CharacterAnimations';
import { gsap } from 'gsap';
import TableModel from '../models/Table';
import { useLayoutEffect } from 'react';

const MainScene = () => {
  gsap.registerPlugin();

  const lightRef = useRef(null);
  const computerRef = useRef(null);

  const [mainIntensiti, setMainIntensity] = useState(2);

  const { animations, animationIndex } = useCharacterAnimations();

  const { rotationX, rotationY, rotationZ, positionX, positionY, positionZ, intensity, penumbra, angle } = useControls({
    rotationX: {
      value: 0,
      min: -1,
      max: 1,
      step: 0.01,
    },
    rotationY: {
      value: 0,
      min: -1,
      max: 1,
      step: 0.01,
    },
    rotationZ: {
      value: 0,
      min: -1,
      max: 1,
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
    }
  })

  useEffect(() => {

    return () => {
      gsap.to(lightRef.current, {
        intensity: mainIntensiti,
        duration: 1,
      })

    }
  }, [animationIndex])

  useLayoutEffect(() => {
    if (computerRef.current) {
      if (animations[animationIndex] === 'seatIdle') {
        setMainIntensity(0.1);
        gsap.from(computerRef.current.position, {
          x: 6,
          z: 6,
          duration: 3,
        })
      } else {
        setMainIntensity(2);
        gsap.to(computerRef.current.position, {
          x: 6,
          z: 6,
          duration: 3,
        })
      }
    }
  }, [animationIndex])

  return (
    <>
      <Canvas shadows>
        <PerspectiveCamera
          makeDefault
          position={[0.9, 1, 3.5]}
          fov={50}
          rotation={[-0.3, 0.3, 0]}
          castShadow={true} />

        <OrbitControls />

        <ambientLight intensity={0.1} color={'#fff'} />

        <directionalLight ref={lightRef} position={[1, 5, 2]} color={'rgb(230, 230, 230)'} intensity={2} castShadow shadow-mapSize={1024} />


        <color attach="background" args={['#101010']} />
        <fog attach="fog" args={['#101010', 10, 20]} />

        <group position={[-1.5, -1, 0.4]} rotation={[0, 1, 0]}>
          <Suspense fallback={null}>

            <AnimSkin />

            {/* компьютерный стол */}
            <group ref={computerRef} position={[-0.1, 0.6, 0.2]} rotation={[0, 3, 0]} visible={true || animationIndex === 2}>
              <TableModel />
              <pointLight position={[-0.18, 0.45, -0.37]} distance={3} intensity={0.91} color="rgb(255, 225, 130)" />
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

// вид на компьютер
// position
// :
// Vector3 {x: -1.4950795284422893, y: 0.5892451840724261, z: -0.6864400423998547}

// rotation
// :
// Euler {isEuler: true, _x: -2.7002412156083953, _y: -0.5171646226332153, _z: -2.912127808127708, _order: 'XYZ', …}