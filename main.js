img = "";

function setup() {
    canvas = createCanvas(450, 350);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 450, 350);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    console.log(result);
}