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