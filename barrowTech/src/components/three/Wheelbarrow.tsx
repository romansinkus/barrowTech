import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

const Wheelbarrow: React.FC = () => {

  const mountRef = useRef<HTMLDivElement | null>(null);
  

  useEffect(() => {
    const fbxLoader = new FBXLoader();

    const scene = new THREE.Scene();
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 5);
    scene.add(light);


    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    fbxLoader.load(
        'barrow2.fbx',
        (object) => {
            object.scale.set(100, 100, 100)

            scene.add(object)
            console.log(object.position)
            console.log(object.scale)

        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )

    const animate = () => {
    //   requestAnimationFrame(animate);
    //   object.rotation.x += 0.01;
    //   object.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'relative', width: '100%', height: '100vh' }} />;
};

export default Wheelbarrow;
