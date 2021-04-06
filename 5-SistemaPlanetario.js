// Construindo um sistema planetário.

import * as THREE 			from './resources/three.js/r126/build/three.module.js';

var scene 		= null;
var renderer	= null;
var camera 		= null;
var sol 		= null;
var lua 		= null;
var terra 		= null;

function main() {

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));
	renderer.setSize(window.innerHeight*0.7, window.innerHeight*0.7);

	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );
		
	// Sistema Solar

	// Eixo do Sol
	var sAxis = new THREE.AxesHelper(0.6);

	// Sol
	var sphereGeometry = new THREE.SphereGeometry( 0.4, 20, 20);                 
	var sphereMat = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe:true} );
	sol = new THREE.Mesh( sphereGeometry, sphereMat );
	sol.add(sAxis);
	
	// Eixo da Terra
	var tAxis = new THREE.AxesHelper(0.15);

	// Terra
	sphereGeometry = new THREE.SphereGeometry( 0.1, 20, 20);                 
	sphereMat = new THREE.MeshBasicMaterial( {color: 0x0000ff, wireframe:true} );
	terra = new THREE.Mesh( sphereGeometry, sphereMat );
	terra.add(tAxis);

				
	// Eixo da Lua
	var lAxis = new THREE.AxesHelper(0.04);

	// Lua
	sphereGeometry = new THREE.SphereGeometry( 0.03, 10, 10 );                 
	sphereMat = new THREE.MeshBasicMaterial( {color: 0xaaaaaa, wireframe:true} );
	lua = new THREE.Mesh( sphereGeometry, sphereMat );
	lua.add(lAxis);

	scene.add( lua );			
	scene.add( terra );	
	scene.add( sol);	

	renderer.clear();
	requestAnimationFrame(animate);
};

function animate() {

	let rotSol 		= 0.005;	// Rotação do Sol ao redor de seu em radianos
	let rotTerra 	= 0.09;		// Rotação da Terra ao redor de seu eixo em radianos
	let rotLua 		= 0.01;		// Rotação da Lua ao redor da Terra em radianos

	let pLua 	= new THREE.Vector3(0.9, 0.0, 0.0);
	let pTerra 	= new THREE.Vector3(0.7, 0.0, 0.0);

	sol.rotateY(rotSol);
	sol.updateMatrix();

	lua.position.copy(pLua);
	lua.updateMatrix();

	terra.position.copy(pTerra);
	terra.updateMatrix();

	renderer.render(scene, camera);

	requestAnimationFrame(animate);
}

main();
