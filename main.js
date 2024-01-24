COCOSSD = "";

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center();

    video = createCapture(VIDEO);
    video.size(640, 420);
    video.hide();

}

function start() {
    objectDetecter = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
    input = document.getElementById("input").value;
}

function modelLoaded() {
    console.log("model is loaded");
    status = true;
}

function draw() {
    image(video, 0, 0, 640, 420)
}