// Construindo um sistema planetário.

import * as THREE 			from './resources/three.js/r126/build/three.module.js';

var scene 			= null;
var renderer		= null;
var camera 			= null;
var sistemaSolar	= null;
var solMat 			= new THREE.Matrix4();
var terraMat 		= new THREE.Matrix4();
var luaMat 			= new THREE.Matrix4();
var rotDia 			= 0.0;
var rotAno			= 0.0;
var rotMes			= 0.0;

function main() {

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	renderer.setSize(window.innerHeight*0.7, window.innerHeight*0.7);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );
		
	// Sistema Solar: Sol, Terra e Lua
	var sphereGeometry 		= new THREE.SphereGeometry( 0.4, 10, 10);                 
	var sphereMat 			= new THREE.MeshBasicMaterial( {wireframe:true} );
	sistemaSolar 			= new THREE.InstancedMesh( sphereGeometry, sphereMat, 3 );
	sistemaSolar.needsUpdate = true;

	scene.add(sistemaSolar);

	const instanceColors 	= [ 0xffff00, 0x0000FF, 0xaaaaaa ];

	for (let i = 0 ; i < 3 ; i++) 
		sistemaSolar.setColorAt ( i, new THREE.Color(instanceColors[i]));

	renderer.clear();
	requestAnimationFrame(animate);
};

function animate() {

	rotMes 	+= 0.007;		// angulo em radianos

	solMat.identity();
	solMat.makeRotationY(rotMes);
	sistemaSolar.setMatrixAt( 0, solMat );

	terraMat.identity();
	terraMat.makeScale(0.25, 0.25, 0.25);
	sistemaSolar.setMatrixAt( 1, terraMat );

	luaMat.identity();
	luaMat.makeScale(0.05, 0.05, 0.05);
	sistemaSolar.setMatrixAt( 2, luaMat );

	sistemaSolar.instanceMatrix.needsUpdate = true;

	renderer.render(scene, camera);

	requestAnimationFrame(animate);
}

main();
