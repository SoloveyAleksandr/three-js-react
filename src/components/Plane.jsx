import { MeshReflectorMaterial } from "@react-three/drei";
import { useRef } from "react";
import { Color } from "three";

const Plane = (props) => {

  return (
    <group  {...props}>
      <mesh>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[500, 300]}
          resolution={1024}
          mixBlur={1}
          mixStrength={5}
          roughness={10}
          depthScale={1.2}
          minDepthThreshold={0.1}
          maxDepthThreshold={0.3}
          color="#101010"
          metalness={0.9}
        />
      </mesh>
    </group>
  );
};

export default Plane;
