import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface AiSculptureProps {
  className?: string;
}

export const AiSculpture: React.FC<AiSculptureProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let renderer: THREE.WebGLRenderer | null = null;

    // Safe WebGL initialization
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'default',
        failIfMajorPerformanceCaveat: false,
      });
    } catch {
      // Fallback try with minimal configuration
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: false,
        });
      } catch (err) {
        console.warn('WebGL initialization unavailable, enabling interactive sculptural fallback:', err);
        setWebglSupported(false);
        return;
      }
    }

    if (!renderer) {
      setWebglSupported(false);
      return;
    }

    // Set up Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfffbf5, 1.2);
    scene.add(ambientLight);

    // Key light (warm champagne)
    const keyLight = new THREE.DirectionalLight(0xffeed6, 2.4);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    // Terracotta rim light
    const rimLight = new THREE.DirectionalLight(0xc56d4c, 2.0);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    // Soft saffron fill light
    const fillLight = new THREE.PointLight(0xd99a45, 1.8, 12);
    fillLight.position.set(0, -3, 3);
    scene.add(fillLight);

    // Sculpture Root Group
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // --- 1. Outer Translucent Glass/Ceramic Organic Form ---
    const outerGeo = new THREE.TorusKnotGeometry(1.48, 0.42, 140, 32, 2, 3);
    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0xfaf6ef,
      roughness: 0.14,
      metalness: 0.08,
      transmission: 0.72,
      ior: 1.52,
      reflectivity: 0.85,
      thickness: 1.4,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      attenuationColor: new THREE.Color(0xd99a45),
      attenuationDistance: 1.8,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    sculptureGroup.add(outerMesh);

    // --- 2. Inner Intelligence Core ---
    const coreGeo = new THREE.IcosahedronGeometry(0.78, 3);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xc56d4c,
      emissive: 0xd99a45,
      emissiveIntensity: 0.35,
      roughness: 0.25,
      metalness: 0.4,
      clearcoat: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculptureGroup.add(coreMesh);

    // --- 3. Delicate Champagne-Gold Orbit Rings ---
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xdfa052,
      metalness: 0.85,
      roughness: 0.22,
    });

    const ring1Geo = new THREE.TorusGeometry(2.35, 0.018, 16, 100);
    const ring1Mesh = new THREE.Mesh(ring1Geo, ringMat);
    ring1Mesh.rotation.x = Math.PI / 3;
    ring1Mesh.rotation.y = Math.PI / 6;
    sculptureGroup.add(ring1Mesh);

    const ring2Geo = new THREE.TorusGeometry(2.65, 0.014, 16, 100);
    const ring2Mesh = new THREE.Mesh(ring2Geo, ringMat);
    ring2Mesh.rotation.x = -Math.PI / 4;
    ring2Mesh.rotation.z = Math.PI / 5;
    sculptureGroup.add(ring2Mesh);

    // Satellite node on orbit ring
    const nodeGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xd99a45,
      emissive: 0xd99a45,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.1,
    });
    const satelliteNode = new THREE.Mesh(nodeGeo, nodeMat);
    sculptureGroup.add(satelliteNode);

    // --- 4. Micro Amber Floating Particles ---
    const particleCount = 75;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleOffsets = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
      particleOffsets[i] = Math.random() * Math.PI * 2;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xd99a45,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    sculptureGroup.add(particles);

    // Interaction & Animation state
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let scrollTilt = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.45;
      mouseY = y * 0.45;

      if (isDragging) {
        const deltaX = e.clientX - previousPointerX;
        const deltaY = e.clientY - previousPointerY;
        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;
        previousPointerX = e.clientX;
        previousPointerY = e.clientY;
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousPointerX = e.clientX;
      previousPointerY = e.clientY;
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Touch support
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousPointerX = e.touches[0].clientX;
        previousPointerY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousPointerX;
        const deltaY = e.touches[0].clientY - previousPointerY;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        previousPointerX = e.touches[0].clientX;
        previousPointerY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    // Scroll listener for tilt transition
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollTilt = Math.min(scrollY * 0.0012, 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Idle auto-rotation
      if (!isDragging) {
        targetRotationY += 0.0035;
        targetRotationX = Math.sin(elapsedTime * 0.4) * 0.12 + scrollTilt;
      }

      // Smooth interpolation (inertia)
      sculptureGroup.rotation.y += (targetRotationY + mouseX - sculptureGroup.rotation.y) * 0.06;
      sculptureGroup.rotation.x += (targetRotationX - mouseY - sculptureGroup.rotation.x) * 0.06;

      // Independent ring rotations
      ring1Mesh.rotation.z = elapsedTime * 0.15;
      ring2Mesh.rotation.y = -elapsedTime * 0.12;

      // Orbit satellite node along ring
      const orbitAngle = elapsedTime * 0.6;
      satelliteNode.position.x = Math.cos(orbitAngle) * 2.35;
      satelliteNode.position.y = Math.sin(orbitAngle) * Math.sin(Math.PI / 3) * 2.35;
      satelliteNode.position.z = Math.sin(orbitAngle) * Math.cos(Math.PI / 3) * 2.35;

      // Breathing scale on inner core
      const pulse = 1 + Math.sin(elapsedTime * 1.6) * 0.04;
      coreMesh.scale.set(pulse, pulse, pulse);

      // Micro particles ambient float
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(elapsedTime + particleOffsets[i]) * 0.0015;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Subtle light oscillation for moving highlights
      fillLight.position.x = Math.sin(elapsedTime * 0.8) * 3;
      fillLight.position.y = Math.cos(elapsedTime * 0.6) * 3;

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);

      outerGeo.dispose();
      outerMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      ringMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  // Parallax tracking for fallback mode
  const handleContainerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseParallax({ x: x * 20, y: y * 20 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleContainerMouseMove}
      className={`relative w-full h-[480px] md:h-[600px] lg:h-[660px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing ${className}`}
    >
      {/* Warm ambient studio radial glow behind sculpture */}
      <div
        className="absolute inset-0 pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(217, 154, 69, 0.14) 0%, rgba(243, 229, 208, 0.35) 45%, transparent 70%)',
        }}
      />

      {/* 3D WebGL Canvas or Interactive Sculptural Organic Orb */}
      {webglSupported ? (
        <canvas ref={canvasRef} className="w-full h-full relative z-10 block" />
      ) : (
        /* Award-winning organic SVG & CSS 3D sculpture fallback */
        <div
          className="relative z-10 w-[300px] h-[300px] md:w-[380px] md:h-[380px] flex items-center justify-center transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1000px) rotateY(${mouseParallax.x}deg) rotateX(${-mouseParallax.y}deg)`,
          }}
        >
          {/* Outer Glass Sphere */}
          <div
            className="absolute inset-0 rounded-full border border-border/70 backdrop-blur-md shadow-2xl"
            style={{
              background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.85) 0%, rgba(243, 229, 208, 0.5) 40%, rgba(217, 154, 69, 0.2) 80%, rgba(197, 109, 76, 0.3) 100%)',
              boxShadow: 'inset 0 10px 25px rgba(255,255,255,0.7), 0 20px 40px rgba(197, 109, 76, 0.15)',
            }}
          />

          {/* Concentric Floating Orbital Rings */}
          <div className="absolute inset-0 rounded-full border-2 border-accent/40 animate-orbit-slow" style={{ transform: 'rotateX(65deg) rotateY(25deg)' }} />
          <div className="absolute inset-0 rounded-full border border-terracotta/50 animate-orbit-medium" style={{ transform: 'rotateX(-45deg) rotateY(40deg)' }} />

          {/* Inner Terracotta Intelligence Core */}
          <div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full relative z-20 flex items-center justify-center animate-pulse-slow shadow-xl"
            style={{
              background: 'radial-gradient(circle at 40% 35%, #E8A85C 0%, #D99A45 40%, #C56D4C 85%)',
              boxShadow: '0 0 35px rgba(217, 154, 69, 0.45)',
            }}
          >
            {/* Center Core Highlight */}
            <div className="w-12 h-12 rounded-full bg-white/70 blur-xs" />
          </div>

          {/* Orbiting Satellite Node */}
          <div className="absolute w-full h-full animate-orbit-fast pointer-events-none">
            <div className="w-4 h-4 rounded-full bg-accent shadow-md shadow-accent/60 absolute top-4 left-1/2 -translate-x-1/2" />
          </div>
        </div>
      )}

      {/* Floating Capability Labels around 3D sculpture */}
      <div className="absolute inset-0 pointer-events-none z-20 flex flex-col justify-between p-4 md:p-8">
        {/* Top-Left Pill */}
        <div className="self-start mt-6 md:mt-10 animate-float-slow">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-sm text-[11px] font-mono uppercase tracking-wider text-charcoal">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>AI Automation</span>
          </div>
        </div>

        {/* Top-Right Pill */}
        <div className="self-end mt-12 md:mt-16 animate-float-slow" style={{ animationDelay: '1.5s' }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-sm text-[11px] font-mono uppercase tracking-wider text-charcoal">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            <span>Video Intelligence</span>
          </div>
        </div>

        {/* Bottom-Left Pill */}
        <div className="self-start mb-16 md:mb-20 animate-float-slow" style={{ animationDelay: '3s' }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-sm text-[11px] font-mono uppercase tracking-wider text-charcoal">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
            <span>Software & Systems</span>
          </div>
        </div>

        {/* Bottom-Right Pill */}
        <div className="self-end mb-8 md:mb-12 animate-float-slow" style={{ animationDelay: '4.5s' }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-sm text-[11px] font-mono uppercase tracking-wider text-charcoal">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Creative Technology</span>
          </div>
        </div>
      </div>

      {/* Restrained Interaction Cue */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/85 backdrop-blur-md border border-border text-[11px] font-mono uppercase tracking-widest text-muted transition-opacity duration-300 shadow-sm ${
            isInteracting ? 'opacity-0' : 'opacity-85'
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          <span>Drag to explore model</span>
        </div>
      </div>
    </div>
  );
};
