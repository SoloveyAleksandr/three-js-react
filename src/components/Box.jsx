import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

const Box = (props) => {
  const ref = useRef(null);
  const [color, setColor] = useState('rgb(0, 0, 0)');
  const [speed, setSpeed] = useState(0.01);

  const getColor = () => {
    const getNum = () => Math.round(Math.random() * (255 - 0) + 0);
    const rgb = `rgb(${getNum()}, ${getNum()}, ${getNum()})`
    setColor(rgb);
  };

  useEffect(getColor, []);

  useFrame((state, delta) => {
    ref.current.rotation.x += speed;
  });

  return (
    <mesh
      ref={ref}
      {...props}
      onClick={getColor}
      onPointerEnter={() => setSpeed(0.03)}
      onPointerOut={() => setSpeed(0.01)} >
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
};

export default Box;
