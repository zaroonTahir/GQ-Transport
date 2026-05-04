import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({ count = 120 }) => {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Blue to purple gradient colors
      const t = Math.random();
      colors[i * 3] = 0.2 + t * 0.4;       // R
      colors[i * 3 + 1] = 0.3 + t * 0.2;   // G
      colors[i * 3 + 2] = 0.8 + t * 0.2;   // B

      sizes[i] = Math.random() * 3 + 1;
    }

    return { positions, colors, sizes };
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.04;
      mesh.current.rotation.x = Math.sin(time * 0.02) * 0.1;

      const positions = mesh.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(time * 0.5 + i * 0.1) * 0.002;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
    if (light.current) {
      light.current.position.x = Math.sin(time * 0.5) * 5;
      light.current.position.y = Math.cos(time * 0.3) * 3;
    }
  });

  return (
    <>
      <pointLight ref={light} color="#3b82f6" intensity={2} distance={15} />
      <pointLight position={[5, -3, 2]} color="#8b5cf6" intensity={1.5} distance={12} />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={particles.colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={count}
            array={particles.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
};

export default ParticleField;
