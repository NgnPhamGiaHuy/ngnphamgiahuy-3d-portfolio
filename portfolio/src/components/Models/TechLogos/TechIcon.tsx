import * as THREE from "three";
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";

interface TechIconProps {
    model: {
        name: string;
        modelPath: string;
        scale: number;
        rotation: [number, number, number];
    };
}

const TechIcon: React.FC<TechIconProps> = ({ model }): React.ReactElement => {
    const scene = useGLTF(model.modelPath);

    useEffect(() => {
        if (model.name === "Interactive Developer") {
            scene.scene.traverse((child: THREE.Object3D) => {
                if (child instanceof THREE.Mesh) {
                    if (child.name === "Object_5") {
                        child.material = new THREE.MeshStandardMaterial({ color: "white" });
                    }
                }
            });
        }
    }, [scene, model.name]);

    return (
        <Canvas>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} />
            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} rotation={model.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    );
};

export default TechIcon;
