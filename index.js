
var randomNumber = Math.floor(Math.random()*6) + 1;

var randomImage = "dice" + randomNumber + ".png";

var imageSource = "image/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageSource2 = "image/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imageSource2);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 win!";
}else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 wins";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}

