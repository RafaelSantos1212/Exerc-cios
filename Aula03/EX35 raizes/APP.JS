
function Z() {

let N = parseFloat(document.getElementById("N").value)


document.getElementById("soma").innerHTML = " O número digitado foi:  " + N + " <br> <br> Sua raiz quadrada é: " + (Math.sqrt(N)).toFixed(3) + " <br> <br> Sua raiz cúbida é: " + (Math.cbrt(N)).toFixed(3) 


}
