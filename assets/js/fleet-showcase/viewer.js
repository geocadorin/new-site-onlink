import * as THREE from "three";
import { OrbitControls } from "../../vendor/three/addons/controls/OrbitControls.js";
import { disposeObject, normalizeModel } from "./sanitize.js";
import {
  addStudioLights,
  applyStudioEnvironment,
  configureRenderer,
  disposeStudioEnvironment
} from "./studio.js";

var CAMERA_TARGET = new THREE.Vector3(0, 1.45, 0);
var DEFAULT_SPHERICAL = { radius: 10.6, phi: 1.12, theta: 0.72 };
var MAX_CACHED_MODELS = 4;

function isDesktop() {
  return window.innerWidth > 768;
}

function getRestDpr() {
  return Math.min(window.devicePixelRatio || 1, 1.25);
}

function createGround() {
  var size = 128;
  var canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  var ctx = canvas.getContext("2d");
  var gradient = ctx.createRadialGradient(size / 2, size / 2, 4, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(0, 0, 0, 0.58)");
  gradient.addColorStop(0.42, "rgba(8, 14, 28, 0.22)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  var texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;

  var mesh = new THREE.Mesh(
    new THREE.CircleGeometry(7.2, 32),
    new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false
    })
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0.002;
  mesh.renderOrder = -1;
  mesh.updateMatrix();
  mesh.matrixAutoUpdate = false;
  return mesh;
}

function createGrid() {
  var grid = new THREE.GridHelper(12, 14, 0x73f574, 0x242c29);
  grid.position.y = 0;
  var material = grid.material;
  material.transparent = true;
  material.opacity = 0.2;
  material.depthWrite = false;
  grid.updateMatrix();
  grid.matrixAutoUpdate = false;
  return grid;
}

function applyDefaultCamera(camera, controls, theta) {
  var spherical = new THREE.Spherical(
    DEFAULT_SPHERICAL.radius,
    DEFAULT_SPHERICAL.phi,
    typeof theta === "number" ? theta : DEFAULT_SPHERICAL.theta
  );
  camera.position.setFromSpherical(spherical).add(CAMERA_TARGET);
  camera.lookAt(CAMERA_TARGET);
  controls.target.copy(CAMERA_TARGET);
  controls.update();
}

function isolateFromVirtualScroll(container) {
  function lockVirtualScroll(event) {
    if (window.onlinkScroll) {
      window.onlinkScroll.dragComponent = true;
      if (window.onlinkScroll.pointer) {
        window.onlinkScroll.pointer.active = false;
        window.onlinkScroll.pointer.move = false;
      }
    }
    if (event.type === "mousedown") {
      event.stopPropagation();
    }
  }

  function unlockVirtualScroll() {
    if (window.onlinkScroll) {
      window.onlinkScroll.dragComponent = false;
    }
  }

  container.addEventListener("mousedown", lockVirtualScroll, false);
  container.addEventListener("pointerdown", lockVirtualScroll, { passive: true });
  window.addEventListener("mouseup", unlockVirtualScroll, { passive: true });
  window.addEventListener("pointerup", unlockVirtualScroll, { passive: true });
  window.addEventListener("pointercancel", unlockVirtualScroll, { passive: true });

  return function cleanupScrollIsolation() {
    container.removeEventListener("mousedown", lockVirtualScroll, false);
    container.removeEventListener("pointerdown", lockVirtualScroll);
    window.removeEventListener("mouseup", unlockVirtualScroll);
    window.removeEventListener("pointerup", unlockVirtualScroll);
    window.removeEventListener("pointercancel", unlockVirtualScroll);
    unlockVirtualScroll();
  };
}

export function createViewer(container) {
  var width = container.clientWidth || 640;
  var height = container.clientHeight || 360;
  var desktop = isDesktop();
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 80);
  var renderer = new THREE.WebGLRenderer({
    antialias: desktop,
    alpha: true,
    powerPreference: "high-performance",
    stencil: false,
    depth: true
  });

  var currentDpr = getRestDpr();
  renderer.setPixelRatio(currentDpr);
  renderer.setSize(width, height, false);
  configureRenderer(renderer);
  renderer.shadowMap.enabled = false;
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.setAttribute("aria-hidden", "true");
  renderer.domElement.style.touchAction = "pan-y";
  container.appendChild(renderer.domElement);

  applyStudioEnvironment(scene, renderer);
  addStudioLights(scene);

  scene.add(createGround());
  scene.add(createGrid());

  var controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = !reducedMotion;
  controls.dampingFactor = 0.12;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = false;
  controls.maxPolarAngle = Math.PI / 2 - 0.04;
  controls.minPolarAngle = 0.28;
  controls.rotateSpeed = 0.72;
  applyDefaultCamera(camera, controls);

  enablePanYOrbit(controls, renderer.domElement);
  var cleanupScrollIsolation = isolateFromVirtualScroll(container);

  var preparedModels = new Map();
  var currentModel = null;
  var currentModelId = null;
  var raf = 0;
  var renderUntil = 0;
  var introState = null;
  var transitionState = null;
  var isInteracting = false;
  var isVisible = true;
  var disposed = false;
  var resizeObserver = null;

  function setDynamicDpr(targetDpr) {
    if (Math.abs(currentDpr - targetDpr) < 0.01) return;
    currentDpr = targetDpr;
    renderer.setPixelRatio(currentDpr);
    renderer.setSize(container.clientWidth || width, container.clientHeight || height, false);
  }

  function renderFrame(now) {
    raf = 0;
    if (disposed || !isVisible) return;

    if (transitionState && currentModel) {
      var tt = Math.min(1, (now - transitionState.start) / transitionState.duration);
      var easedT = 1 - Math.pow(1 - tt, 3);
      var scale = transitionState.fromScale + (1 - transitionState.fromScale) * easedT;
      var rotY = transitionState.fromRotY * (1 - easedT);
      var posY = transitionState.fromPosY * (1 - easedT);

      currentModel.scale.setScalar(scale);
      currentModel.rotation.y = rotY;
      currentModel.position.y = posY;

      if (!isInteracting && typeof transitionState.toTheta === "number") {
        var sph = new THREE.Spherical(
          DEFAULT_SPHERICAL.radius,
          DEFAULT_SPHERICAL.phi,
          transitionState.fromTheta + (transitionState.toTheta - transitionState.fromTheta) * easedT
        );
        camera.position.setFromSpherical(sph).add(CAMERA_TARGET);
        camera.lookAt(CAMERA_TARGET);
        controls.target.copy(CAMERA_TARGET);
      }

      if (tt >= 1) {
        currentModel.scale.setScalar(1);
        currentModel.rotation.y = 0;
        currentModel.position.y = 0;
        transitionState = null;
      }
    } else if (introState) {
      var t = Math.min(1, (now - introState.start) / introState.duration);
      var eased = 1 - Math.pow(1 - t, 3);
      var spherical = new THREE.Spherical(
        DEFAULT_SPHERICAL.radius,
        DEFAULT_SPHERICAL.phi,
        introState.from + (introState.to - introState.from) * eased
      );
      camera.position.setFromSpherical(spherical).add(CAMERA_TARGET);
      camera.lookAt(CAMERA_TARGET);
      controls.target.copy(CAMERA_TARGET);
      if (t >= 1) introState = null;
    } else {
      controls.update();
    }

    renderer.render(scene, camera);

    if (transitionState || introState || now < renderUntil) {
      raf = requestAnimationFrame(renderFrame);
    } else if (currentDpr < getRestDpr()) {
      // Renderiza um último frame nítido em repouso e encerra o loop (0% GPU ociosa)
      setDynamicDpr(getRestDpr());
      renderer.render(scene, camera);
    }
  }

  function requestRender(duration) {
    if (disposed || !isVisible) return;
    renderUntil = Math.max(renderUntil, performance.now() + (duration || 60));
    if (!raf) {
      raf = requestAnimationFrame(renderFrame);
    }
  }

  controls.addEventListener("start", function () {
    introState = null;
    transitionState = null;
    if (currentModel) {
      currentModel.scale.setScalar(1);
      currentModel.rotation.y = 0;
      currentModel.position.y = 0;
    }
    isInteracting = true;
    setDynamicDpr(1.0);
    requestRender(180);
  });

  controls.addEventListener("change", function () {
    requestRender(isInteracting ? 180 : 220);
  });

  controls.addEventListener("end", function () {
    isInteracting = false;
    requestRender(260);
  });

  function resize() {
    if (disposed) return;
    var nextWidth = container.clientWidth;
    var nextHeight = container.clientHeight;
    if (!nextWidth || !nextHeight) return;
    width = nextWidth;
    height = nextHeight;
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    currentDpr = getRestDpr();
    renderer.setPixelRatio(currentDpr);
    renderer.setSize(nextWidth, nextHeight, false);
    requestRender(50);
  }

  if ("ResizeObserver" in window) {
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
  } else {
    window.addEventListener("resize", resize);
  }

  function prepareModel(machineId, gltfScene) {
    if (preparedModels.has(machineId)) {
      return preparedModels.get(machineId);
    }
    if (!gltfScene) return null;

    var normalized = normalizeModel(gltfScene, {
      renderer: renderer,
      highPerf: desktop
    });

    if (preparedModels.size >= MAX_CACHED_MODELS) {
      var oldestKey = preparedModels.keys().next().value;
      if (oldestKey !== currentModelId) {
        var oldestGroup = preparedModels.get(oldestKey);
        preparedModels.delete(oldestKey);
        disposeObject(oldestGroup);
      }
    }

    preparedModels.set(machineId, normalized);
    return normalized;
  }

  function setModel(machineId, gltfScene, options) {
    var prevId = currentModelId;
    if (currentModel) {
      currentModel.scale.setScalar(1);
      currentModel.rotation.y = 0;
      currentModel.position.y = 0;
      scene.remove(currentModel);
      currentModel = null;
    }

    if (preparedModels.has(machineId)) {
      currentModel = preparedModels.get(machineId);
      preparedModels.delete(machineId);
      preparedModels.set(machineId, currentModel);
    } else if (gltfScene) {
      currentModel = prepareModel(machineId, gltfScene);
    }

    if (!currentModel) return null;
    currentModelId = machineId;

    scene.add(currentModel);
    try {
      renderer.compile(scene, camera);
    } catch (e) { /* ignore compile warning */ }

    var shouldTransition =
      options &&
      options.transition &&
      prevId !== null &&
      prevId !== machineId &&
      !reducedMotion;

    if (shouldTransition) {
      var direction = options.direction && options.direction < 0 ? -1 : 1;
      var currentOffset = camera.position.clone().sub(CAMERA_TARGET);
      var currentSpherical = new THREE.Spherical().setFromVector3(currentOffset);
      var targetTheta =
        typeof options.cameraTheta === "number"
          ? options.cameraTheta
          : DEFAULT_SPHERICAL.theta;

      setDynamicDpr(1.0);
      transitionState = {
        start: performance.now(),
        duration: 520,
        fromScale: 0.86,
        fromRotY: -0.36 * direction,
        fromPosY: -0.1,
        fromTheta: currentSpherical.theta,
        toTheta: targetTheta
      };
      currentModel.scale.setScalar(transitionState.fromScale);
      currentModel.rotation.y = transitionState.fromRotY;
      currentModel.position.y = transitionState.fromPosY;
      requestRender(560);
    } else {
      currentModel.scale.setScalar(1);
      currentModel.rotation.y = 0;
      currentModel.position.y = 0;
      requestRender(80);
    }

    return currentModel;
  }

  function playIntro() {
    if (reducedMotion || !currentModel) {
      requestRender(50);
      return;
    }
    setDynamicDpr(1.0);
    introState = {
      start: performance.now(),
      from: DEFAULT_SPHERICAL.theta,
      to: DEFAULT_SPHERICAL.theta + 0.65,
      duration: 950
    };
    requestRender(980);
  }

  function hasModel(machineId) {
    return preparedModels.has(machineId);
  }

  function activate() {
    if (disposed) return;
    isVisible = true;
    if (currentModel && !transitionState) {
      currentModel.scale.setScalar(1);
      currentModel.rotation.set(0, 0, 0);
      currentModel.position.set(0, 0, 0);
      currentModel.updateMatrixWorld(true);
    }
    resize();
    requestRender(80);
  }

  function deactivate() {
    isVisible = false;
    introState = null;
    transitionState = null;
    if (currentModel) {
      currentModel.scale.setScalar(1);
      currentModel.rotation.set(0, 0, 0);
      currentModel.position.set(0, 0, 0);
      currentModel.updateMatrixWorld(true);
    }
    if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    introState = null;
    transitionState = null;
    if (raf) cancelAnimationFrame(raf);
    if (resizeObserver) resizeObserver.disconnect();
    else window.removeEventListener("resize", resize);

    cleanupScrollIsolation();
    controls.dispose();

    preparedModels.forEach(function (group) {
      scene.remove(group);
      disposeObject(group);
    });
    preparedModels.clear();
    currentModel = null;
    currentModelId = null;

    disposeStudioEnvironment(scene);
    renderer.dispose();
    if (renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  }

  return {
    prepareModel: prepareModel,
    setModel: setModel,
    playIntro: playIntro,
    hasModel: hasModel,
    activate: activate,
    deactivate: deactivate,
    requestRender: requestRender,
    resize: resize,
    dispose: dispose,
    get canvas() {
      return renderer.domElement;
    }
  };
}

function enablePanYOrbit(controls, el) {
  var startX = 0;
  var startY = 0;
  var lastX = 0;
  var lastY = 0;
  var lock = null;
  var pointerId = null;
  var spherical = new THREE.Spherical();
  var offset = new THREE.Vector3();

  el.addEventListener("pointerdown", function (event) {
    if (event.pointerType !== "touch") return;
    event.stopImmediatePropagation();
    startX = lastX = event.clientX;
    startY = lastY = event.clientY;
    lock = null;
    pointerId = event.pointerId;
  }, true);

  el.addEventListener("pointermove", function (event) {
    if (event.pointerType !== "touch" || pointerId !== event.pointerId) return;
    var dx = event.clientX - lastX;
    var dy = event.clientY - lastY;

    if (!lock) {
      var totalX = event.clientX - startX;
      var totalY = event.clientY - startY;
      if (Math.abs(totalX) < 10 && Math.abs(totalY) < 10) return;
      lock = Math.abs(totalX) > Math.abs(totalY) * 1.15 ? "orbit" : "scroll";
      if (lock === "orbit") {
        try { el.setPointerCapture(event.pointerId); } catch (err) { /* ignore */ }
      }
    }

    lastX = event.clientX;
    lastY = event.clientY;

    if (lock !== "orbit") return;

    if (event.cancelable) event.preventDefault();

    offset.copy(controls.object.position).sub(controls.target);
    spherical.setFromVector3(offset);
    spherical.theta -= (2 * Math.PI * dx) / (el.clientHeight || 300) * controls.rotateSpeed;
    spherical.phi -= (2 * Math.PI * dy) / (el.clientHeight || 300) * controls.rotateSpeed;
    spherical.phi = THREE.MathUtils.clamp(spherical.phi, controls.minPolarAngle, controls.maxPolarAngle);
    spherical.makeSafe();
    controls.object.position.setFromSpherical(spherical).add(controls.target);
    controls.object.lookAt(controls.target);
    controls.update();
  }, { capture: true, passive: false });

  function endTouch(event) {
    if (pointerId !== event.pointerId) return;
    pointerId = null;
    lock = null;
  }

  el.addEventListener("pointerup", endTouch, true);
  el.addEventListener("pointercancel", endTouch, true);
}
