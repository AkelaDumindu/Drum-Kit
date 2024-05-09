
var numberOfButton = document.querySelectorAll('.drum').length;
for(var i=0; i<numberOfButton; i++){

    document.querySelectorAll('button')[i].addEventListener('click', event);
}

function event() {
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);


}

    document.addEventListener("keypress", function(next){
        makeSound(next.key);
        makeAnimation(next.key);
    });

    function makeSound(key){
        switch (key){
            case "w":
                var audio = new Audio("sound/tom-1.mp3");
                audio.play();
                break;

            case "a":
                var audio = new Audio("sound/tom-2.mp3");
                audio.play();
                break;

            case "s":
                var audio = new Audio("sound/tom-3.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("sound/tom-4.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("sound/snare.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sound/crash.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sound/kick-bass.mp3");
                audio.play();
                break;


            default: console.log(buttonInnerHTML);

        }
    }

    function makeAnimation(currentkey){

        var activeButton = document.querySelector("."+currentkey);
        activeButton.classList.add("pressed");
        setTimeout(function (){
            activeButton.classList.remove("pressed");
        },100)
    }
