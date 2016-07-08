var app = app || {};

app.step = 0.02;
app.bouncingSpeed = 0.04;

app.animate = function () {
  app.stats.update();


  app.step += app.bouncingSpeed;
  app.sphere.position.x = 20 + (10 *(Math.sin(app.step)));
  app.sphere.position.y = 2 + (10 *(Math.abs(Math.sin(app.step))));
  app.sphere.position.z = 2 + (10 *(Math.abs(Math.cos(app.step))));

  app.cube.position.x = 20 + (10 *(Math.cos(app.step)));
  app.cube.position.y = 2 + (10 *(Math.abs(Math.sin(app.step))));
  app.cube.position.z = 2 + (10 *(Math.abs(Math.sin(app.step))));

  app.cube.rotation.x += 0.01;
  app.cube.rotation.y += 0.01;
  app.cube.rotation.z += 0.01;

  requestAnimationFrame( app.animate );
  app.renderer.render( app.scene, app.camera );
};

app.addStats = function () {
  var stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.top = "0px";
  stats.domElement.style.left = "0px";
  document.getElementById("stats").appendChild( stats.domElement );

  return stats;
};

app.init = function() {
    app.scene = new THREE.Scene();
    app.width = window.innerWidth;
    app.height = window.innerHeight;

    app.camera = new THREE.PerspectiveCamera(45, app.width / app.height, 0.1, 1000);

    app.camera.position.x = -30;
    app.camera.position.y = 40;
    app.camera.position.z = 30;
    app.camera.lookAt(app.scene.position);



    console.log("App started");

    app.renderer = new THREE.WebGLRenderer();



    app.renderer.setSize(app.width, app.height);
    app.renderer.setClearColor(0xECEFF1);
    "#ECEFF1"

    app.axes = new THREE.AxisHelper(40);
    app.scene.add(app.axes);

    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xCDF8DC
    });

    app.plane = new THREE.Mesh(planeGeometry, planeMaterial);
    app.plane.rotation.x = -0.5 * Math.PI;
    app.plane.position.x = 10;
    app.plane.position.y = -2;
    app.plane.position.z = 0;
    app.plane.receiveShadow = true;
    app.scene.add(app.plane);

    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshLambertMaterial({
      color: 0xFF8F00,
      // wireframe: true
    });
    app.cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
    app.cube.position.x = -4;
    app.cube.position.y = 3;
    app.cube.position.z = 0;
    app.cube.castShadow = true;
    app.scene.add( app.cube );

    var sphereGeometry = new THREE.SphereGeometry( 6, 30, 30 );
    var sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0x039BE5,
      // wireframe: true
    });

    app.sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    app.sphere.position.x = 15;
    app.sphere.position.y = 10;
    app.sphere.position.z = 15;
    app.sphere.castShadow = true;
    app.scene.add( app.sphere );

    app.pointLight = new THREE.PointLight( 0xFFFFFF );
    app.pointLight.position.set( 150, 1000, 300);
    app.scene.add( app.pointLight );

    app.helper = new THREE.CameraHelper( app.pointLight.shadow.camera );
    app.scene.add( app.helper );

    app.controls = new THREE.OrbitControls( app.camera, app.renderer.domElement );


    var target = document.getElementById("output");
    target.appendChild(app.renderer.domElement);
    app.renderer.render(app.scene, app.camera);

    app.stats = app.addStats();
    app.animate();
};

// IMPORTANT LINE OF CODE TO LEARN AND KEEP IN MIND
window.onload = app.init;
