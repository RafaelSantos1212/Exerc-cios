
function Z() {

let ladoA = parseFloat(document.getElementById("ladoA").value)
let ladoB = parseFloat(document.getElementById("ladoB").value)
let ladoC = parseFloat(document.getElementById("ladoC").value)
let resultado = ladoA*ladoB*ladoC

console.log(ladoA)
if (ladoA <= 0 || !ladoA) {
    alert ("O valor de nenhum lado pode ser menor ou igual a zero")
}else {
    document.getElementById("soma").innerHTML = " O volume do paralelepípedo é " + resultado.toFixed(2)
    }
}