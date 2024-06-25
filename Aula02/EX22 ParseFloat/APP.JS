
function Z() {

let B = parseFloat(document.getElementById("B").value)
let C = parseFloat(document.getElementById("C").value)
let VB = parseFloat(document.getElementById("VB").value)
let VC = parseFloat(document.getElementById("VC").value)

document.getElementById("soma").innerHTML = " Você ganhará " + (B*VB+C*VC).toFixed(2) + " reais. "


} 
