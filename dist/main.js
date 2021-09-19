// Setup

// import './style.css'

console.log("test");
import * as THREE from 'https://cdn.skypack.dev/three';


//three@0.132.2
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);


renderer.render(scene, camera);

// create object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

camera.position.x = 5;          

// LIGHTS
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10,0,0);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);



// HELPERS
// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper() 
// scene.add(gridHelper, lightHelper);


 
function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  torus.rotation.y += .01;
  // torus.scale.x += .1;
  
}

animate();
