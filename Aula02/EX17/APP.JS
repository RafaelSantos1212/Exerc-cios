
function Z() {

let X = parseInt(document.getElementById("X").value)

document.getElementById("numero").innerHTML = " O número digitado foi: " + X 
document.getElementById("ant").innerHTML = " O antecessor deste número é " + (X-1) 
document.getElementById("suc").innerHTML = " O sucessor deste número é " + (X+1)

} 
