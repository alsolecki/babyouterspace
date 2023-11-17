import { Float, OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

import Socket from './Socket.jsx'
import Duck from './Duck.jsx'

export default function Experience() {
  const eventHandler = (e) => {
    e.object.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`)
  }

  const buttonA = document.querySelector('.button-target')

  function refreshPage() {
    window.location.reload();
  }

  // ANIMATION

  const groupRef = useRef()
  const groupRefOuter = useRef()

  useFrame((state, delta) => {
    groupRef.current.rotation.y += Math.cos(delta) * 0.0
    groupRef.current.rotation.x += Math.sin(delta) * 0.15
    groupRef.current.rotation.z += Math.sin(delta) * 0.35
    // groupRef.current.position.x += delta * 0
    // groupRef.current.position.y += delta * 0
    // groupRef.current.position.z += delta * 0
  })

  useFrame((state, delta) => {
    // groupRefOuter.current.position.x += Math.cos(delta) * 0.05
    groupRefOuter.current.position.y += delta * 0.25
    groupRefOuter.current.position.z += delta * -1.5
  })

  buttonA.addEventListener('click', () => {
    refreshPage()
  })

  return <>

    <OrbitControls makeDefault />

    <directionalLight castShadow
      position={[-10, 2, 3]}
      intensity={2.5}
      shadow-normalBias={0.04}
      color={'purple'}
    />
    <directionalLight castShadow
      position={[10, 2, 3]}
      intensity={1.5}
      shadow-normalBias={0.04}
      color={'yellow'}
    />
    <ambientLight intensity={0.5} color={'red'} />

    <Float speed={.5} floatIntensity={0.5}>
      <Socket
        position-x={-3.5}
        position-y={-3.5}
        position-z={4}
        scale={[1.25, 1.25, 1.25]}
        rotation-y={Math.PI * -.35}
        rotation-x={Math.PI * 1}
        rotation-z={Math.PI * 0}
      />
    </Float>

    <group
      ref={groupRefOuter}
    >
      <group
        ref={groupRef}
        scale={[1.5, 1.5, 1.5]}
        position-x={-1}>
        <Duck
          onClick={eventHandler}
          scale={2.5}
          position-x={1}
          position-y={-1}
          position-z={-10}
          rotation-y={Math.PI * 0} />
      </group>
    </group>
  </>
}