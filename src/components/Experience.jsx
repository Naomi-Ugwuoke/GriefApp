import {
  ContactShadows,
  Environment,
  OrbitControls,
  Cylinder,
  MeshReflectorMaterial,
  Box,
} from "@react-three/drei";
import { RigidBody, CylinderCollider } from "@react-three/rapier";
import { CharacterController } from "./CharacterController";
import { VolcanoController } from "./VolcanoController";
import { CoinController } from "./CoinController";

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

      <RigidBody type="static">
        <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </RigidBody>

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

      {/* Volcano */}
      <VolcanoController />

      {/* Character */}
      <CharacterController />

      {/* Happy Face coin Place holder */}
      <CoinController />
    </>
  );
};

export default Experience;
