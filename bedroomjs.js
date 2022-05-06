img="";
status=true;
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="status Detecting object";
}
function preload(){
    img=loadImage("bed_room.jpg");
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("bed",45,75);
    noFill();
    stroke("#ff0000");
    rect(30,60,450,350);

 
}

function modelLoaded(){
    console.log("Model loaded");
    status=true;
    objectdetector.detect(img,gotResult);

}

function gotResult(error,results){
    if(error){
        console.log(error);
}
    else{
        console.log(results);
    }
}
