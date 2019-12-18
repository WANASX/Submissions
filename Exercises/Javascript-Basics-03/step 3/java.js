var green = document.getElementById("green");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var text = document.getElementById("text");
green.addEventListener("click", function() {
  text.style.cssText = "color:green;";
});
red.addEventListener("click", function() {
  text.style.cssText = "color:red;";
});
blue.addEventListener("click", function() {
  text.style.cssText = "color:blue;";
});
