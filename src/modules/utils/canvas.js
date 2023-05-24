export default function resizeCanvas(renderer) {
  const canvas = renderer.domElement;
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
}
