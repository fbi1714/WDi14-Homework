var app = app || {};

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
    var planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xCDF8DC
    });

    app.plane = new THREE.Mesh(planeGeometry, planeMaterial);

    app.plane.position.x = 10;
    app.plane.position.y = -2;
    app.plane.position.z = 0;

    app.scene.add(app.plane);


    var target = document.getElementById("output");
    target.appendChild(app.renderer.domElement);
    app.renderer.render(app.scene, app.camera);

};

// IMPORTANT LINE OF CODE TO LEARN AND KEEP IN MIND
window.onload = app.init;
