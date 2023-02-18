import { SpotLight } from "@react-three/drei"
import { useState } from "react"
import * as THREE from "three";

export function Lamp(props) {
  const [target] = useState(() => new THREE.Object3D())

  return (
    <mesh {...props}>
      <cylinderGeometry args={[0.5, 1.5, 2, 32]} />
      <meshStandardMaterial color={"rgb(80, 80, 80)"} />
      <SpotLight
        castShadow
        target={target}
        penumbra={0.2}
        radiusTop={0.4}
        radiusBottom={40}
        distance={80}
        angle={0.45}
        attenuation={20}
        anglePower={5}
        intensity={props.intensity || 1}
        opacity={0.2}
      />
      <primitive object={target} position={[0, -1, 0]} />
    </mesh>
  )
}