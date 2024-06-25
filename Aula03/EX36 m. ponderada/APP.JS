
function Z() {

let N1 = parseFloat(document.getElementById("N1").value)
let N2 = parseFloat(document.getElementById("N2").value)
let N3 = parseFloat(document.getElementById("N3").value)
let N4 = parseFloat(document.getElementById("N4").value)

let media = (N1 * 1) + (N2 * 2) + (N3 * 3) + (N4 * 4) 
let ponderada = (media/10)

document.getElementById("soma").innerHTML = ponderada


}
