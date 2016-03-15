var xPercent;
var yPercent;

// This should be called by the client js from their window.onload
function configureParallax() {
  document.querySelector("body").onmousemove = setMousePos;
  createParallaxCSS();
  setInterval(moveParallaxItems, 10);
};

/*
  Adds a parallax image object to the body of the page.
  The method  takes an id, image url, width, and height (preferably in %). Then,
  it takes two weight parameters. These are the max % that it will shift left/right/up/down
  dependent on the mouse. Can be positive or negative, positive shifts towards mouse.
  After that, it takes 4 parameters for left, right, top, and bottom. Pass "auto"
  if you don't want to modify a position value.
*/
function addParallaxImage(id, img, width, height, xWeight, yWeight, left, right, top, bottom) {
  var item = document.createElement("div");
  item.className = "parallax-item";
  item.style.position = "absolute";
  item.style.width = "100%";
  item.style.height = "100%";
  item.xParallaxWeight = xWeight;
  item.yParallaxWeight = yWeight;

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
  yPercent = event.clientY * 1.0 / window.innerHeight;
}

function moveParallaxItems() {
  var pItems = document.querySelectorAll(".parallax-item");
  for (var i = 0; i < pItems.length; i++) {
    pItems[i].style.left = (2 * xPercent - 1) * pItems[i].xParallaxWeight + "%";
    pItems[i].style.top = (2 * yPercent - 1) * pItems[i].yParallaxWeight + "%";
  }
}

function id(element) {
  return document.getElementById(element);
}
