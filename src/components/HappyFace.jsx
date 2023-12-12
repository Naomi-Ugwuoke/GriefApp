/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function HappyFace(props) {
  const { nodes, materials } = useGLTF("./models/happyFace.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.EmojiRing}
        position={[0.006, -0.017, 0.502]}
      />
    </group>
  );
}

useGLTF.preload("./models/happyFace.gltf");
