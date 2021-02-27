function setup (){
 canvas = createCanvas(300, 300);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
 classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JBI9n-v9_/model.json", modelLoaded);
}
function modelLoaded(){
    console.log("modelLoaded");
}
function draw (){
    image(video, 0,0, 300, 300);
    classifier.classify(video, gotresult);
}
function gotresult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
      document.getElementById("result_name").innerHTML=results[0].label;
      confidence=results[0].confidence;
      percentage=(confidence*100).toFixed(1);
      document.getElementById("accuracy_span").innerHTML=percentage +"%";
      
    }
}