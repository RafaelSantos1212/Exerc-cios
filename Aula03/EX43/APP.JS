
function Z() {

let r = parseFloat(document.getElementById("r").value)
let area = Math.PI * (r ** 2) * 4
let vol = (Math.PI * (r ** 3) * 4)/3


document.getElementById("soma").innerHTML = " A área do cilindro é " + area.toFixed(3) +  "<br> <br> O volume do cilindro é " + vol.toFixed(3)
}


