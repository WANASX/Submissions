function math() {
  var soesX2 = document.getElementById("shoe_size").value;
  var birth = document.getElementById("year").value;
  var soesX2 = (soesX2 * 2 + 5) * 50 - birth + 1766;

  alert(soesX2);
}
