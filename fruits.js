img = "";
Status = [];
objects = [];

function preload(){
   img = loadImage("fruits_img.jpg");
}

function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();
    object = ml5.objectDetector("cocossd", modals);
     document.getElementById("status").innerHTML = "Status : Detecting objects";
}



function draw(){
   image(video, 0, 0, 360, 360);
   if(Status != ""){
       object.detect(video, gotresult);
       for (i = 0; i < objects.length; i++) {
           document.getElementById("status").innerHTML = "Status : Objects Detected";
           document.getElementById("object").innerHTML = "Number of objects detected are : " + objects.length;
           fill();
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + " " + percent + "%", objects[i].x + 10, objects[i].y + 15);
           noFill();
           stroke();
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }

   }
}

function modelLoded(){
    console.log("model is loaded");
    Status = true;
}

function gotResult(error, result){
     if(error){
        console.log(error);
     }
     console.log(result);
     objects = results;
}