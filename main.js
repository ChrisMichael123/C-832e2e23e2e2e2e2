Webcam.set({
    width:350, 
    height:300,
    image_format:'png',
    png_quality:90
});
webcam=document.getElementById("webcam");
Webcam.attach('#webcam');
function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    })
}
console.log("ml5 version: " , ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EfMw7rWBF/model.json', modelLoaded);
function modelLoaded(){
    console.log(modelLoaded);
}
function Dectect(){
    img=document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("Accuracy").innerHTML=results[0].confidence;
}
}