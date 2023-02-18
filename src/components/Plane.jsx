import { usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useRef } from "react";
import { Color } from "three";

const Plane = (props) => {
  return (
    <mesh receiveShadow {...props}>
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        color="#878790"
        blur={[400, 400]}
        resolution={1024}
        mixBlur={1}
        mixStrength={3}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      />
    </mesh>
  )
};

export default Plane;
