import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

function Wheelbarrow2(props : any) {
  console.log(props);
  const wheelbarrowRef = useRef<THREE.Object3D | null>(null); // Reference to the wheelbarrow object


  const mountRef = useRef<HTMLDivElement | null>(null);
  

  useEffect(() => {
    const objLoader = new OBJLoader();
    const mtlLoader = new MTLLoader();

    const scene = new THREE.Scene();
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 5);
    scene.add(light);

    const light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.position.set(-1, -1, 5);
    scene.add(light2);

    const light3 = new THREE.DirectionalLight(0xffffff, 1);
    light3.position.set(0, 0, 5);
    scene.add(light3);

    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
    hemiLight.color.setHSL( 0.6, 0.75, 0.5 );
    hemiLight.groundColor.setHSL( 0.095, 0.5, 0.5 );
    hemiLight.position.set( 0, 0, 5 );
    scene.add( hemiLight );




    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    let wheelbarrow: THREE.Object3D | null = null;
    mtlLoader.load( 'barrow2.mtl', function ( materials ) {
        materials.preload();
        objLoader.setMaterials(materials)
        .load(
            'barrow2.obj',
            (object) => {
              wheelbarrowRef.current = object;

                
                wheelbarrow = object
                wheelbarrow.scale.set(1, 1, 1)
                wheelbarrow.position.y = -2
                wheelbarrow.position.x = 1.4  
                wheelbarrow.rotateY(-1.6)
    
                scene.add(wheelbarrow)
    
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            },
            (error) => {
                console.log(error)
            }
        )

    })

    const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      
      }

      if (wheelbarrowRef.current) {
        wheelbarrowRef.current.rotation.x += props.rotation; 
      }
    };
  }, [props.rotation]);

  return <div ref={mountRef} style={{ position: 'relative', width: '100%', height: '100vh' }} />;
};

export default Wheelbarrow2;
