import React from "react";
import * as THREE from "three";
import type { GLTF } from "three-stdlib";
import { useGLTF } from "@react-three/drei";

type GLTFAction = {
    name: string;
    clips: THREE.AnimationClip[];
};

type GLTFResult = GLTF & {
    nodes: {
        Cube000_ComputerDesk_0001_1: THREE.Mesh;
        Cube000_ComputerDesk_0001_2: THREE.Mesh;
    };
    materials: {
        ['ComputerDesk.001']: THREE.MeshStandardMaterial;
        ['FloppyDisk.001']: THREE.MeshStandardMaterial;
    };
    animations: GLTFAction[];
};

interface ComputerProps extends React.ComponentPropsWithoutRef<'group'> { }

const Computer: React.FC<ComputerProps> = (props): React.ReactElement => {
    const { nodes, materials } = useGLTF('/models/computer-optimized.glb') as unknown as GLTFResult;

    return (
        <group {...props} dispose={null}>
            <group position={[-4.005, 67.549, 58.539]}>
                <mesh geometry={nodes.Cube000_ComputerDesk_0001_1.geometry} material={materials['ComputerDesk.001']} />
                <mesh geometry={nodes.Cube000_ComputerDesk_0001_2.geometry} material={materials['FloppyDisk.001']} />
            </group>
        </group>
    );
};

useGLTF.preload('/models/computer-optimized.glb');

export default Computer;