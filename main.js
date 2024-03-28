// Initialize variables to store wrist coordinates and score
let rightWristX = 0;
let rightWristY = 0;
let rightWristScore = 0;

let ball_touch_paddle_sound;
let missed_sound;

function preload(){
    ball_touch_paddle_sound = loadSound('ball_touch_paddle.wav');
    missed_sound = loadSound('missed.wav');

}

function setup() {
    // Set up canvas and webcam
    let canvas = createCanvas(640, 480);
    canvas.parent('canvasContainer'); // Placing canvas inside the div

    // Access webcam and hide view
    let video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();

    // Initialize poseNet
    let poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    if (rightWristScore > 0.2) {
        fill(255, 0, 0); // Red color
        stroke(255, 0, 0); // Red color
        circle(rightWristX, rightWristY, 50); // Draw circle on right wrist
    }
    if(game_status == "start"){
        paddle1Y = rightWristY;
    }
}
game_status = "start"
function startGame() {
    document.getElementById().innerHTML = "Game is loaded"
}

function restart() {
    // Function to restart the game (to be defined)
}

function modelLoaded() {
    console.log('Model is loaded');
}

function gotPoses(results) {
    if (results.length > 0) {
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        rightWristScore = results[0].pose.rightWrist.confidence;
    }
}
