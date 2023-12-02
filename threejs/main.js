import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const loader = new OBJLoader();
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


loader.load(
    // resource URL
    'public/Face.obj',
    // called when resource is loaded
    function (object) {

        scene.add(object);
        object.position.x = -2;
        object.position.y = -1.5;

    },
    // called when loading is in progresses
    function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    },
    // function animate(object) {
    //     requestAnimationFrame(animate);
    //     object.rotation.x += 0.01;
    //     object.rotation.y += 0.01;
    //     renderer.render(scene, camera);
    // },
    // called when loading has errors
    function (error) {

        console.log('An error happened');

    }
);
scene.add(cube1);
cube1.position.x = -6;

scene.add(cube2);
cube2.position.x = 2;

scene.add(cube3);
cube3.position.x = 6;

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

    // object.rotation.x += 0.01;
    // object.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

