import {
  ContactShadows,
  Environment,
  OrbitControls,
  Cylinder,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { RigidBody, CylinderCollider } from "@react-three/rapier";
import { Volcano } from "./Volcano";
import { CharacterController } from "./CharacterController";
import Character from "./Character";

const Experience = () => {
  return (
    <>
      {/* allows the object to move. */}
      <OrbitControls />
      {/* Animated woman */}
      {/* <AnimatedWoman /> */}

      {/* Lights */}
      <ambientLight intensity={1} />
      <Environment preset="sunset" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        // castShadow
        color={"#9e69da"}
      />

      {/* shadows */}
      <ContactShadows blur={2} />

      {/* Background, floor */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="green" />
      </mesh>

      <group position-y={0}>
        {/* Stage */}
        <RigidBody
          colliders={false}
          type="fixed"
          position-y={-0.5}
          friction={2}
        >
          <CylinderCollider args={[1 / 2, 5]} />
          <Cylinder scale={[5, 1, 5]} receiveShadow>
            <meshStandardMaterial color="white" />
          </Cylinder>
        </RigidBody>
      </group>
      {/* Allows the character to move when you click on a location on the screen */}
      {/* movable area: */}
      {/* <mesh rotation-x={-Math.PI / 2} position-y={-0.001}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#ab6868" />
      </mesh> */}

      {/* Volcano */}
      <Volcano scale={[1, 1, 1]} position={[0, 0.01, -3.5]} />

      {/* Character */}
      <CharacterController />
    </>
  );
};

export default Experience;
