
function Z() {

let R = parseFloat(document.getElementById("R").value)
let A = Math.PI * (R ** 2)
let P = 2 * Math.PI * R

document.getElementById("soma").innerHTML = "A área da circunferência é " + A.toFixed(3) + "<br> <br> O perímetro da circunferência é " + P.toFixed(3)

}
