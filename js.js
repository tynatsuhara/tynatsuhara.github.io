const addUnderlines = (parentElement) => {
    Array.from(parentElement.getElementsByTagName("a")).forEach(l => {
        const underline = document.createElement("div")
        underline.className = 'underline'
        l.appendChild(underline)
    })
}

const el = document.getElementById("a")
addUnderlines(el, "#37364e")

const showActingStuff = () => {
    document.getElementById("acting").classList = "open";
}

window.onload = () => {
    // add this after load to prevent an ugly transition on page load
    var styleSheet = document.createElement("style")
    styleSheet.innerText =  "a { transition: background-color .25s ease-in-out; }"
    document.head.appendChild(styleSheet)
}