import * as THREE from "three";

var GLASS_HINTS = ["vetri", "glass", "window", "vitre", "vidro"];
var RUBBER_HINTS = ["tire", "wheel", "rubber", "track", "pneu", "esteira", "rodado"];

function includesAny(text, hints) {
  for (var i = 0; i < hints.length; i += 1) {
    if (text.indexOf(hints[i]) !== -1) return true;
  }
  return false;
}

function partKind(child, mat) {
  var name = ((child.name || "") + " " + (mat.name || "")).toLowerCase();
  if (includesAny(name, GLASS_HINTS) || mat.transparent === true || (mat.opacity !== undefined && mat.opacity < 0.95)) {
    return "glass";
  }
  if (includesAny(name, RUBBER_HINTS)) return "rubber";
  return "body";
}

function polishColorMap(map) {
  if (!map) return;
  if (map.colorSpace !== THREE.SRGBColorSpace) {
    map.colorSpace = THREE.SRGBColorSpace;
    map.needsUpdate = true;
  }
  map.anisotropy = 1;
}

function isMutedOrDark(color) {
  if (!color) return false;
  var luma = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
  var max = Math.max(color.r, color.g, color.b);
  var min = Math.min(color.r, color.g, color.b);
  var sat = max === 0 ? 0 : (max - min) / max;
  return luma < 0.38 || sat < 0.16;
}

function downgradeIfPhysical(mat) {
  if (!mat.isMeshPhysicalMaterial) return mat;
  var std = new THREE.MeshStandardMaterial({
    name: mat.name,
    color: mat.color ? mat.color.clone() : new THREE.Color(0xffffff),
    map: mat.map || null,
    roughnessMap: mat.roughnessMap || null,
    metalnessMap: mat.metalnessMap || null,
    aoMap: mat.aoMap || null,
    aoMapIntensity: mat.aoMapIntensity !== undefined ? mat.aoMapIntensity : 1,
    roughness: mat.roughness !== undefined ? mat.roughness : 0.4,
    metalness: mat.metalness !== undefined ? mat.metalness : 0.2,
    opacity: mat.opacity !== undefined ? mat.opacity : 1,
    transparent: !!mat.transparent,
    alphaTest: mat.alphaTest || 0,
    vertexColors: !!mat.vertexColors
  });
  return std;
}

function tuneMaterial(mat, kind) {
  var target = downgradeIfPhysical(mat);
  polishColorMap(target.map);

  // Desativa normalMaps pesados em malhas CAD de alta densidade para aliviar o fragment shader
  if (target.normalMap) {
    target.normalMap.dispose();
    target.normalMap = null;
  }
  if (target.emissiveMap && target.emissiveMap === target.map) {
    target.emissiveMap = null;
  }

  if (kind === "glass") {
    target.transparent = true;
    target.opacity = target.opacity && target.opacity < 1 ? Math.max(target.opacity, 0.35) : 0.42;
    target.roughness = 0.1;
    target.metalness = 0.1;
    target.envMapIntensity = 1.6;
    target.depthWrite = false;
    target.side = THREE.DoubleSide;
  } else if (kind === "rubber") {
    target.roughness = 0.82;
    target.metalness = 0.05;
    target.envMapIntensity = 0.45;
    target.side = THREE.FrontSide;
  } else {
    target.roughness = target.roughnessMap ? 0.45 : 0.34;
    if ("metalness" in target) {
      target.metalness = Math.max(target.metalness || 0, 0.22);
    }
    target.envMapIntensity = 1.15;
    if (target.color && isMutedOrDark(target.color)) {
      target.color.multiplyScalar(1.06);
    }
    target.side = THREE.FrontSide;
  }

  target.userData = target.userData || {};
  target.userData.showroom = true;
  target.needsUpdate = true;
  return target;
}

function eachSlot(mesh, callback) {
  if (Array.isArray(mesh.material)) {
    mesh.material = mesh.material.map(callback);
    return;
  }
  if (mesh.material) {
    mesh.material = callback(mesh.material);
  }
}

export function rejuvenateMaterials(root) {
  var remapped = new WeakMap();
  var toDispose = [];

  root.traverse(function (child) {
    if (!child.isMesh) return;

    child.castShadow = false;
    child.receiveShadow = false;
    child.frustumCulled = true;
    child.matrixAutoUpdate = false;
    child.updateMatrix();

    if (child.geometry && !child.geometry.boundingSphere) {
      child.geometry.computeBoundingSphere();
    }

    eachSlot(child, function (mat) {
      if (!mat) return mat;
      if (remapped.has(mat)) return remapped.get(mat);
      if (mat.userData && mat.userData.showroom) return mat;

      var kind = partKind(child, mat);
      var next = tuneMaterial(mat, kind);
      remapped.set(mat, next);
      if (next !== mat) {
        remapped.set(next, next);
        toDispose.push(mat);
      }
      return next;
    });
  });

  toDispose.forEach(function (mat) {
    if (mat.dispose) mat.dispose();
  });
}
