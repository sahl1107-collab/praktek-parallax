const sky = document.querySelector(".sky");
const plane = document.querySelector(".plane");
const bird = document.querySelector(".bird");
const text = document.querySelector(".text");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  sky.style.top = value * -0.3 + "px";
  plane.style.left = value * 0.5 + "px";
  bird.style.left = -value * 0.2 + "px";
  text.style.top = -value * 0.4 + "px";
});
