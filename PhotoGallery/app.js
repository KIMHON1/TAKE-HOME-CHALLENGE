var fullImageBox = document.getElementById("full-image-box");
var fullImage = document.getElementById("full-image");

function openFullimage(pic) {
  fullImageBox.style.display = "flex";
  fullImage.src = pic;
}

function closeFullimage() {
  fullImageBox.style.display = "none";
}
