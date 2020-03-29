
for(var x=0; x<document.querySelectorAll(".drum").length; x++)
{
document.querySelectorAll("button")[x].addEventListener("click", function(){
var buttonHtml=this.innerHTML;  
  makeSound(buttonHtml);
makeAnimation(buttonHtml);
});
}




document.addEventListener("keypress", function(event){
  makeSound(event.key);
  makeAnimation(event.key);
  });



function makeSound(key){

  switch (key) {

  case "w":
  var aud = new Audio("sounds/tom-1.mp3");
  aud.play();
  break;
    
  case "a":

    var aud = new Audio("sounds/crash.mp3");
    aud.play();

      break;
      case "s":

      var aud = new Audio("sounds/kick-bass.mp3");
      aud.play();

        break;
        case "d":

        var aud = new Audio("sounds/snare.mp3");
        aud.play();

          break;
          case "j":

          var aud = new Audio("sounds/tom-2.mp3");
          aud.play();

            break;
            case "k":

            var aud = new Audio("sounds/tom-3.mp3");
            aud.play();

              break;
              case "l":

              var aud = new Audio("sounds/tom-4.mp3");
              aud.play();

                break;
default:

}

}



function makeAnimation(key)
{
document.querySelector("."+key).classList.add("pressed");
setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed");
  }, 3000);
}



