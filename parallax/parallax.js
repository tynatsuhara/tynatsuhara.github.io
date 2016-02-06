var xPercent;

// This should be called by the client js from their window.onload
function configureParallax() {
  document.querySelector("body").onmousemove = setMousePos;
  createParallaxCSS();
  setInterval(moveParallaxItems, 10);
};

/*
  Besides configureParallax, this is the only method that should be called externally.
  The method  takes an id, image url, width, and height (preferably in %). Then,
  it takes a weight parameter. This is the max % that it will shift left or right.
  dependent on the mouse. Can be positive or negative, positive shifts towards mouse.
  After that, it takes 4 parameters for left, right, top, and bottom. Pass "auto"
  if you don't want to modify a position value.
*/
function addParallax(id, img, width, height, weight, left, right, top, bottom) {
  var item = document.createElement("div");
  item.className = "parallax-item";
  item.style.position = "absolute";
  item.style.width = "100%";
  item.style.height = "100%";
  item.parallaxWeight = weight;

  var image = document.createElement("img");
  image.src = img;
  image.id = id;
  image.alt = id;
  image.style.display = "block";
  image.style.position = "absolute";
  image.style.left = left;
  image.style.right = right;
  image.style.top = top;
  image.style.bottom = bottom;
  image.style.width = width;
  image.style.height = height;
  image.style.margin = "auto";

  item.appendChild(image);
  document.querySelector("body").appendChild(item);
}

function createParallaxCSS() {
  var body = [document.querySelector("body"), document.querySelector("html")];
  for (var i = 0; i < body.length; i++) {
    body[i].style.height = "100%";
    body[i].style.margin = "0";
    body[i].style.overflow = "hidden";
  }
}

function setMousePos(event) {
  xPercent = event.clientX * 1.0 / window.innerWidth;
}

function moveParallaxItems() {
  var pItems = document.querySelectorAll(".parallax-item");
  for (var i = 0; i < pItems.length; i++) {
    console.log(2 * xPercent - 1);
    pItems[i].style.left = (2 * xPercent - 1) * pItems[i].parallaxWeight + "%";
  }
}

function id(element) {
  return document.getElementById(element);
}
