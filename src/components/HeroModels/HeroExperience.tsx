import React from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { OrbitControls } from "@react-three/drei";

import Particles from "./Particles.tsx";
import { CozyDayModel } from "./Cozy_day.tsx";

const HeroExperience: React.FC = (): React.ReactElement => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 25 }}>
            <OrbitControls enablePan={false} enableZoom={!isTablet} maxDistance={20} minDistance={5} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} />
            <Particles count={1000} />
            <group scale={isMobile ? 0.7 : 1} position={[0, -2, 0]} rotation={[0.125, -Math.PI / 1.725, 0]}>
                <CozyDayModel />
            </group>
        </Canvas>
    );
};

export default HeroExperience;
