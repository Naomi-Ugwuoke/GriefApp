import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import Character from "./Character";
import { useKeyboardControls } from "@react-three/drei";
import { React, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Controls } from "../App";
import { Group } from "three";

const JUMP_FORCE = 0.5;
const MOVEMENT_SPEED = 0.1;
const MAX_VEL = 3;

export const CharacterController = () => {
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );

  //reference to rigidBody of character to interact with it
  const rigidbody = useRef();
  const isOnFloor = useRef(true); // to prevent jumps when character is in the air

  // movement:
  useFrame(() => {
    const impulse = { x: 0, y: 0, z: 0 };

    // if rigidbody is null
    if (!rigidbody.current) {
      return; // Exit early if rigidbody.current is null
    }

    //speed of movement:
    const linvel = rigidbody.current.linvel();
    let changeRotation = false;

    if (jumpPressed && isOnFloor.current) {
      impulse.y += JUMP_FORCE;
      isOnFloor.current = false;
    }
    if (rightPressed && linvel.x < MAX_VEL) {
      impulse.x += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (leftPressed && linvel.x > -MAX_VEL) {
      impulse.x -= MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (backPressed && linvel.z < MAX_VEL) {
      impulse.z += MOVEMENT_SPEED;
      changeRotation = true;
    }
    if (forwardPressed && linvel.z > -MAX_VEL) {
      impulse.z -= MOVEMENT_SPEED;
      changeRotation = true;
    }

    rigidbody.current.applyImpulse(impulse, true);

    //make character face the direction they are moving
    if (changeRotation) {
      const angle = Math.atan2(linvel.x, linvel.z);
      character.current.rotation.y = angle;
    }
  });

  const character = useRef();

  return (
    <group>
      <RigidBody
        ref={rigidbody}
        scale={[0.5, 0.5, 0.5]}
        colliders={false}
        enabledRotations={[false, false, false]}
        friction={2}
        onCollisionEnter={() => {
          isOnFloor.current = true; // to reset jump/ allow character to jump again
        }}
      >
        <CapsuleCollider args={[0.8, 0.4]} position={[0, 1.2, 0]} />
        <group ref={character}>
          <Character />
        </group>
      </RigidBody>
    </group>
  );
};
