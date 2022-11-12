const SIDE_A = "a"
const SIDE_B = "b"
const KINDA_WHITE = "#f8f8f8"
const COLORS = [
    "#4e7876",  // sage
    "#1e606e",  // green blue
    "#5f2f45",  // maroon
    "#37364e",  // midnight
]

let colorIndex = Math.floor(Math.random() * (COLORS.length))
const highlighedSide = Math.random() > 0.5 ? SIDE_A : SIDE_B

const colorizeLinks = (parentElement, color) => {
    Array.from(parentElement.getElementsByTagName("a")).forEach(l => {
        const underline = document.createElement("div")
        underline.className = 'underline'
        underline.style.backgroundColor = color
        l.appendChild(underline)
    })
}

const colorize = (id) => {
    document.querySelectorAll(".underline").forEach(el => el.remove());

    const selectedColor = COLORS[colorIndex]
    const el = document.getElementById(id)
    el.style.color = selectedColor
    el.style.backgroundColor = KINDA_WHITE
    colorizeLinks(el, selectedColor)
    const el2 = document.getElementById(id === SIDE_A ? SIDE_B : SIDE_A)
    el2.style.color = KINDA_WHITE
    el2.style.backgroundColor = selectedColor
    colorizeLinks(el2, KINDA_WHITE)
}

colorize(highlighedSide)

document.onkeydown = (e) => {
    if (e.key === "c") {
        colorIndex = (colorIndex + 1) % COLORS.length
        colorize(highlighedSide)
    }
}
