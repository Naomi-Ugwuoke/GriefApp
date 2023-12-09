import { Suspense, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Physics } from "@react-three/rapier";
import { OrbitControls, Plane } from "@react-three/drei";

const App = () => {
  return (
    <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
      {/* background color  */}
      <color attach="background" args={["#dbecfb"]} />
      <Experience />

      {/* Experience wrapped in physics component using rapier: */}
      {/* <Suspense>
        <Physics debug>
          <Experience />
        </Physics>
      </Suspense> */}
    </Canvas>
  );
};

export default App;
