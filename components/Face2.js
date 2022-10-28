/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import { angleToRadians } from "./angle";

export default function Model({ ...props }) {
  const { nodes, materials } = useGLTF("/gltf_models/face2.gltf");
  const group = useRef();
  const orbitControlsRef = useRef(null);

  // Mouse control orbit
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      // console.log(y * angleToRadians(90 - 30));
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      // orbitControlsRef.current.setPolarAngle(angleToRadians(y));
      orbitControlsRef.current.update();
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <PerspectiveCamera makeDefault position={[0, 0, 7.5]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        ref={orbitControlsRef}
        minPolarAngle={angleToRadians(50)}
        maxPolarAngle={angleToRadians(110)}
      />
      <group
        rotation={[0, -89.55, 0]}
        position={[0, 1.5, 0.01]}
        scale={[0.1, 0.1, 0.023]}
      >
        <mesh
          geometry={nodes.Cube009.geometry}
          material={materials.skin_pink}
        />
        <mesh geometry={nodes.Cube009_1.geometry} material={materials.sk} />
        <mesh
          geometry={nodes.Cube009_2.geometry}
          material={materials.skin_normal}
        />
        <mesh
          geometry={nodes.Cube009_3.geometry}
          material={materials["skin.002"]}
        />
        <mesh
          geometry={nodes.Cube009_4.geometry}
          material={materials["skin.001"]}
        />
        <mesh
          geometry={nodes.Cube009_5.geometry}
          material={materials["sk.001"]}
        />
        <mesh
          geometry={nodes.Cube009_6.geometry}
          material={materials["skin.004"]}
        />
        <mesh
          geometry={nodes.Cube009_7.geometry}
          material={materials.skin_shadow}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/gltf_models/face2.gltf");
