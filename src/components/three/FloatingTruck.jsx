import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// A stylized 3D truck built from primitives
const FloatingTruck = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef();
  const glowRef = useRef();
  const wheelFL = useRef();
  const wheelFR = useRef();
  const wheelBL = useRef();
  const wheelBR = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.15;
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.15;
    }
    // Spin wheels
    const wheelSpeed = t * 3;
    [wheelFL, wheelFR, wheelBL, wheelBR].forEach((w) => {
      if (w.current) w.current.rotation.x = wheelSpeed;
    });
    if (glowRef.current) {
      glowRef.current.intensity = 1.5 + Math.sin(t * 2) * 0.5;
    }
  });

  const bodyColor = '#1e3a5f';
  const cabinColor = '#1a2f4a';
  const wheelColor = '#111827';
  const rimColor = '#374151';
  const glassColor = '#60a5fa';
  const lightColor = '#fbbf24';

  return (
    <group ref={groupRef} position={position} scale={0.55}>
      {/* Dynamic light from headlights */}
      <pointLight ref={glowRef} position={[2.2, 0.2, 0]} color="#fbbf24" intensity={2} distance={6} />
      <pointLight position={[-2, 0, 0]} color="#3b82f6" intensity={0.8} distance={5} />

      {/* === TRAILER BODY === */}
      <mesh position={[-1.2, 0.35, 0]}>
        <boxGeometry args={[3.2, 1.1, 1.4]} />
        <meshStandardMaterial color={bodyColor} metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Trailer side stripe */}
      <mesh position={[-1.2, 0.35, 0.71]}>
        <boxGeometry args={[3.2, 0.08, 0.01]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[-1.2, 0.35, -0.71]}>
        <boxGeometry args={[3.2, 0.08, 0.01]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.8} />
      </mesh>

      {/* === CABIN === */}
      <mesh position={[1.35, 0.42, 0]}>
        <boxGeometry args={[0.9, 1.25, 1.35]} />
        <meshStandardMaterial color={cabinColor} metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Windshield */}
      <mesh position={[1.82, 0.55, 0]} rotation={[0, 0, -0.25]}>
        <boxGeometry args={[0.05, 0.7, 1.1]} />
        <meshStandardMaterial color={glassColor} transparent opacity={0.6} metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Headlights */}
      <mesh position={[1.82, 0.2, 0.45]}>
        <boxGeometry args={[0.05, 0.18, 0.22]} />
        <meshStandardMaterial color={lightColor} emissive={lightColor} emissiveIntensity={2} />
      </mesh>
      <mesh position={[1.82, 0.2, -0.45]}>
        <boxGeometry args={[0.05, 0.18, 0.22]} />
        <meshStandardMaterial color={lightColor} emissive={lightColor} emissiveIntensity={2} />
      </mesh>

      {/* Grill */}
      <mesh position={[1.82, -0.05, 0]}>
        <boxGeometry args={[0.05, 0.3, 1.1]} />
        <meshStandardMaterial color="#1f2937" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Exhaust pipe */}
      <mesh position={[0.9, 1.1, -0.55]}>
        <cylinderGeometry args={[0.04, 0.04, 0.6, 8]} />
        <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* === CHASSIS / UNDERCARRIAGE === */}
      <mesh position={[0, -0.22, 0]}>
        <boxGeometry args={[5.2, 0.12, 1.0]} />
        <meshStandardMaterial color="#111827" metalness={0.8} roughness={0.4} />
      </mesh>

      {/* === WHEELS === */}
      {/* Front Left */}
      <group ref={wheelFL} position={[1.5, -0.42, 0.78]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.32, 0.32, 0.18, 16]} />
          <meshStandardMaterial color={wheelColor} roughness={0.9} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.18, 0.18, 0.2, 16]} />
          <meshStandardMaterial color={rimColor} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Front Right */}
      <group ref={wheelFR} position={[1.5, -0.42, -0.78]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.32, 0.32, 0.18, 16]} />
          <meshStandardMaterial color={wheelColor} roughness={0.9} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.18, 0.18, 0.2, 16]} />
          <meshStandardMaterial color={rimColor} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Back Left */}
      <group ref={wheelBL} position={[-1.6, -0.42, 0.78]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.32, 0.32, 0.18, 16]} />
          <meshStandardMaterial color={wheelColor} roughness={0.9} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.18, 0.18, 0.2, 16]} />
          <meshStandardMaterial color={rimColor} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Back Right */}
      <group ref={wheelBR} position={[-1.6, -0.42, -0.78]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.32, 0.32, 0.18, 16]} />
          <meshStandardMaterial color={wheelColor} roughness={0.9} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.18, 0.18, 0.2, 16]} />
          <meshStandardMaterial color={rimColor} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Ground shadow plane */}
      <mesh position={[0, -0.76, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 2.5]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.25} />
      </mesh>
    </group>
  );
};

export default FloatingTruck;
