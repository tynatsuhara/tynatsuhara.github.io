const KINDA_WHITE = "#f8f8f8"
const COLORS = [
    "#5db382",  // green
    "#1e74d6",  // bright blue
    "#5da3b3",  // gray blue
    "#c75065",  // red
    "#7d4cad",  // purp
    "#383838",  // gray
]
const COLOR = COLORS[Math.floor(Math.random() * (COLORS.length))]

function highlight(el) {
    el.style.color = COLOR;
    el.style.backgroundColor = KINDA_WHITE;
}

function lowlight(el) {
    el.style.color = KINDA_WHITE;
    el.style.backgroundColor = COLOR;
}

const highlighedSide = Math.random() > 0.5 ? "a" : "b";
const a = highlight(document.getElementById(highlighedSide));
const b = lowlight(document.getElementById(highlighedSide == "a" ? "b" : "a"));
