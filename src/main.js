import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import resizeCanvas from './modules/utils/canvas';

function main() {
  // get canvas
  const canvas = document.querySelector('#canvas');

  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
  });

  const camera = new PerspectiveCamera(75, 2, 0.1, 10);
  camera.position.z = 5;

  const scene = new Scene();

  // materials
  const matImperialRed = new MeshBasicMaterial({ color: 0xf8333c });
  const matJadeGreen = new MeshBasicMaterial({ color: 0x44af69 });
  const matMoonstoneBlue = new MeshBasicMaterial({ color: 0x2b9eb3 });
  const matOrange = new MeshBasicMaterial({ color: 0xfcab10 });

  const cubes = new Object3D();
  const boxGeometry = new BoxGeometry(1, 1, 1);
  const cubeRed = new Mesh(boxGeometry, matImperialRed);
  cubes.add(cubeRed);
  cubeRed.position.set(0, 1.5, 0);
  const cubeGreen = new Mesh(boxGeometry, matJadeGreen);
  cubes.add(cubeGreen);
  cubeGreen.position.set(1.5, 0, 0);
  const cubeBlue = new Mesh(boxGeometry, matMoonstoneBlue);
  cubes.add(cubeBlue);
  cubeBlue.position.set(0, -1.5, 0);
  const cubeOrange = new Mesh(boxGeometry, matOrange);
  cubeOrange.position.set(-1.5, 0, 0);
  cubes.add(cubeOrange);
  scene.add(cubes);

  resizeCanvas(renderer);
  // render scene
  renderer.render(scene, camera);

  // when window is resized, resize canvas as well to be
  // in line with it's display size
  window.addEventListener('resize', () => {
    resizeCanvas(renderer);
  });

  const render = (deltaTime) => {
    const seconds = deltaTime * 0.001;
    cubes.rotation.z = seconds;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };

  render();
}
window.addEventListener('load', main);
