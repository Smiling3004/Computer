// function imgSlider(anything) {
//   document.querySelector(".computer").src = anything;
// }
// function changeBgColor(color) {
//   const sec = document.querySelector(".sec");
//   sec.style.background = color;
// }
// document.querySelectorAll(".like-button").forEach((button) => {
//   button.addEventListener("click", function () {
//     this.classList.toggle("liked");
//   });
// });
function loadCSS(theme) {
  // Remove existing theme CSS if any
  var existingLink = document.getElementById("theme-css");
  if (existingLink) {
    existingLink.parentNode.removeChild(existingLink);
  }

  // Create a new link element for the theme CSS
  var link = document.createElement("link");
  link.id = "theme-css";
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = theme + ".css"; // Assumes the CSS files are in the same directory
  link.media = "all";

  // Append the new link element to the head
  document.getElementsByTagName("head")[0].appendChild(link);
}

function imgSlider(imageSrc) {
  document.querySelector(".imgBx img").src = imageSrc;
}

// Event listeners for theme change
document
  .querySelector('li img[src="Images/computer.png"]')
  .addEventListener("click", function () {
    loadCSS("theme-computer");
  });
document
  .querySelector('li img[src="Images/laptop.png"]')
  .addEventListener("click", function () {
    loadCSS("theme-laptop");
  });
document
  .querySelector('li img[src="Images/printer.png"]')
  .addEventListener("click", function () {
    loadCSS("theme-printer");
  });
var myCarousel = document.querySelector("#carouselExampleDark");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000, // Adjust interval as needed
  wrap: true,
});
document.querySelectorAll(".like-button").forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("liked");
  });
});
