
function Z() {

let A = parseFloat(document.getElementById("A").value)
let B = (parseFloat(document.getElementById("B").value))/100


document.getElementById("soma").innerHTML = " O valor total a ser pago será " + (A+(A*B)).toFixed(2) + " reais. "


} 
