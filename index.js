var h3value = document.querySelector("h3");
var firstColor =document.querySelector(".color1");
var secondColor= document.querySelector(".color2");
var bodyBackground=document.getElementById("body");

function changeBackground() {
  bodyBackground.style.background=
  "linear-gradient(to right, "
  +firstColor.value
  +"," 
  +secondColor.value
  +")";
}
firstColor.addEventListener("input",changeBackground)
secondColor.addEventListener("input",changeBackground)