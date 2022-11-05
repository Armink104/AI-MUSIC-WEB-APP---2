song = "";
song1 = "";

function preload()
{
    song = loadSound("BTS-Mikrokosmos.mp3");
    song1 = loadSound("Harry-Potter.mp3");
}

function setup() 
{
    canvas = createCanvas(600, 500); 
    canvas.position(465, 240);
    video = createCapture(VIDEO); 
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500)
}

function play()
{
    song.play();
}

function Stop()
{
    song.stop();
}