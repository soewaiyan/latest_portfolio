"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function STLViewer({
  src,
  caption,
}: {
  src: string;
  caption?: string;
}) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientWidth * 0.75;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    const key = new THREE.DirectionalLight(0xffffff, 1.2);
    key.position.set(1, 1, 1);
    const fill = new THREE.DirectionalLight(0xffffff, 0.4);
    fill.position.set(-1, -0.5, -1);
    scene.add(ambient, key, fill);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    let frameId: number;
    let mesh: THREE.Mesh | undefined;

    const loader = new STLLoader();
    loader.load(src, (geometry) => {
      geometry.center();
      geometry.computeVertexNormals();

      const material = new THREE.MeshStandardMaterial({
        color: 0x6b7280,
        metalness: 0.2,
        roughness: 0.6,
      });
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      geometry.computeBoundingSphere();
      const radius = geometry.boundingSphere?.radius ?? 50;
      camera.position.set(radius * 2, radius * 1.5, radius * 2);
      controls.target.set(0, 0, 0);
      controls.update();

      const animate = () => {
        frameId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
    });

    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientWidth * 0.75;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      mesh?.geometry.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [src]);

  return (
    <figure className="overflow-hidden rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
      <div ref={mountRef} className="w-full" />
      {caption && (
        <figcaption className="px-3 py-2 text-sm text-black/60 dark:text-white/60">
          {caption} · drag to rotate
        </figcaption>
      )}
    </figure>
  );
}
