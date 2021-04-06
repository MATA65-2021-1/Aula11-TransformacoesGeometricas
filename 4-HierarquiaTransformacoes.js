// Construindo Hieraquias de Objetos.

import * as THREE 			from './resources/three.js/r126/build/three.module.js';

var renderer;
var scene;
var camera;
var rotLine1 = 0.05;
var rotLine2 = 0.07;
var rotLine3 = 0.03;
var rotWorld = 0.01;
var groupSecondLine;
var groupThirdLine;
var groupBox;
var groupSphere;
var groupRing;
var groupWorld;

function main() {

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	renderer.setSize(window.innerWidth*0.7, window.innerHeight*0.7);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -10.0, 10.0 );
	scene.add( camera );

	groupWorld = new THREE.Object3D();

	groupWorld.add( new THREE.AxesHelper( 1.0 ) );
	
	// Box
	groupBox = new THREE.Object3D();
	
	var box = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );              
	var boxMat = new THREE.MeshBasicMaterial( {color: 0x0000ff,wireframe:true} );
	var cube = new THREE.Mesh( box, boxMat );
	groupBox.add( cube );
	var boxAxis = new THREE.AxesHelper( 0.3 );
	groupBox.add( boxAxis );

	groupBox.position.set(-0.7, 0.7, 0.0);
	groupBox.rotateOnAxis(new THREE.Vector3(1, 1, 1).normalize(), -Math.PI/4); 
	groupWorld.add( groupBox );	
	
	// Sphere
	groupSphere = new THREE.Object3D();
	
	var sphereGeometry = new THREE.SphereGeometry( 0.2, 10, 10 );                 
	var sphereMat = new THREE.MeshBasicMaterial( {color: 0xff0000, wireframe:true} );
	var sphere = new THREE.Mesh( sphereGeometry, sphereMat );
	groupSphere.add( sphere );	
	var sphereAxis = new THREE.AxesHelper( 0.4 );
	groupSphere.add( sphereAxis );
	groupSphere.position.set(0.0, 0.7, 0.0);
	groupWorld.add( groupSphere );	
	
	// Ring
	groupRing = new THREE.Object3D();
	
	var ringGeometry = new THREE.RingGeometry( 0.2, 0.1, 15, 3 );                 
	var ringMat = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe:true} );
	var ring = new THREE.Mesh( ringGeometry, ringMat );
	groupRing.add( ring );	
	var ringAxis = new THREE.AxesHelper( 0.4 );
	groupRing.add( ringAxis );
	groupRing.position.set(0.7, 0.7, 0.0);
	groupWorld.add( groupRing );	
	
	// Group Second Line
	groupSecondLine = new THREE.Object3D();
	
	var secondLineAxis = new THREE.AxesHelper( 0.4 );
	groupSecondLine.add( secondLineAxis );
	
	// TorusKnot
	var torusKnotGeometry = new THREE.TorusKnotGeometry( 0.2, 0.03, 60, 20, 3, 2 );                 
	var torusKnotMat = new THREE.MeshBasicMaterial( {color: 0x7070aa, wireframe:true} );
	var torusKnot = new THREE.Mesh( torusKnotGeometry, torusKnotMat );
	torusKnot.rotateOnAxis(new THREE.Vector3(1, 1, 1).normalize(), -Math.PI/4); 
	groupSecondLine.add( torusKnot );
	
	// Cilinder
	var cilinderGeometry = new THREE.CylinderGeometry( 0.1, 0.1, 0.5, 30);                 
	var cilinderMat = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe:true} );
	var cilinder = new THREE.Mesh( cilinderGeometry, cilinderMat );
	cilinder.position.set(0.7, 0.0, 0.0);
	cilinder.rotateOnAxis(new THREE.Vector3(1, 0, 0).normalize(), -Math.PI/4); 
	groupSecondLine.add( cilinder );	
	
	// Icosahedron
	var icosahedronGeometry = new THREE.IcosahedronGeometry(0.2);                 
	var icosahedronMat = new THREE.MeshBasicMaterial( {color: 0x00ffff, wireframe:true} );
	var icosahedron = new THREE.Mesh( icosahedronGeometry, icosahedronMat );
	icosahedron.position.set(1.4, 0.0, 0.0);
	groupSecondLine.add( icosahedron );	
	
	groupSecondLine.position.set(-0.7, 0.0, 0.0);
	
	groupWorld.add( groupSecondLine );
	
	// Group Third Line
	groupThirdLine = new THREE.Object3D();
	
	var thirdLineAxis = new THREE.AxesHelper( 0.5 );
	groupThirdLine.add( thirdLineAxis );
	
	// Plane
	var planeGeometry = new THREE.PlaneBufferGeometry(0.2, 0.5, 10, 10);                 
	var planeMat = new THREE.MeshBasicMaterial( {color: 0xff00ff, wireframe:true} );
	var plane = new THREE.Mesh( planeGeometry, planeMat );
	plane.rotateOnAxis(new THREE.Vector3(1, 1, 1).normalize(), -Math.PI/4); 
	groupThirdLine.add( plane );	
	
	// Tetrahedron
	var tetrahedronGeometry = new THREE.TetrahedronGeometry(0.2);                 
	var tetrahedronMat = new THREE.MeshBasicMaterial( {color: 0x70aa70, wireframe:true} );
	var tetrahedron = new THREE.Mesh( tetrahedronGeometry, tetrahedronMat );
	tetrahedron.position.set( -0.7, 0.0, 0.0);
	tetrahedron.rotateOnAxis(new THREE.Vector3(1, 1, 1).normalize(), -Math.PI/6); 
	groupThirdLine.add( tetrahedron );	
	
	// Dodecahedron
	var dodecahedronGeometry = new THREE.DodecahedronGeometry(0.2);                 
	var dodecahedronMat = new THREE.MeshBasicMaterial( {color: 0xaa7070, wireframe:true} );
	var dodecahedron = new THREE.Mesh( dodecahedronGeometry, dodecahedronMat );
	dodecahedron.position.set( -1.4, 0.0, 0.0);
	dodecahedron.rotateOnAxis(new THREE.Vector3(1.0, 1.0, 1.0).normalize(), -Math.PI/6); 
	groupThirdLine.add( dodecahedron );	
	
	groupThirdLine.position.set(0.7, -0.7, 0.0);
	
	groupWorld.add( groupThirdLine );

	scene.add(groupWorld);

	renderer.setAnimationLoop(animate);
};

function animate() {

	groupBox.rotateX(rotLine1);
	groupSphere.rotateY(rotLine1);
	groupRing.rotateZ(rotLine1);

	groupSecondLine.rotateY(rotLine2);
	groupThirdLine.rotateX(rotLine3);

	// groupWorld.rotateOnAxis(new THREE.Vector3(1.0, 1.0, 1.0).normalize(), rotWorld);

	renderer.render(scene, camera);
	
	renderer.setAnimationLoop(animate);
}

main();
