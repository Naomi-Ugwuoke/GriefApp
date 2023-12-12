import React from "react";
import { RigidBody } from "@react-three/rapier";
import { Volcano } from "./Volcano";

export const VolcanoController = () => {
  return (
    <RigidBody type="fixed">
      <Volcano scale={[1, 1, 1]} position={[0, 0.01, -3.5]} />
    </RigidBody>
  );
};
