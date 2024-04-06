function callSound(ch) {
    switch (ch) {
        case "w":
            return "./sounds/tom-1.mp3";
            break;
        case "a":
            return "./sounds/tom-2.mp3";
            break;
        case "s":
            return "./sounds/tom-3.mp3";
            break;
        case "d":
            return "./sounds/tom-4.mp3";
            break;
        case "j":
            return "./sounds/snare.mp3";
            break;
        case "k":
            return "./sounds/crash.mp3";
            break;
        case "l":
            return "./sounds/kick-bass.mp3";
            break;
    }
}


for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var ch = this.innerHTML;
        var sound = callSound(ch);
        var audio = new Audio(sound);
        audio.play();
        buttonAnimation(ch);
    })

    

}


document.addEventListener("keydown", event => {
    var sound = callSound(event.key);
    var audio = new Audio(sound);
    audio.play();

    buttonAnimation(event.key);

})

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100) ;
}