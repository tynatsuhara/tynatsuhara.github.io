const SIDE_A = "a"
const SIDE_B = "b"
const KINDA_WHITE = "#f8f8f8"
const COLORS = [
    "#68a691",  // green
    "#4e7876",  // sage
    "#4f759b",  // blue
    "#1e606e",  // green blue
    "#c75065",  // red
    "#5f2f45",  // maroon
    "#37364e",  // midnight
]

let colorIndex = Math.floor(Math.random() * (COLORS.length))
const highlighedSide = Math.random() > 0.5 ? SIDE_A : SIDE_B

function colorize(id) {
    const el = document.getElementById(id)
    el.style.color = COLORS[colorIndex]
    el.style.backgroundColor = KINDA_WHITE
    const el2 = document.getElementById(id === SIDE_A ? SIDE_B : SIDE_A)
    el2.style.color = KINDA_WHITE
    el2.style.backgroundColor = COLORS[colorIndex]
}

colorize(highlighedSide);

document.onkeydown = (e) => {
    if (e.key === "Enter") {
        colorIndex = (colorIndex + 1) % COLORS.length
        colorize(highlighedSide);
    }
}
