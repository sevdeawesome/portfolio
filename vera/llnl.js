// import * as THREE from 'https://cdn.skypack.dev/three';
import * as THREE from 'https://cdn.skypack.dev/three@0.138.2';


//three@0.132.2
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(35);


renderer.render(scene, camera);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const asteroidMaterial = new THREE.MeshBasicMaterial({
   map: new THREE.TextureLoader().load('img/asteroid.jpg')
//   color: 0xff0000
})
const asteroidGeometry = new THREE.SphereGeometry(2, 20, 20);
let asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
scene.add(asteroid);
asteroid.position.x = 0;
asteroid.position.y = 0;







function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    asteroid.rotation.x += .01
    asteroid.rotation.y += .01
  }
  
  animate();
// asteroid.position