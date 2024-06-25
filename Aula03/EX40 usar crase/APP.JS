
function Z() {

let b = parseFloat(document.getElementById("b").value)
let h = parseFloat(document.getElementById("h").value)
let bh = (b*h)/2
let volume = bh * h

document.getElementById("soma").innerHTML = ` O volume do prisma é  ${volume.toFixed(2)}` 
}
