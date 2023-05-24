import { resizeCanvas } from './modules/utils/canvas';

function main() {
  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'canvas';

  // attach the canvas to the DOM
  document.body.appendChild(canvas);

  // when window is resized, resize canvas as well to be
  // in line with it's display size
  window.addEventListener('resize', () => {
    resizeCanvas(canvas);
  });
}
window.addEventListener('load', main);
