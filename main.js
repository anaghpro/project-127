song = "";
song2 = "";
song_status = '';
song2_status = '';
coffin_dance_bna = 0;
coffin_dance_dan = 0;
bna_kobji_x = 0;
dan_kobji_x = 0;
bna_kobji_y = 0;
dan_kobji_y = 0;

function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    kagoj = createCanvas(600, 500)
    kagoj.position(370, 200);

    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
    song_status = song.isPlaying();
    song2_status = song2.isPlaying();
    fill('red');
    stroke('red');
    if (coffin_dance_bna > 0.2) {
        circle(bna_kobji_x, bna_kobji_y, 20);
        
      song.stop();
if(song2_status==false){

song2.play
        document.getElementById("song").innerHTML = "Playing song Industry Baby ";

    }}
    fill('gray');
    stroke('gray');
    if (coffin_dance_dan > 0.2) {
        circle(dan_kobji_x, dan_kobji_y, 20);
        
      song2.stop();
if(song_status==false){

song.play
        document.getElementById("song").innerHTML = "Playing song Talking To The Moon ";

    }}   
    
    

}

function gan_bajao() {
    song.play();
    song.setVolume(0.5);
    song.rate(1)
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        bna_kobji_x = results[0].pose.leftWrist.x;
        bna_kobji_y = results[0].pose.leftWrist.y;
        dan_kobji_y = results[0].pose.rightWrist.y;
        dan_kobji_x = results[0].pose.rightWrist.x;
        coffin_dance_bna = results[0].pose.keypoints[9].score;
        coffin_dance_dan = results[0].pose.keypoints[10].score;
        console.log(bna_kobji_x, bna_kobji_y, dan_kobji_x, dan_kobji_y, coffin_dance_bna, coffin_dance_dan);
    }
}