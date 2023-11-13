import { OrbitControls ,Sky , Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Waving",
      options: ["Waving", "JumpingDown", "Standing"],
    },
  });
  return (
    <>
      <OrbitControls 
      // enableZoom={false} 
      />
      <Sky />
      {/* <Environment  /> */}
      <group position={[0, -2, -2]}>
        <Avatar animation={animation} />
        {animation=="JumpingDown" && 
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="#00FF00" />
        </mesh>}
        <mesh rotation-x={-Math.PI * 0.5} >
          <planeGeometry args={[5, 10]}  />
          <meshStandardMaterial color="#808080" />
        </mesh>
      </group>
      <ambientLight intensity={1.5} />
    </>
  );
};
