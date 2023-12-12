import { RigidBody } from "@react-three/rapier";
import { HappyFace } from "./HappyFace";
export const CoinController = () => {
  return (
    <RigidBody position={[0, 0, 4]}>
      <HappyFace scale={[0.5, 0.5, 0.5]} />;
    </RigidBody>
  );
};
