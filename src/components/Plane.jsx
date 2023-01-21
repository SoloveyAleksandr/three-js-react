import { MeshReflectorMaterial } from "@react-three/drei";
import { useRef } from "react";
import { Color } from "three";

const Plane = (props) => {

  return (
    <group  {...props}>
      {/* <mesh>
        <planeGeometry args={[10, 10, 1, 1]} />
        <meshBasicMaterial color="rgb(54, 54, 54)" />
      </mesh> */}
      <mesh>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[500, 300]}
          resolution={1024}
          mixBlur={1}
          mixStrength={5}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.1}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
      {/* <mesh receiveShadow>
        <planeGeometry args={[100, 100, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh> */}
    </group>
  );
};

export default Plane;
