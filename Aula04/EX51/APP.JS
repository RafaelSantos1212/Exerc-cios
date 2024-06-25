function tudo() {

    let notaA = parseFloat(document.getElementById("notaA").value)
    let notaB = parseFloat(document.getElementById("notaB").value)
    let notaC = parseFloat(document.getElementById("notaC").value)
    let notaD = parseFloat(document.getElementById("notaD").value)
    let notaE = parseFloat(document.getElementById("notaE").value)
    let media = (notaA + notaB + notaC + notaD + notaE) / 5

     document.getElementById("conta").innerHTML = ` Média aritmética: ${media.toFixed(2)}`
 }