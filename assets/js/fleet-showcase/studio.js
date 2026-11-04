import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

var cachedEnvMap = null;

export function configureRenderer(renderer) {
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.22;
}

export function applyStudioEnvironment(scene, renderer) {
  if (!cachedEnvMap) {
    var roomEnvironment = new RoomEnvironment();
    var pmremGenerator = new THREE.PMREMGenerator(renderer);
    cachedEnvMap = pmremGenerator.fromScene(roomEnvironment, 0.04).texture;
    roomEnvironment.dispose();
    pmremGenerator.dispose();
  }
  scene.environment = cachedEnvMap;
  return cachedEnvMap;
}

export function addStudioLights(scene) {
  // Iluminação enxuta: IBL do RoomEnvironment + 1 Hemisphere + 1 Key Light (reduz custo de shader pela metade)
  var hemiLight = new THREE.HemisphereLight(0xf2f6fa, 0x181e26, 0.85);
  scene.add(hemiLight);

  var keyLight = new THREE.DirectionalLight(0xfffaf0, 1.65);
  keyLight.position.set(5, 8, 6);
  scene.add(keyLight);
}

export function disposeStudioEnvironment(scene) {
  scene.environment = null;
}
