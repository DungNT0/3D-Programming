import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const controls = new OrbitControls(camera, renderer.domElement);
// const loader = new GLTFLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry1 = new THREE.TetrahedronGeometry(1, 0);
const material1 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube1 = new THREE.Mesh(geometry1, material1);

const geometry2 = new THREE.BoxGeometry(3, 2, 1);
const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube2 = new THREE.Mesh(geometry2, material2);

const geometry3 = new THREE.CapsuleGeometry(1, 0.1, 5, 25);
const material3 = new THREE.MeshBasicMaterial({ color: 0x008000 });
const cube3 = new THREE.Mesh(geometry3, material3);

scene.add(cube1);
cube1.position.x = -4;

scene.add(cube2);

scene.add(cube3);
cube3.position.x = 4;

scene.background = new THREE.TextureLoader().load('public/justright.jpg');

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;

    cube3.rotation.x += 0.01;
    cube3.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

