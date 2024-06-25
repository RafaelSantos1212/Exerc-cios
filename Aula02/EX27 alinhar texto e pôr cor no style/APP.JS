
function Z() {

let P = parseFloat(document.getElementById("P").value)
let V = parseFloat(document.getElementById("V").value)

document.getElementById("soma").innerHTML = " Você precisa de " + (P-V).toFixed(2) + " reais para comprar o lanche. "


} 
