import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './HeroScene.style.css';

const HeroScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const W = mountRef.current.clientWidth || 500;
    const H = mountRef.current.clientHeight || 500;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.set(0, 0, 5);

    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const pt1 = new THREE.PointLight(0x38bdf8, 3, 20);
    pt1.position.set(3, 3, 3);
    scene.add(pt1);
    const pt2 = new THREE.PointLight(0x6366f1, 2, 20);
    pt2.position.set(-3, -2, 2);
    scene.add(pt2);

    const group = new THREE.Group();

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.45, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0xf5c5a3, roughness: 0.5, metalness: 0.1 }),
    );
    head.position.set(0, 1.7, 0);
    group.add(head);

    const hair = new THREE.Mesh(
      new THREE.SphereGeometry(0.47, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.55),
      new THREE.MeshStandardMaterial({ color: 0x1a0a00, roughness: 0.8 }),
    );
    hair.position.set(0, 1.7, 0);
    group.add(hair);

    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.6, 1.2, 16),
      new THREE.MeshStandardMaterial({ color: 0x1e3a5f, roughness: 0.6, metalness: 0.2 }),
    );
    body.position.set(0, 0.65, 0);
    group.add(body);

    const screen = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.6, 0.04),
      new THREE.MeshStandardMaterial({ color: 0x0a0a1a, roughness: 0.3, metalness: 0.7 }),
    );
    screen.position.set(0, 0.7, 0.55);
    screen.rotation.x = -0.3;
    group.add(screen);

    const glowMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 1.2,
      transparent: true,
      opacity: 0.85,
    });
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.5), glowMat);
    glow.position.set(0, 0.705, 0.575);
    glow.rotation.x = -0.3;
    group.add(glow);

    const base = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.04, 0.6),
      new THREE.MeshStandardMaterial({ color: 0x2a2a3a, roughness: 0.3, metalness: 0.8 }),
    );
    base.position.set(0, 0.4, 0.28);
    group.add(base);

    ([-1, 1] as const).forEach((side) => {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.1, 0.8, 12),
        new THREE.MeshStandardMaterial({ color: 0xf5c5a3, roughness: 0.5 }),
      );
      arm.position.set(side * 0.72, 0.6, 0);
      arm.rotation.z = side * 0.3;
      group.add(arm);
    });

    scene.add(group);

    const orbData: Array<{ pos: [number, number, number]; color: number; size: number }> = [
      { pos: [-2.5, 1.5, -1], color: 0x38bdf8, size: 0.18 },
      { pos: [2.8, 0.5, -1.5], color: 0x6366f1, size: 0.22 },
      { pos: [-2.2, -1.2, -0.5], color: 0x10b981, size: 0.15 },
      { pos: [2.5, -1.5, -1], color: 0xf59e0b, size: 0.19 },
      { pos: [0.8, 2.5, -2], color: 0x38bdf8, size: 0.14 },
      { pos: [-1.5, -2, -1], color: 0x6366f1, size: 0.16 },
    ];

    const orbs = orbData.map(({ pos, color, size }) => {
      const mesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(size, 1),
        new THREE.MeshStandardMaterial({ color, roughness: 0.2, metalness: 0.8 }),
      );
      mesh.position.set(...pos);
      scene.add(mesh);
      return mesh;
    });

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.02, 8, 64),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25 }),
    );
    ring.rotation.x = Math.PI / 2.5;
    scene.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.015, 8, 64),
      new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.2 }),
    );
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    let mx = 0;
    let my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse);

    let frame = 0;
    let reqId: number;
    const animate = () => {
      frame++;
      const t = frame * 0.01;
      group.rotation.y = mx * 0.3 + Math.sin(t * 0.5) * 0.1;
      group.rotation.x = -my * 0.15;
      ring.rotation.z = t * 0.3;
      ring2.rotation.y = t * 0.2;
      ring2.rotation.z = t * 0.15;
      orbs.forEach((o, i) => {
        o.rotation.y = t * (0.5 + i * 0.1);
        o.position.y = orbData[i].pos[1] + Math.sin(t + i) * 0.15;
      });
      glowMat.emissiveIntensity = 1.0 + Math.sin(t * 2) * 0.3;
      renderer.render(scene, camera);
      reqId = requestAnimationFrame(animate);
    };
    reqId = requestAnimationFrame(animate);

    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="hero-scene" />;
};

export default HeroScene;
