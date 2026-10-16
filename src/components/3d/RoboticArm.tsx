import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface RoboticArmProps {
  className?: string;
}

export const RoboticArm: React.FC<RoboticArmProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let reqId: number | null = null;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: false,
        });
      } catch (err) {
        console.warn('WebGL unavailable, using fallback:', err);
        setWebglSupported(false);
        setIsLoading(false);
        return;
      }
    }

    if (!renderer) {
      setWebglSupported(false);
      setIsLoading(false);
      return;
    }

    // 100% transparent edge-to-edge canvas
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = false;

    const scene = new THREE.Scene();
    scene.background = null;

    // Full-screen Perspective Camera
    const camera = new THREE.PerspectiveCamera(
      36,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 4.8);
    camera.lookAt(0, 0, 0);

    // Studio Lighting designed for industrial metallic and yellow surfaces
    const ambientLight = new THREE.AmbientLight(0xfffbf2, 1.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5e4, 2.8);
    keyLight.position.set(5, 7, 5);
    scene.add(keyLight);

    // Warm sunshine yellow fill light to enrich the industrial coating
    const yellowFill = new THREE.DirectionalLight(0xffd166, 1.7);
    yellowFill.position.set(-5, -1, 3);
    scene.add(yellowFill);

    // Sky blue rim light for metallic edge definition
    const rimLight = new THREE.DirectionalLight(0x7ccbfa, 2.4);
    rimLight.position.set(0, 5, -4);
    scene.add(rimLight);

    // Freely Floating Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Base Transform Settings
    const baseRotY = 0.55; // Angle showing joints, hydraulic cylinders, and arm chassis
    const baseRotX = 0.12;
    let basePosX = 1.35;
    let basePosY = -0.15;
    let baseScale = 0.88;

    const updateFraming = (width: number, height: number) => {
      const aspect = width / height;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer!.setSize(width, height);
      renderer!.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      if (width >= 1280) {
        // Large Desktop: Floating on the right side
        basePosX = 1.35;
        basePosY = -0.12;
        baseScale = 0.88;
        camera.position.z = 4.8;
      } else if (width >= 1024) {
        // Standard Desktop
        basePosX = 1.15;
        basePosY = -0.12;
        baseScale = 0.8;
        camera.position.z = 5.0;
      } else if (width >= 768) {
        // Tablet: Shifted right
        basePosX = 0.65;
        basePosY = -0.3;
        baseScale = 0.68;
        camera.position.z = 5.2;
      } else {
        // Mobile: Centered below the headline and CTAs
        basePosX = 0.0;
        basePosY = -0.65;
        baseScale = 0.55;
        camera.position.z = 5.6;
      }
    };

    updateFraming(container.clientWidth, container.clientHeight);

    // Cursor Tracking & Parallax State
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let targetCursorRotY = 0;
    let targetCursorRotX = 0;
    let currentCursorRotY = 0;
    let currentCursorRotX = 0;
    let targetParallaxX = 0;
    let targetParallaxY = 0;
    let currentParallaxX = 0;
    let currentParallaxY = 0;

    // Load Robotic Arm GLB Model
    const loader = new GLTFLoader();
    let modelRoot: THREE.Object3D | null = null;

    loader.load(
      '/robotic-arm.glb',
      (gltf) => {
        modelRoot = gltf.scene;

        // Auto-fit and center model geometry based on bounding box
        const bbox = new THREE.Box3().setFromObject(modelRoot);
        const center = new THREE.Vector3();
        const size = new THREE.Vector3();
        bbox.getCenter(center);
        bbox.getSize(size);

        // Normalize max dimension to ~2.75 units in Three.js space
        const maxDim = Math.max(size.x, size.y, size.z);
        const normScale = maxDim > 0 ? 2.75 / maxDim : 1;

        modelRoot.scale.setScalar(normScale);
        modelRoot.position.set(-center.x * normScale, -center.y * normScale, -center.z * normScale);

        // Enhance metallic surfaces, glowing details, and materials
        modelRoot.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            if (mesh.material) {
              const mat = mesh.material as THREE.MeshStandardMaterial;
              mat.metalness = Math.min(1.0, (mat.metalness ?? 0.8) * 1.05);
              mat.roughness = Math.max(0.18, mat.roughness ?? 0.35);

              // Blue glowing status details
              if (mat.emissiveMap) {
                mat.emissive = new THREE.Color(0x38bdf8);
                mat.emissiveIntensity = 2.0;
              }
              mat.needsUpdate = true;
            }
          }
        });

        const modelContainer = new THREE.Group();
        modelContainer.add(modelRoot);
        rootGroup.add(modelContainer);

        setIsLoading(false);
      },
      undefined,
      (error) => {
        console.error('Failed to load Robotic Arm model:', error);
        setWebglSupported(false);
        setIsLoading(false);
      }
    );

    // Animation Loop with smooth damped cursor tracking
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      reqId = requestAnimationFrame(animate);

      // Smooth damped interpolation (lerp) toward target cursor angles
      currentCursorRotY += (targetCursorRotY - currentCursorRotY) * 0.055;
      currentCursorRotX += (targetCursorRotX - currentCursorRotX) * 0.055;
      currentParallaxX += (targetParallaxX - currentParallaxX) * 0.045;
      currentParallaxY += (targetParallaxY - currentParallaxY) * 0.045;

      // Subtle breathing idle motion when stationary
      const idleTime = currentTime * 0.001;
      const idleFloatY = prefersReducedMotion ? 0 : Math.sin(idleTime * 1.3) * 0.035;
      const idleTiltZ = prefersReducedMotion ? 0 : Math.cos(idleTime * 0.9) * 0.012;

      // Apply transforms
      rootGroup.rotation.y = baseRotY + currentCursorRotY;
      rootGroup.rotation.x = baseRotX + currentCursorRotX;
      rootGroup.rotation.z = idleTiltZ;

      rootGroup.position.x = basePosX + currentParallaxX;
      rootGroup.position.y = basePosY + idleFloatY + currentParallaxY;
      rootGroup.scale.setScalar(baseScale);

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    reqId = requestAnimationFrame(animate);

    // Cursor Tracking relative to the Hero Section
    const onPointerMove = (e: PointerEvent) => {
      if (!container || prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();

      // Normalize to [-1, 1] relative to hero bounds
      const normX = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width) * 2 - 1));
      const normY = Math.max(-1, Math.min(1, -(((e.clientY - rect.top) / rect.height) * 2 - 1)));

      // Subtle rotation limits (~10-14 degrees)
      targetCursorRotY = normX * 0.22;
      targetCursorRotX = -normY * 0.15;
      targetParallaxX = normX * 0.12;
      targetParallaxY = normY * 0.08;
    };

    const onPointerLeave = () => {
      targetCursorRotY = 0;
      targetCursorRotX = 0;
      targetParallaxX = 0;
      targetParallaxY = 0;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);

    // Responsive Resize Observer
    const handleResize = () => {
      if (!container) return;
      updateFraming(container.clientWidth, container.clientHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Resource Cleanup
    return () => {
      if (reqId !== null) cancelAnimationFrame(reqId);
      resizeObserver.disconnect();

      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);

      if (renderer) {
        renderer.dispose();
      }

      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          const mesh = obj as THREE.Mesh;
          if (mesh.geometry) mesh.geometry.dispose();
          if (mesh.material) {
            if (Array.isArray(mesh.material)) {
              mesh.material.forEach((m) => m.dispose());
            } else {
              mesh.material.dispose();
            }
          }
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none select-none ${className}`}
      aria-label="Full-Screen 3D Robotic Arm"
    >
      {/* Loading Indicator */}
      {isLoading && webglSupported && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 pointer-events-none">
          <div className="w-10 h-10 border-3 border-sunshine-yellow border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono text-text-secondary bg-surface/90 px-3 py-1 rounded-full shadow-xs">
            Calibrating Robotic Arm...
          </span>
        </div>
      )}

      {/* 3D WebGL Canvas — Transparent edge-to-edge canvas with zero click interference */}
      {webglSupported ? (
        <canvas
          ref={canvasRef}
          className="w-full h-full block bg-transparent border-none outline-none pointer-events-none"
        />
      ) : (
        /* Accessible Fallback for Non-WebGL Devices */
        <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10 w-72 h-72 flex items-center justify-center animate-bounce-subtle pointer-events-auto">
          <div className="relative w-56 h-64 bg-surface rounded-[3rem] border-4 border-sunshine-yellow shadow-playful flex flex-col items-center justify-center p-6">
            <div className="w-8 h-8 rounded-full bg-sunshine-yellow mb-2 animate-wiggle" />
            <div className="w-40 h-24 bg-text-primary rounded-2xl flex items-center justify-around px-4 mb-4">
              <div className="w-4 h-6 rounded-full bg-sky-blue animate-pulse" />
              <div className="w-4 h-6 rounded-full bg-sky-blue animate-pulse" />
            </div>
            <div className="w-24 h-8 rounded-full bg-sunshine-yellow flex items-center justify-center">
              <span className="text-text-primary text-xs font-bold font-mono">ROBOTIC ARM</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Interactive Service Labels in Open Space */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden sm:block max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Right: AI Automation */}
        <div className="absolute right-12 md:right-24 lg:right-36 top-28 lg:top-36 animate-float-slow">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-playful text-xs font-semibold text-text-primary">
            <span className="w-2.5 h-2.5 rounded-full bg-sunshine-yellow" />
            <span>AI Automation</span>
          </div>
        </div>

        {/* Far Right: Video Intelligence */}
        <div className="absolute right-4 md:right-8 lg:right-14 top-60 lg:top-68 animate-float-reverse">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-playful text-xs font-semibold text-text-primary">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-blue" />
            <span>Video Intelligence</span>
          </div>
        </div>

        {/* Center-Right: Custom Software */}
        <div
          className="absolute right-36 md:right-56 lg:right-64 bottom-32 lg:bottom-40 animate-float-slow"
          style={{ animationDelay: '2s' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-playful text-xs font-semibold text-text-primary">
            <span className="w-2.5 h-2.5 rounded-full bg-mint-green" />
            <span>Custom Software</span>
          </div>
        </div>

        {/* Lower Right: Creative Tech */}
        <div
          className="absolute right-8 md:right-16 lg:right-20 bottom-16 lg:bottom-24 animate-float-reverse"
          style={{ animationDelay: '1.5s' }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 backdrop-blur-md border border-border shadow-playful text-xs font-semibold text-text-primary">
            <span className="w-2.5 h-2.5 rounded-full bg-coral" />
            <span>Creative Tech</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export alias for backward compatibility
export const RobotMascot = RoboticArm;
