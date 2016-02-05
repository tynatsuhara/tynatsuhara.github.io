var xPercent;
var offset = 5;

window.onload = function() {
  document.querySelector("body").onmousemove = setMousePos;
  setInterval(moveParallaxItems, 10);
};
function setMousePos(event) {
  console.log(Math.round(event.clientX * 1.0 / window.innerWidth * 100));
  xPercent = event.clientX * 1.0 / window.innerWidth;
}

function moveParallaxItems() {
  var pItems = document.querySelectorAll(".parallax-item");
  for (var i = 0; i < pItems.length; i++) {
    pItems[i].style.left = (xPercent - 0.5) * offset * (i+1) + "%";
  }
}
