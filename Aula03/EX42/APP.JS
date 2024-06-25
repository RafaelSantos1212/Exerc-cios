
function Z() {

let r = parseFloat(document.getElementById("r").value)
let h = parseFloat(document.getElementById("h").value)
let ab = Math.PI * (r ** 2)
let vol = ab * h


document.getElementById("soma").innerHTML = " O volume do cilindro é " + vol.toFixed(3)
}


