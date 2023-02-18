import { SpotLight, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react"
import * as THREE from "three";

export function Lamp(props) {
  const [target] = useState(() => new THREE.Object3D());

  const scroll = useScroll();

  const lamp = useRef();
  const tl = useRef();

  useFrame(() => {
    tl.current.seek(scroll.offset);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    console.log(lamp.current)

    tl.current.to(lamp.current, {
      intensity: 0,
      // duration: 3,
    })
  }, [])

  return (
    <mesh  {...props}>
      <cylinderGeometry args={[0.5, 1.5, 2, 32]} />
      <meshStandardMaterial color={"rgb(80, 80, 80)"} />
      <SpotLight
        ref={lamp}
        castShadow
        target={target}
        penumbra={0.2}
        radiusTop={0.4}
        radiusBottom={40}
        distance={20}
        angle={0.45}
        attenuation={20}
        anglePower={5}
        intensity={1}
        opacity={0.2}
      />
      <primitive object={target} position={[0, -1, 0]} />
    </mesh>
  )
}