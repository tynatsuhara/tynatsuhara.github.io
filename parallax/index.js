window.onload = function() {
  configureParallax();

//addParallax(id, img, width, height, weight, left, right, top, bottom) {
  addParallax("mtn", "images/mtn.png", "30%", "auto", -1.5, "10%", "auto", "auto", "0");
  addParallax("mtn", "images/mtn.png", "32%", "auto", -2, "0%", "auto", "auto", "0");
  addParallax("mtn", "images/mtn.png", "32%", "auto", -3, "20%", "auto", "auto", "0");
  addParallax("mtn", "images/mtn.png", "40%", "auto", -5, "0", "0", "auto", "0");
}
