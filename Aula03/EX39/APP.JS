
function Z() {

let b = parseFloat(document.getElementById("b").value)
let B = parseFloat(document.getElementById("B").value)
let h = parseFloat(document.getElementById("h").value)
let abc = (b + B) * h / 2

document.getElementById("soma").innerHTML = " A área do trapézio é " + abc.toFixed(2)
}
