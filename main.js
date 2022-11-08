img = "";
Status = "";
objects = [];
percent = 0;

function preload(){
     img = loadImage("fruits_img.jpg");
}
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    object = ml5.objectDetector("cocossd", modals);
    document.getElementById("status").innerHTML = "Status : Detecting objects";

}
function modals(){
   console.log("model is loaded");
   Status = true;
}

function gotresult(error, results) {
    if (error) {
         console.error(error);
    }
    else {
         console.log(results);
         objects = results;
    }
}

function draw() {
     image(video, 0, 0, 380, 380);
     if (Status != "") {
       for(i = 0; i < objects.length; i++){
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label+ " " + percent + "%", objects[i].x + 10, objects[i].y + 15);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
       } 
     }  
}