var adiv = document
  .querySelector(".container")
  .addEventListener("mouseover", function() {
    var img1 = document.getElementById("image1");
    var img2 = document.getElementById("image2");
    var img3 = document.getElementById("image3");
    var img4 = document.getElementById("image4");
    var img5 = document.getElementById("image5");
    img1.src = "./images/image1_2.jpg";
    img2.src = "./images/image2_2.jpg";
    img3.src = "./images/image3_2.jpg";
    img4.src = "./images/image4_2.jpg";
    img5.src = "./images/image5_2.jpg";
  });
