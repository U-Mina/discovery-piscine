// hex clr format
function createRandomClr() {
    const s = "0123456789ABCDEF";
    let clr = "#";
    for (let i = 0; i < 6; i++) {
        clr += s[Math.floor(Math.random() * 16)];
    }
    return clr;
}

document.getElementById("colorButton").addEventListener("click", function() {
    document.body.style.backgroundColor = createRandomClr();
});

// $('#id').on('click', function() {
