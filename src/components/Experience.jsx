import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { AnimatedWoman } from "./AnimatedWoman";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { MeshStandardMaterial, Plane } from "three";

const Experience = () => {
  return (
    <>
      {/* allows the object to move. */}
      <OrbitControls />
      {/* Animated woman */}
      <AnimatedWoman />

      {/* Lights */}
      <ambientLight intensity={1} />
      <Environment preset="sunset" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
        color={"#9e69da"}
      />

      {/* shadows */}
      <ContactShadows blur={2} />

      {/* Floor, Stage */}
      <planeGeometry args={[10, 10]} />

      {/* Allows the character to move when you click on a location on the screen */}
      {/* movable area: */}
      <mesh rotation-x={-Math.PI / 2} position-y={-0.001}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#ab6868" />
      </mesh>
    </>
  );
};

export default Experience;
