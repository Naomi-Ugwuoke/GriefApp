import { Suspense, useMemo } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import { Physics } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";

//  Keyboard controls:
export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

const App = () => {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "Keys"] },
      { name: Controls.back, keys: ["ArrowDown", "Keys"] },
      { name: Controls.left, keys: ["ArrowLeft", "Keys"] },
      { name: Controls.right, keys: ["ArrowRight", "Keys"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas shadows camera={{ position: [0, 6, 14], fov: 40 }}>
        {/* background color  */}
        <color attach="background" args={["#dbecfb"]} />

        {/* Experience wrapped in physics component using rapier: */}
        <Suspense>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </KeyboardControls>
  );
};

export default App;
