import * as THREE from "three";
import { rejuvenateMaterials } from "./materials.js";

export const TARGET_SIZE = 5.2;

var TEXTURE_KEYS = [
  "map",
  "roughnessMap",
  "metalnessMap",
  "normalMap",
  "aoMap",
  "emissiveMap",
  "bumpMap",
  "displacementMap",
  "alphaMap",
  "envMap",
  "specularMap",
  "specularColorMap",
  "specularIntensityMap",
  "clearcoatMap",
  "clearcoatRoughnessMap",
  "clearcoatNormalMap",
  "transmissionMap"
];

function eachMaterial(mesh, callback) {
  var materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  materials.forEach(function (material) {
    if (material) callback(material);
  });
}

export function sanitizeMaterials(root, options) {
  rejuvenateMaterials(root, options);
}

export function fitToGround(model) {
  if (model.__onlinkNormalizedGroup) {
    var existingGroup = model.__onlinkNormalizedGroup;
    existingGroup.position.set(0, 0, 0);
    existingGroup.rotation.set(0, 0, 0);
    existingGroup.scale.setScalar(1);
    existingGroup.matrixAutoUpdate = true;
    existingGroup.updateMatrixWorld(true);
    return existingGroup;
  }

  if (model.parent) {
    model.parent.remove(model);
  }

  model.traverse(function (node) {
    node.matrixAutoUpdate = true;
  });

  model.position.set(0, 0, 0);
  model.rotation.set(0, 0, 0);
  model.scale.set(1, 1, 1);
  model.updateMatrixWorld(true);

  var box = new THREE.Box3().setFromObject(model);
  var size = box.getSize(new THREE.Vector3());
  var maxAxis = Math.max(size.x, size.y, size.z) || 1;
  model.scale.setScalar(TARGET_SIZE / maxAxis);
  model.updateMatrixWorld(true);

  var scaledBox = new THREE.Box3().setFromObject(model);
  var center = scaledBox.getCenter(new THREE.Vector3());
  model.position.x += -center.x;
  model.position.z += -center.z;
  model.position.y += -scaledBox.min.y;
  model.updateMatrixWorld(true);

  var group = new THREE.Group();
  group.add(model);
  group.updateMatrixWorld(true);

  // Congela matrizes da árvore interna do modelo para evitar recálculo por frame,
  // mantendo o grupo-raiz dinâmico para transições suaves de escala/rotação entre setores.
  group.traverse(function (node) {
    node.updateMatrix();
    node.matrixAutoUpdate = node === group;
  });

  model.__onlinkNormalizedGroup = group;
  return group;
}

export function normalizeModel(scene, options) {
  if (scene && scene.__onlinkNormalizedGroup) {
    return fitToGround(scene);
  }
  sanitizeMaterials(scene, options);
  return fitToGround(scene);
}

export function disposeObject(root) {
  if (!root) return;

  root.traverse(function (node) {
    if (node.geometry && node.geometry.dispose) node.geometry.dispose();

    eachMaterial(node, function (mat) {
      TEXTURE_KEYS.forEach(function (key) {
        var texture = mat[key];
        if (texture && texture.dispose) texture.dispose();
      });
      if (mat.dispose) mat.dispose();
    });
  });
}
