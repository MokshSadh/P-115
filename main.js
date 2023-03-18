function preload(){

}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video, modeloaded);
poseNet.on("pose", gotPoses );
}

function draw(){
  image(video,0,0,300,300);  
}

function takesnapshot(){
    save('my_Photo.png');
}

function modeloaded(){
    console.log("Model Is Loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("Nose X = " + results[0].pose.nose.x);
        console.log("Nose Y = " + results[0].pose.nose.y);
    }
}