/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Baby(props) {
  const { nodes, materials } = useGLTF("/baby/baby.glb");
  return (
    <group {...props} dispose={null} 
      position={ [ 0, 0, 0 ] }
    >
      <skinnedMesh
        geometry={nodes.Object_11.geometry}
        material={materials.Inst_Eye}
        skeleton={nodes.Object_11.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_13.geometry}
        material={materials.Inst_Baby_Head_Base}
        skeleton={nodes.Object_13.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={materials.Inst_Baby_Body_Base}
        skeleton={nodes.Object_7.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_9.geometry}
        material={materials.Inst_Eye}
        skeleton={nodes.Object_9.skeleton}
      />
      <primitive 
            ref={ null } 
            object={nodes.GLTF_created_0_rootJoint}
            scale={ 3 }
            position={ [ 0, 0, 0 ] }
            rotation-z={ ( 3.14 * 1.4 ) }
         />
    </group>
  );
}

useGLTF.preload("/baby/baby.glb");
