var app = app || {};

app.init = function () {
  app.scene = new THREE.Scene();

  app.camera = new THREE.PerspectiveCamera;(45, app.width / app.height, 0.1, 1000 );

  console.log("App started");

  app.renderer = new THREE.WebGLRenderer();
  app.width = window.innerWidth;
  app.height = window.innerHeight;


  app.renderer.setSize( app.width, app.height );
  app.renderer.setClearColor( 0xECEFF1 ); "#ECEFF1"



  var target = document.getElementById("output");
  target.appendChild( app.renderer.domElement );

};

// IMPORTANT LINE OF CODE TO LEARN AND KEEP IN MIND
window.onload = app.init;
