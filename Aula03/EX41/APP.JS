
function Z() {

let rM = parseFloat(document.getElementById("rM").value)
let rm = parseFloat(document.getElementById("rm").value)
let ArM = Math.PI * (rM ** 2)
let Arm = Math.PI * (rm ** 2)
let A = ArM - Arm


 if (ArM <= Arm) {
alert (" O valor da área menor não pode ser maior que o da área maior")
}else

document.getElementById("soma").innerHTML = " A área da coroa é " + A.toFixed(3)
}


