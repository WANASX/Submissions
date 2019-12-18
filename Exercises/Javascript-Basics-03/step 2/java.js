var show = document.getElementById("show");
var hide = document.getElementById("hide");
var elems = document.getElementById("texte");

function hideshow() {
  elems.style.display = "none";
}
hide.addEventListener("click", hideshow, true);

show.removeEventListener("click", hideshow, true);
