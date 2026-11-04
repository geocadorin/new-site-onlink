import { GLTFLoader } from "../../vendor/three/addons/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "../../vendor/three/addons/libs/meshopt_decoder.module.js";

var loaderPromise = null;
var gltfCache = new Map();

function createLoader() {
  var loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);

  // Ignora extensões pesadas que forçam criação de MeshPhysicalMaterial e texturas extras
  loader.register(function () {
    return { name: "KHR_materials_specular" };
  });
  loader.register(function () {
    return { name: "KHR_materials_ior" };
  });
  loader.register(function () {
    return { name: "KHR_materials_transmission" };
  });
  loader.register(function () {
    return { name: "KHR_materials_clearcoat" };
  });

  return loader;
}

export function getGltfLoader() {
  if (loaderPromise) return loaderPromise;

  loaderPromise = Promise.resolve(MeshoptDecoder.ready || true).then(function () {
    return createLoader();
  });

  return loaderPromise;
}

export function loadGltf(url, onProgress) {
  if (gltfCache.has(url)) {
    var cached = gltfCache.get(url);
    if (onProgress) onProgress(100);
    return cached;
  }

  var promise = getGltfLoader()
    .then(function (loader) {
      return new Promise(function (resolve, reject) {
        loader.load(
          url,
          resolve,
          function (event) {
            if (!onProgress || !event || !event.total) return;
            onProgress(Math.min(100, Math.round((event.loaded / event.total) * 100)));
          },
          reject
        );
      });
    })
    .catch(function (err) {
      gltfCache.delete(url);
      throw err;
    });

  gltfCache.set(url, promise);
  return promise;
}

export function preloadGltf(url) {
  return loadGltf(url);
}

loadGltf.preload = preloadGltf;
