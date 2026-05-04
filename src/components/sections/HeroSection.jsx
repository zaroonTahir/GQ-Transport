import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Truck, Shield, Clock, MapPin, ChevronDown } from 'lucide-react';
import * as THREE from 'three';
import gq from '../../assets/hero-video4.mp4';

/* ── 3D floating orb ── */
function FloatingOrb({ position, color, speed = 1, distort = 0.4 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
}

/* ── Animated particles ring ── */
function ParticleRing() {
  const pointsRef = useRef();
  const count = 200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const radius = 3 + Math.random() * 0.5;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
    positions[i * 3 + 2] = Math.sin(angle) * radius;
  }
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#60a5fa" transparent opacity={0.8} />
    </points>
  );
}

/* ── 3D Scene ── */
function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      <Stars radius={80} depth={50} count={3000} factor={3} fade speed={1} />
      <FloatingOrb position={[2.5, 0, 0]} color="#3b82f6" speed={0.8} distort={0.5} />
      <FloatingOrb position={[-2.5, 0.5, -1]} color="#8b5cf6" speed={1.2} distort={0.3} />
      <FloatingOrb position={[0, -1.5, -2]} color="#06b6d4" speed={0.6} distort={0.6} />
      <ParticleRing />
    </>
  );
}

/* ── Typewriter hook ── */
function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ── Magnetic button ── */
function MagneticButton({ children, onClick, className }) {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };
  const handleMouseLeave = () => {
    ref.current.style.transform = 'translate(0, 0)';
  };
  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      whileTap={{ scale: 0.95 }}
      style={{ transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)' }}
    >
      {children}
    </motion.button>
  );
}

/* ── Main Hero ── */
const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const typeText = useTypewriter(
    ['Rahim Yar Khan', 'All Pakistan', 'Your Trusted Partner'],
    80,
    2200
  );

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: Truck, text: '10+ Trucks', color: 'from-blue-500 to-cyan-500' },
    { icon: Shield, text: '100% Insured', color: 'from-purple-500 to-pink-500' },
    { icon: Clock, text: '24/7 Support', color: 'from-cyan-500 to-blue-500' },
    { icon: MapPin, text: 'All Pakistan', color: 'from-pink-500 to-purple-500' },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen bg-[#030712] text-white overflow-hidden flex items-center"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#030712]/60 via-transparent to-[#030712]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#030712]/80 via-transparent to-[#030712]/40" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 pt-24 pb-16 relative z-10"
        style={{ y, opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm text-sm font-medium text-blue-300">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                🚚 Pakistan's Trusted Transport Partner
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 leading-[1.05]">
              <span className="text-white">GQ Transport</span>
              <br />
              <span className="animated-gradient-text">
                {typeText}
                <span className="cursor-blink text-blue-400">|</span>
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
              Delivering excellence across Pakistan with reliability, safety, and speed.
              Your cargo, our commitment — since 2014.
            </motion.p>

            {/* Feature pills */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-default"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${f.color} flex items-center justify-center flex-shrink-0`}>
                    <f.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {f.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="relative overflow-hidden px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 pulse-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get a Quote
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                </span>
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Our Services
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right — Video card */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl" />

            <motion.div
              whileHover={{ scale: 1.02, rotateY: 3 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900/50 backdrop-blur-sm"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Shimmer border */}
              <div className="absolute inset-0 rounded-2xl border border-white/20 z-10 pointer-events-none shimmer" />

              <video
                src={gq}
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-2xl object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent rounded-2xl" />
            </motion.div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: 'spring' }}
              className="absolute -bottom-5 -left-6 bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl"
            >
              <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">10+</div>
              <div className="text-xs text-gray-400 mt-0.5">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, type: 'spring' }}
              className="absolute -top-5 -right-6 bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl"
            >
              <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10K+</div>
              <div className="text-xs text-gray-400 mt-0.5">Happy Clients</div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => scrollToSection('features')}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
