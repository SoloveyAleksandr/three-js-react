import { useRef } from "react";

const Plane = (props) => {
  const ref = useRef(null);

  return (
    <mesh {...props} receiveShadow>
      <planeGeometry args={[10, 10, 1, 1]} />
      <shadowMaterial transparent opacity={0.2} />
    </mesh>
  );
};

export default Plane;
