const material = new THREE.MeshLambertMaterial({ color: 0x348feb });

const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(), material);

x3.add(cube);

scene.add(cube);

const circle = new THREE.Mesh(
  new THREE.CircleBufferGeometry(0.5, 20),
  material
);
circle.position.x = -2;
circle.rotation.x = THREE.MathUtils.degToRad(-90);
scene.add(circle);

// radius height radialSegments heightSegments
const cone = new THREE.Mesh(new THREE.ConeBufferGeometry(0.3, 0.5, 20));

cone.position.x = -4;

scene.add(cone);

x3.add(cone, { label: "cone" });

x3.add(circle, { label: "circle" });

x3.add(cube, { label: "cube" });

renderer.setAnimationLoop(() => {
  x3.tick();

  x3.fps(() => {
    renderer.render(scene, camera);
  });
});
