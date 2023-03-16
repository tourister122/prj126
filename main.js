s1="";
s2="";
function preload(){
    s1= loadSound("m1.mp3");
    s2= loadSound("m2.mp3");
}
function setup(){
    canvas=createCanvas(600,335);
    canvas.center();
    video=createCapture(VIDEO);
}
function draw(){
    image(video,0,0,600,335);
}