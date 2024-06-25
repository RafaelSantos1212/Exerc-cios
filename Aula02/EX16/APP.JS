
function Z() {

let X = parseInt(document.getElementById("X").value)
let Y = parseInt(document.getElementById("Y").value)
document.getElementById("numeros").innerHTML = " O números digitados foram: " + X + " e " + Y 
document.getElementById("soma").innerHTML = " A soma dos números é " + (X+Y) 
document.getElementById("sub").innerHTML = " A subtração dos números é " + (X-Y)
document.getElementById("multi").innerHTML = " A multiplicação dos números é " + (X*Y)
document.getElementById("divi").innerHTML = " A divisão dos números é " + (X/Y)
document.getElementById("media").innerHTML = " A média dos números é " + (X+Y)/2
} 
