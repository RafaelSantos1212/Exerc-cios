
function Z() {

let P = parseFloat(document.getElementById("P").value)


document.getElementById("soma").innerHTML = " O valor total a ser pago, com desconto, é " + (P-(P*10/100)).toFixed(2) + " reais. "


} 
