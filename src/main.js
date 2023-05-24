import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import resizeCanvas from './modules/utils/canvas';

function main() {
  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas';
  // attach the canvas to the DOM
  document.body.appendChild(canvas);

  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
  });

  const camera = new PerspectiveCamera(75, 2, 0.1, 10);
  camera.position.z = 2;

  const scene = new Scene();

  // materials
  const matImperialRed = new MeshBasicMaterial({ color: 0xf8333c });
  const matJadeGreen = new MeshBasicMaterial({ color: 0x44af69 });
  const matMoonstoneBlue = new MeshBasicMaterial({ color: 0x2b9eb3 });
  const matOrange = new MeshBasicMaterial({ color: 0xfcab10 });

  const boxGeometry = new BoxGeometry(1, 1, 1);
  const cubeRed = new Mesh(boxGeometry, matImperialRed);
  scene.add(cubeRed);
  cubeRed.position.set(0, 1.5, 0);
  const cubeGreen = new Mesh(boxGeometry, matJadeGreen);
  scene.add(cubeGreen);
  cubeGreen.position.set(1.5, 0, 0);
  const cubeBlue = new Mesh(boxGeometry, matMoonstoneBlue);
  scene.add(cubeBlue);
  cubeBlue.position.set(0, -1.5, 0);
  const cubeOrange = new Mesh(boxGeometry, matOrange);
  cubeOrange.position.set(-1.5, 0, 0);
  scene.add(cubeOrange);

  resizeCanvas(renderer);
  // render scene
  renderer.render(scene, camera);

  // when window is resized, resize canvas as well to be
  // in line with it's display size
  window.addEventListener('resize', () => {
    resizeCanvas(canvas);
  });
}
window.addEventListener('load', main);
