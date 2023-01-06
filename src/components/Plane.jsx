import { useRef } from "react";

const Plane = (props) => {
  const ref = useRef(null);

  return (
    <mesh ref={ref} {...props}>
      <planeBufferGeometry args={[50, 50]} />
      <meshBasicMaterial color={'rgb(247, 215, 119)'} />
      {/* <meshLambertMaterial color={'rgb(247, 215, 119)'} /> */}
    </mesh>
  );
};

export default Plane;
