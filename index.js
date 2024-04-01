// const numbersOfDrumButtons = document.querySelectorAll(".drum").length;

// for (let i = 0; i < numbersOfDrumButtons; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     var buttonInnerHTML=this.innerHTML;

//     makeSound(buttonInnerHTML);
//     buttonAnimation(buttonInnerHTML);
//   });
// }

// document.addEventListener("Keypress",function(event){
//   makeSound(event.key);
//   buttonAnimation(event.key);
// });

// function makeSound(key){
//   switch(key){
//     case "w":
//       var tom1=new Audio("sounds/tom-1.mp3");
//       tom1.play();
//       break;
//     case "a":
//       var tom2=new Audio("sounds/tom-2.mp3");
//       tom2.play();
//       break;
//     case "s":
//       var tom3=new Audio("sounds/snare.mp3");
//       tom3.play();
//       break;
//     case "d":
//       var tom4=new Audio("sounds/tom-3.mp3");
//       tom4.play();
//       break;
//     case "j":
//       var tom5=new Audio("sounds/tom-4.mp3");
//       tom5.play();
//       break;
//     case "k":
//       var tom6=new Audio("sounds/kick-bass.mp3");
//       tom6.play();
//       break;
//     case "l":
//       var tom7=new Audio("sounds/crash.mp3");
//       tom7.play();
//       break;

//       default:console.log(key);
//   }
// }

// function buttonAnimation(currentKey){
//   var activeButton = document.querySelector("."+currentKey);

//   setTimeout(function(){
//     activeButton.classList.remove("pressed");
//   },100);
// }



var noOfButton = document.querySelectorAll(".drum").length;

function showAlert() {
  var clicked = this.innerHTML;
  playSound(clicked);
  addAnimation(clicked);
}

for (var i = 0; i < noOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", 
  showAlert);
}

document.addEventListener("keypress", function (e) {
  playSound(e.key);
  addAnimation(e.key);
});

function playSound(clicked) {
  switch (clicked) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      alert("Invalid Key!!!");
      break;
  }
}

function addAnimation(buttonInstance){
  var btn = document.querySelector("."+buttonInstance);
  btn.classList.add("pressed");
  setTimeout(
    function(){btn.classList.remove("pressed")}
    , 100
  );
}
